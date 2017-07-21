"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blade_1 = require("./blade");
var UserControlBase_1 = require("./UserControlBase");
var AreaBlades = (function (_super) {
    __extends(AreaBlades, _super);
    function AreaBlades($scope, portalService) {
        var _this = _super.call(this, $scope, portalService) || this;
        _this.blades = new Array();
        // this.areaBlades = this.portalService.$window.document.getElementById('apa-blade-area');
        _this.portalScroll = _this.portalService.$window.document.getElementById('apa-portal-scroll');
        _this.setupAddBladeListener();
        _this.setupShowHideNotificationAreaListener();
        _this.setupWindowResizeListener(function () { _this.setPortalScrollCss(); });
        return _this;
    }
    // #endregion
    // #region Methods
    AreaBlades.prototype.raiseAddBladeEvent = function (args) {
        var isBladeAlreadyShown = false;
        this.blades.forEach(function (blade) {
            if (blade.path === args.path) {
                // Blade is already show, just activate it again
                blade.onActivate();
                isBladeAlreadyShown = true;
                return;
            }
        });
        if (!isBladeAlreadyShown) {
            // Add the blade, since it is not yet shown
            this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
        }
    };
    AreaBlades.prototype.setFirstBlade = function (path) {
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    };
    AreaBlades.prototype.addBlade = function (path, senderPath) {
        var _this = this;
        if (senderPath === void 0) { senderPath = ''; }
        if (path == null) {
            return;
        }
        if (senderPath == null) {
            return;
        }
        var portalcontent = null;
        this.portalService.$analytics.pageTrack(path);
        path = path.toLowerCase();
        senderPath = senderPath.toLowerCase();
        // #region Verify
        if (path === undefined || path === '') {
            return;
        }
        if (this.portalService.$window !== undefined) {
            if (this.portalService.$window.document === undefined) {
                throw new Error('[angularportalazure.AreaBlades] \'this.$window.document\' undefined.');
            }
            portalcontent = this.portalService.$window.document.getElementById('apa-portal-scroll');
            if (portalcontent === null) {
                throw new Error('[angularportalazure.AreaBlades] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
            }
        }
        // #endregion
        // #region Clear all children of the parent path
        this.clearChild(senderPath);
        // #endregion
        // #region Make sure the blade is not yet show
        this.blades.forEach(function (blade) {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                throw new Error('[angularportalazure.AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
            }
        });
        // #endregion
        // #region Show the blade
        var blade = new blade_1.Blade(this.$scope, this.portalService, path, '');
        this.blades.push(blade);
        // #endregion
        // #region Position the blade
        if (this.portalService.$window !== undefined) {
            this.portalService.$window.setTimeout(function () {
                var azureportalblades = _this.portalService.$window.document.getElementsByClassName('azureportalblade');
                var i = _this.blades.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                    var sl = azureportalblades[i].offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        }
        // #endregion
        return blade;
    };
    AreaBlades.prototype.clearAll = function () {
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    };
    AreaBlades.prototype.clearPath = function (path) {
        var _this = this;
        // we do not distinguish between lower and upper case path name
        path = path.toLowerCase();
        var isremoved = this.blades.some(function (blade, index) {
            if (blade.comparePaths(blade.path, path)) {
                _this.blades.length = index;
                return true;
            }
        });
        if (!isremoved && this.portalService.areaNotification.path === path) {
            this.portalService.areaNotification.hide();
            isremoved = true;
        }
        if (!isremoved) {
            throw new Error('[angularportalazure.AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
        this.showPanoramaIfNoBlades();
    };
    AreaBlades.prototype.clearLevel = function (level) {
        if (this.blades.length < level) {
            throw new Error('[angularportalazure.AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }
        if (level === 0) {
            level = 1;
        }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    };
    AreaBlades.prototype.clearLastLevel = function () {
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    };
    AreaBlades.prototype.clearChild = function (path) {
        var _this = this;
        path = path.toLowerCase();
        if (path === '') {
            return;
        }
        var isremoved = this.blades.some(function (blade, index) {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                _this.blades.length = index + 1;
                return true;
            }
        });
        if (!isremoved) {
            throw new Error('[angularportalazure.AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    };
    AreaBlades.prototype.showPanoramaIfNoBlades = function () {
        if (this.blades.length === 0) {
            if (this.portalService.panorama !== undefined) {
                {
                    this.portalService.panorama.isVisible = true;
                }
            }
        }
    };
    AreaBlades.prototype.hidePanorama = function () {
        if (this.portalService.panorama !== undefined) {
            this.portalService.panorama.isVisible = false;
        }
    };
    /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
    AreaBlades.prototype.close = function () {
        // Unregister Listeners
        this.addBladeListener();
        this.areaNotificationShowListener();
        this.areaNotificationHideListener();
    };
    // #endregion
    AreaBlades.prototype.setPortalScrollCss = function () {
        this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
    };
    AreaBlades.prototype.setupShowHideNotificationAreaListener = function () {
        var _this = this;
        this.areaNotificationShowListener = this.portalService.$rootScope.$on('AreaNotification.Show', function (event, args) {
            _this.setPortalScrollCss();
        });
        this.areaNotificationHideListener = this.portalService.$rootScope.$on('AreaNotification.Hide', function (event, args) {
            _this.setPortalScrollCss();
        });
    };
    AreaBlades.prototype.setupAddBladeListener = function () {
        var _this = this;
        this.addBladeListener = this.portalService.$rootScope.$on('AreaBlades.AddBlade', function (event, args) {
            _this.addBlade(args.path, args.pathSender);
        });
    };
    return AreaBlades;
}(UserControlBase_1.UserControlBase));
// #region Constructor
AreaBlades.$inject = ['$scope', 'angularportalazure.portalService'];
exports.AreaBlades = AreaBlades;
