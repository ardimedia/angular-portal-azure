/// <reference types="angular" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    /** Define Angular module and its dependencies */
    var angularModule = angular.module('angularportalazure', [
        // Angular modules
        'ngResource',
        'ngDialog',
        'pascalprecht.translate',
        'angulartics',
        'angulartics.google.analytics'
    ]);
    /** Configure Angular: $translateProvider */
    angularModule.config(['$translateProvider',
        function ($translateProvider) {
            $translateProvider.useSanitizeValueStrategy('escape');
            $translateProvider.fallbackLanguage('de');
            $translateProvider.use(readCookie('SAMPLE_TRANSLATE_LANG_KEY'));
        }]);
    angularModule.config([function () {
        }]);
    angularModule.run(function () {
    });
    /** Read cookie */
    function readCookie(cookieName) {
        var cookieNameEQ = cookieName + '=';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            ;
            if (cookie.indexOf(cookieNameEQ) === 0) {
                return cookie.substring(cookieNameEQ.length, cookie.length);
            }
            ;
        }
        return null;
    }
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var UserAccount = (function () {
        //#region Constructor
        function UserAccount(username, firstName, lastName) {
            if (firstName === void 0) { firstName = ''; }
            if (lastName === void 0) { lastName = ''; }
            this.userName = username;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(UserAccount.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                throw new Error('[angularportalazure.UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
            },
            enumerable: true,
            configurable: true
        });
        return UserAccount;
    }());
    angularportalazure.UserAccount = UserAccount;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var UserControlBase = (function () {
        //#region Constructor
        function UserControlBase($scope, portalService) {
            this.$scope = $scope;
            this.portalService = portalService;
        }
        //#endregion
        //#region Methods
        /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
        UserControlBase.prototype.$onDestroy = function () {
            this.removeWindowResizeListener();
        };
        /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
        UserControlBase.prototype.ngOnDestroy = function () {
            this.removeWindowResizeListener();
        };
        UserControlBase.prototype.removeWindowResizeListener = function () {
            if (this.windowResizeHandler !== undefined) {
                this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
            }
        };
        UserControlBase.prototype.setupWindowResizeListener = function (callback) {
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            var id;
            this.portalService.$window.addEventListener('resize', this.windowResizeHandler = function () {
                clearTimeout(id);
                id = setTimeout(function () { callback(); }, 50);
            });
        };
        UserControlBase.prototype.isStringNullOrEmpty = function (value) {
            if (value && value.replace(' ', '').length > 0) {
                return false;
            }
            else {
                return true;
            }
        };
        UserControlBase.prototype.getRandomString = function (length) {
            if (length === void 0) { length = 20; }
            return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
        };
        return UserControlBase;
    }());
    angularportalazure.UserControlBase = UserControlBase;
})(angularportalazure || (angularportalazure = {}));
"use strict";
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
/// <reference path="useraccount.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="iaddbladeeventargs.ts" />
var angularportalazure;
(function (angularportalazure) {
    var Blade = (function (_super) {
        __extends(Blade, _super);
        //#region Constructor
        function Blade($scope, portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, $scope, portalService) || this;
            //#endregion
            //#region Properties
            /** HACK: 2016-11-06/hp
            [angular-portal-blade] needs [this] as the controller.
            We don't know how to provide [this] to the directive.
            So we came up with this [vm] property.*/
            _this.vm = {};
            _this.visibility = 'collapse';
            _this.title = '';
            _this.subTitle = '';
            _this.width = { 'width': '0' };
            _this.widthStackLayout = { 'width': '50px' };
            _this.isInnerHtml = true;
            _this.statusBar = '';
            _this.statusBarClass = '';
            //#endregion
            //#endregion
            //#region Commands
            _this.isCommandBrowse = false;
            _this.commandBrowse = function () { _this.onCommandBrowse(); };
            _this.commandBrowseText = '';
            _this.isCommandCancel = false;
            _this.commandCancel = function () { _this.onCommandCancel(); };
            _this.commandCancelText = '';
            _this.isCommandCopy = false;
            _this.commandCopy = function () { _this.onCommandCopy(); };
            _this.commandCopyText = '';
            _this.isCommandDelete = false;
            _this.commandDelete = function () { _this.onCommandDelete(); };
            _this.commandDeleteText = '';
            _this.isCommandDocument = false;
            _this.commandDocument = function () { _this.onCommandDocument(); };
            _this.commandDocumentText = '';
            _this.isCommandDocument2 = false;
            _this.commandDocument2 = function () { _this.onCommandDocument2(); };
            _this.commandDocument2Text = '';
            _this.isCommandDocument3 = false;
            _this.commandDocument3 = function () { _this.onCommandDocument3(); };
            _this.commandDocument3Text = '';
            _this.isCommandDocument4 = false;
            _this.commandDocument4 = function () { _this.onCommandDocument4(); };
            _this.commandDocument4Text = '';
            _this.isCommandDocument5 = false;
            _this.commandDocument5 = function () { _this.onCommandDocument5(); };
            _this.commandDocument5Text = '';
            _this.isCommandNew = false;
            _this.commandNew = function () { _this.onCommandNew(); };
            _this.commandNewText = '';
            _this.isCommandOrder = false;
            _this.commandOrder = function () { _this.onCommandOrder(); };
            _this.commandOrderText = '';
            _this.isCommandRestart = false;
            _this.commandRestart = function () { _this.onCommandRestart(); };
            _this.commandRestartText = '';
            _this.isCommandSave = false;
            _this.commandSave = function () { _this.onCommandSave(); };
            _this.commandSaveText = '';
            _this.isCommandSearch = false;
            _this.commandSearch = function () { _this.onCommandSearch(); };
            _this.commandSearchText = '';
            _this.isCommandStart = false;
            _this.commandStart = function () { _this.onCommandStart(); };
            _this.commandStartText = '';
            _this.isCommandStop = false;
            _this.commandStop = function () { _this.onCommandStop(); };
            _this.commandStopText = '';
            _this.isCommandSwap = false;
            _this.commandSwap = function () { _this.onCommandSwap(); };
            _this.commandSwapText = '';
            _this.isCommandExcel = false;
            _this.commandExcel = function () { _this.onCommandExcel(); };
            _this.commandExcelText = '';
            _this.vm = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
            if (!portalService) {
                throw new Error('[angularportalazure.Blade] constructor parameter \'portalService\' must be provided.');
            }
            if (!path) {
                throw new Error('[angularportalazure.Blade] constructor parameter \'path\' must be a string.');
            }
            if (!title && title !== '') {
                throw new Error('[angularportalazure.Blade] constructor parameter \'title\' must be a string when provided.');
            }
            if (!subtitle && subtitle !== '') {
                throw new Error('[angularportalazure.Blade] constructor parameter \'subtitle\' must be a string when provided.');
            }
            if (!width && width !== 0) {
                throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be a number when provided.');
            }
            if (width < 50) {
                throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be at least 50.');
            }
            // Set 'this.portalService.areaBlades.blades[index]' to 'this'
            //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
            _this.portalService.areaBlades.blades.forEach(function (blade, index) {
                if (blade.path === _this.path) {
                    _this.portalService.areaBlades.blades[index] = _this;
                }
            });
            _this.setupWindowResizeListener(function () { _this.setBladeHeights(); });
            _this.setBladeHeights();
            return _this;
        }
        Object.defineProperty(Blade.prototype, "path", {
            get: function () {
                return this._path;
            },
            // For the moment we do not distinguish between lower and upper case path name
            set: function (newPath) {
                if (newPath == null) {
                    return;
                }
                this._path = newPath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#region Methods
        //#region Methods
        Blade.prototype.activate = function () {
            this.onActivate();
            this.onActivated();
        };
        /** Override */
        Blade.prototype.onActivate = function () {
        };
        Blade.prototype.onActivated = function () {
        };
        Blade.prototype.navigateTo = function (path) {
            this.onNavigateTo(path);
        };
        /** Must be overridden. */
        Blade.prototype.onNavigateTo = function (value) {
            throw new Error('[angularportalazure.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        // At the moment we do not distinguish between lower and upper case path name
        Blade.prototype.comparePaths = function (path1, path2) {
            if (path1 == null) {
                return false;
            }
            if (path2 == null) {
                return false;
            }
            if (path1.toLowerCase() === path2.toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        };
        /** close blade. */
        Blade.prototype.close = function () {
            if (this.portalService.areaBlades !== undefined) {
                this.portalService.areaBlades.clearPath(this.path);
            }
            else {
                throw new Error('[angularportalazure.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
            }
        };
        //#region Set StatusBar
        Blade.prototype.clearStatusBar = function () {
            this.statusBar = '';
            this.statusBarClass = '';
        };
        Blade.prototype.setStatusBarLoadData = function () {
            this.statusBar = 'Daten laden...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        Blade.prototype.setStatusBarSaveData = function () {
            this.statusBar = 'Daten speichern...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        Blade.prototype.setStatusBarDeleteData = function () {
            this.statusBar = 'Daten löschen...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        Blade.prototype.setStatusBarDeleteDataCanceled = function () {
            this.statusBar = 'Löschen abgebrochen.';
            this.statusBarClass = 'apa-statusbar-info';
        };
        Blade.prototype.setStatusBarInfo = function (text) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-info';
        };
        Blade.prototype.setStatusBarError = function (text) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-error';
        };
        Blade.prototype.setStatusBarNoDataFound = function () {
            this.statusBar = 'Keine Daten gefunden!';
            this.statusBarClass = 'apa-statusbar-error';
        };
        Blade.prototype.setStatusBarException = function (exception) {
            this.statusBar = angularportalazure.Exception.getOneLineMessage(exception);
            this.statusBarClass = 'apa-statusbar-error';
        };
        //#endregion
        //#endregion
        //#region Commands
        Blade.prototype.onCommandBrowse = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCancel = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCopy = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDelete = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument2 = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument3 = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument4 = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument5 = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandNew = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandOrder = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandRestart = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSave = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSearch = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStart = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStop = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSwap = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandExcel = function () {
            throw new Error('[angularportalazure.Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expresssion, e.g. [name1 + name2] */
        Blade.prototype.setTitle = function (watchExpression, func) {
            var _this = this;
            if (this.watcherTitle === undefined) {
                if (this.$scope !== null) {
                    // angular1
                    this.watcherTitle = this.$scope.$watch(watchExpression, function () { func(); });
                    this.$scope.$on('$destroy', function () { _this.watcherTitle(); });
                }
                else {
                    // angular2
                    console.log('[Blade.setTitle()] not supported for angular2. use [ngOnChanges] instead.');
                }
            }
        };
        Blade.prototype.setBladeHeights = function () {
            this.bladeContentHeight = this.portalService.$window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
            this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
            //this.portalService.$timeout(() => {
            //}, 50);
        };
        return Blade;
    }(angularportalazure.UserControlBase));
    angularportalazure.Blade = Blade;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="blade.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="iaddbladeeventargs.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var AreaBlades = (function (_super) {
        __extends(AreaBlades, _super);
        function AreaBlades($scope, portalService) {
            var _this = _super.call(this, $scope, portalService) || this;
            _this.blades = new Array();
            //this.areaBlades = this.portalService.$window.document.getElementById('apa-blade-area');
            _this.portalScroll = _this.portalService.$window.document.getElementById('apa-portal-scroll');
            _this.setupAddBladeListener();
            _this.setupShowHideNotificationAreaListener();
            _this.setupWindowResizeListener(function () { _this.setPortalScrollCss(); });
            return _this;
        }
        //#endregion
        //#region Methods
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
            //#region Verify
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
            //#endregion
            //#region Clear all children of the parent path
            this.clearChild(senderPath);
            //#endregion
            //#region Make sure the blade is not yet show
            this.blades.forEach(function (blade) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    throw new Error('[angularportalazure.AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
                }
                ;
            });
            //#endregion
            //#region Show the blade
            var blade = new angularportalazure.Blade(this.$scope, this.portalService, path, '');
            this.blades.push(blade);
            //#endregion
            //#region Position the blade
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
            //#endregion
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
        //#endregion
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
    }(angularportalazure.UserControlBase));
    //#region Constructor
    AreaBlades.$inject = ['$scope', 'angularportalazure.portalService'];
    angularportalazure.AreaBlades = AreaBlades;
    angular.module('angularportalazure').service('angularportalazure.areaBlades', AreaBlades);
})(angularportalazure || (angularportalazure = {}));
/// <reference path="areablades.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeData = (function (_super) {
        __extends(BladeData, _super);
        //#region Constructor
        function BladeData($scope, portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 300; }
            return _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
        }
        //#endregion
        BladeData.prototype.onLoadItem = function () {
            this.visibility = 'collapse';
            this.setStatusBarLoadData();
        };
        BladeData.prototype.onLoadItems = function () {
            this.visibility = 'collapse';
            this.setStatusBarLoadData();
        };
        BladeData.prototype.onLoadedItem = function () {
            this.visibility = 'visible';
            this.clearStatusBar();
        };
        BladeData.prototype.onLoadedItems = function () {
            this.visibility = 'visible';
            this.clearStatusBar();
        };
        return BladeData;
    }(angularportalazure.Blade));
    angularportalazure.BladeData = BladeData;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeNav = (function (_super) {
        __extends(BladeNav, _super);
        //#region Constructor
        function BladeNav($scope, portalService, path, title, subtitle, width) {
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 315; }
            var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
            //#endregion
            //#region Properties
            _this.items = new Array();
            _this.isNav = true;
            _this.isInnerHtml = false;
            return _this;
        }
        //#endregion
        //#region Methods
        BladeNav.prototype.onNavigateTo = function (path) {
            if (path === '') {
                return;
            }
            this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
        };
        return BladeNav;
    }(angularportalazure.BladeData));
    angularportalazure.BladeNav = BladeNav;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladenav.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeNavItem = (function () {
        //#region Constructor
        function BladeNavItem(title, cssClass, bladePath, hrefPath, roles, isVisible, callback, bladeNav) {
            if (title === void 0) { title = ''; }
            if (cssClass === void 0) { cssClass = ''; }
            if (bladePath === void 0) { bladePath = ''; }
            if (hrefPath === void 0) { hrefPath = ''; }
            if (roles === void 0) { roles = ''; }
            if (isVisible === void 0) { isVisible = true; }
            if (callback === void 0) { callback = null; }
            if (bladeNav === void 0) { bladeNav = null; }
            this.title = title;
            this.cssClass = cssClass;
            this.bladePath = bladePath;
            this.hrefPath = hrefPath;
            this.roles = roles;
            this.isVisible = isVisible;
            this.callback = callback;
            this.bladeNav = bladeNav;
        }
        //#endregion
        //#region Methods
        BladeNavItem.prototype.onNavItemClick = function () {
            if (this.callback != null) {
                this.callback();
            }
        };
        return BladeNavItem;
    }());
    angularportalazure.BladeNavItem = BladeNavItem;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var AreaNotification = (function (_super) {
        __extends(AreaNotification, _super);
        //#region Constructor
        function AreaNotification($scope, portalService) {
            var _this = _super.call(this, $scope, portalService) || this;
            //#endregion
            //#region Properties
            _this.path = '';
            _this.widthAreaUsed = 0;
            _this._width = 250;
            _this._backgroundColor = '#32383f';
            _this.areaNotification = _this.portalService.$window.document.getElementById('apa-notification-area');
            _this.hide();
            _this.setupWindowResizeListener(function () { _this.calcualteCssStyles(); });
            return _this;
        }
        Object.defineProperty(AreaNotification.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
                this.calcualteCssStyles();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AreaNotification.prototype, "backgroundColor", {
            get: function () {
                return this._backgroundColor;
            },
            set: function (value) {
                this._backgroundColor = value;
                this.calcualteCssStyles();
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#region Methods
        AreaNotification.prototype.hide = function () {
            this.path = '';
            this.widthAreaUsed = 0;
            this.areaNotification.style.display = 'none';
            this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
        };
        AreaNotification.prototype.show = function (width) {
            if (width === void 0) { width = 250; }
            this.width = width;
            this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
            this.calcualteCssStyles();
            this.areaNotification.style.display = 'inline-block';
            this.portalService.$rootScope.$broadcast('AreaNotification.Show');
        };
        AreaNotification.prototype.calcualteCssStyles = function () {
            this.areaNotification.style.position = 'absolute';
            this.areaNotification.style.top = '0';
            this.areaNotification.style.height = '100%';
            this.areaNotification.style.backgroundColor = this.backgroundColor;
            this.areaNotification.style.borderLeft = '2px solid gray';
            this.areaNotification.style.width = this.width + 'px';
            this.areaNotification.style.left = this.portalService.$window.innerWidth - this.width + 'px';
            if (this.widthAreaUsed !== 0) {
                this.widthAreaUsed = this.width;
            }
        };
        return AreaNotification;
    }(angularportalazure.UserControlBase));
    angularportalazure.AreaNotification = AreaNotification;
})(angularportalazure || (angularportalazure = {}));
"use strict";
/// <reference path="portalservice.ts" />
/// <reference path="useraccount.ts" />
/// <reference path="usercontrolbase.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var AvatarMenu = (function (_super) {
        __extends(AvatarMenu, _super);
        //#region Constructor
        function AvatarMenu($scope, portalService) {
            return _super.call(this, $scope, portalService) || this;
        }
        return AvatarMenu;
    }(angularportalazure.UserControlBase));
    angularportalazure.AvatarMenu = AvatarMenu;
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    /** The names are used in CSS for layouting, e.g. style='mini' */
    var TileSizes;
    (function (TileSizes) {
        TileSizes[TileSizes["small"] = 0] = "small";
        TileSizes[TileSizes["mini"] = 1] = "mini";
        TileSizes[TileSizes["normal"] = 2] = "normal";
        TileSizes[TileSizes["herowide"] = 3] = "herowide";
    })(TileSizes = angularportalazure.TileSizes || (angularportalazure.TileSizes = {}));
})(angularportalazure || (angularportalazure = {}));
/// <reference path="tilesizes.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var TileSize = (function () {
        //#region Constructor
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
        }
        //#endregion
        //#region Methods
        TileSize.getTileSizes = function () {
            var tileSizes = Array();
            tileSizes.push(new TileSize(angularportalazure.TileSizes.small, 90, 90));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.mini, 180, 90));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.normal, 180, 180));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.herowide, 540, 360));
            return tileSizes;
        };
        return TileSize;
    }());
    angularportalazure.TileSize = TileSize;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="blade.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tilesize.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Tile = (function () {
        //#region Constructor
        function Tile(title, bladePath, portalService) {
            this.portalService = portalService;
            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = angularportalazure.TileSizes.normal;
        }
        Object.defineProperty(Tile.prototype, "bladePath", {
            //#region bladePath
            get: function () {
                return this._bladePath;
            },
            // For the moment we do not distinguish between lower and upper case path name
            set: function (newBladePath) {
                this._bladePath = newBladePath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#region Methods
        Tile.prototype.clicked = function () {
            this.portalService.areaBlades.setFirstBlade(this.bladePath);
        };
        return Tile;
    }());
    angularportalazure.Tile = Tile;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="tile.ts" />
/// <reference path="tilesize.ts" />
/// <reference path="tilesizes.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Tiles = (function () {
        function Tiles() {
            //#region Properties
            this.showTiles = true;
            this.tiles = new Array();
            this.isTilesLoaded = false;
            this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
            this.tileSizes = angularportalazure.TileSize.getTileSizes();
            this.nextLeft = 0;
            this.nextTop = 0;
            this.columnHeightMax = 0;
            //#endregion
        }
        //#endregion
        //#region Methods
        Tiles.prototype.addTile = function (tile) {
            this.isTilesLoaded = true;
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = angularportalazure.TileSizes[tile.tileSize]; // Get CSS Name
            tile.top = this.nextTop + 'px';
            tile.left = this.nextLeft + 'px';
            this.nextLeft += tileSize.width;
            if (tileSize.height > this.columnHeightMax) {
                this.columnHeightMax = tileSize.height;
            }
            if (this.nextLeft > 540) {
                this.nextLeft = 0;
                this.nextTop += this.columnHeightMax;
                this.columnHeightMax = 0;
            }
            this.tiles.push(tile);
            return tile;
        };
        return Tiles;
    }());
    angularportalazure.Tiles = Tiles;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
/// <reference path="usercontrolbase.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Startboard = (function (_super) {
        __extends(Startboard, _super);
        //#region Constructor
        function Startboard($scope, portalService) {
            var _this = _super.call(this, $scope, portalService) || this;
            _this.tiles = new angularportalazure.Tiles();
            return _this;
        }
        return Startboard;
    }(angularportalazure.UserControlBase));
    angularportalazure.Startboard = Startboard;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="avatarmenu.ts" />
/// <reference path="startboard.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Panorama = (function (_super) {
        __extends(Panorama, _super);
        //#endregion
        //#region Constructor
        function Panorama($scope, title, portalService) {
            var _this = _super.call(this, $scope, portalService) || this;
            _this.isVisible = true;
            _this.title = title;
            _this.portalService.panorama = _this;
            _this.avatarMenu = new angularportalazure.AvatarMenu(_this.$scope, _this.portalService);
            _this.startboard = new angularportalazure.Startboard(_this.$scope, _this.portalService);
            return _this;
        }
        return Panorama;
    }(angularportalazure.UserControlBase));
    angularportalazure.Panorama = Panorama;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="areablades.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var PortalShell = (function () {
        //#region Constructor
        function PortalShell(portalService, title) {
            if (title === void 0) { title = null; }
            this.portalService = portalService;
            this.portalService = portalService;
            this.portalService.panorama = new angularportalazure.Panorama(null, title, this.portalService);
            if (title === '' || title === null || title === undefined) {
                this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
            }
            else {
                this.portalService.panorama.title = title;
            }
        }
        return PortalShell;
    }());
    angularportalazure.PortalShell = PortalShell;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="areanotification.ts" />
/// <reference path="areablades.ts" />
/// <reference path="bladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />
/// <reference types="angulartics" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var PortalService = (function () {
        function PortalService($injector) {
            //#endregion
            //#region Properties
            this.parameter = { action: 'none', itemId: 0 };
            this.$injector = $injector;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            this.$rootScope = $injector.get('$rootScope');
            this.$window = $injector.get('$window');
            this.$analytics = $injector.get('$analytics');
            this.$timeout = $injector.get('$timeout');
            this.$translate = $injector.get('$translate');
            this.ngDialog = $injector.get('ngDialog');
        }
        return PortalService;
    }());
    //#region Constructor
    PortalService.$inject = ['$injector'];
    angularportalazure.PortalService = PortalService;
    angular.module('angularportalazure').service('angularportalazure.portalService', PortalService);
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="../../domain/portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
    function AngularPortalBladeController(portalService) {
        var _this = this;
        this.$onInit = function () {
            _this.close = function () { };
        };
    }
    var angularPortalBlade = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
        controller: AngularPortalBladeController,
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('angularPortalBlade', angularPortalBlade);
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var angularPortalGrid = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/bladegrid/bladegrid.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('angularPortalGrid', angularPortalGrid);
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
    function AngularPortalHomeController($scope, portalService) {
        this.$onInit = function () {
            portalService.areaNotification = new angularportalazure.AreaNotification($scope, portalService);
            portalService.areaBlades = new angularportalazure.AreaBlades($scope, portalService);
        };
    }
    var angularPortalHome = {
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
        controller: AngularPortalHomeController,
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('angularPortalHome', angularPortalHome);
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var angularPortalNav = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('angularPortalNav', angularPortalNav);
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeDetail = (function (_super) {
        __extends(BladeDetail, _super);
        //#region Constructor
        function BladeDetail($scope, portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
            //#endregion
            //#region Properties
            _this.item = {};
            _this.commandNewText = 'neu';
            _this.commandSaveText = 'speichern';
            _this.commandDeleteText = 'löschen';
            _this.commandCancelText = 'abbrechen';
            return _this;
        }
        //#endregion
        //#region Methods
        BladeDetail.prototype.loadItem = function (func) {
            var _this = this;
            this.onLoadItem();
            func().then(function (data) {
                _this.item = data;
                _this.onLoadedItem();
            }).catch(function (exception) {
                _this.setStatusBarException(exception);
            });
        };
        BladeDetail.prototype.saveItem = function (func) {
            var _this = this;
            this.onSaveItem();
            // Is form valid
            if (!this.formblade.$valid) {
                this.statusBar = 'Speichern nicht möglich! [Console] enthält weitere Informationen.';
                this.statusBarClass = 'apa-statusbar-error';
                console.log(this.formblade);
                return;
            }
            func().then(function (data) {
                _this.item = data;
                _this.onSavedItem();
            }).catch(function (exception) {
                _this.setStatusBarException(exception);
            });
        };
        BladeDetail.prototype.onSaveItem = function () {
            this.setStatusBarSaveData();
        };
        BladeDetail.prototype.onSavedItem = function () {
            this.clearStatusBar();
        };
        BladeDetail.prototype.onCommandCancel = function () {
            this.close();
        };
        return BladeDetail;
    }(angularportalazure.BladeData));
    angularportalazure.BladeDetail = BladeDetail;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeGrid = (function (_super) {
        __extends(BladeGrid, _super);
        //#region Constructor
        function BladeGrid($scope, portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
            //#endregion
            //#region Properties
            _this.items = [];
            return _this;
        }
        //#endregion
        //#region Methods
        BladeGrid.prototype.loadItems = function (func) {
            var _this = this;
            this.onLoadItems();
            func().then(function (data) {
                _this.items = data;
                _this.onLoadedItems();
            }).catch(function (exception) {
                _this.setStatusBarException(exception);
            });
        };
        //#region Filter
        BladeGrid.prototype.onFilter = function (actual, expected) {
            //#region Documentation
            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
            //#endregion
            //#region Helper functions
            // Implemenation detail:
            // > We implemented the following functions with in-line-functions, since onFilter is not called within the scope of a class (this. not working).
            // Function to convert 'number' to 'string'
            var convertToString = function (value) {
                return value + ''; // convert to string, so the next statements will process the value as a string
            };
            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual, expected) {
                expectedSplitted.forEach(function (expectedItem, index) {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        expectedSplitted[index] = ''; // expected has been found, initialize it now
                    }
                });
            };
            // Function to process an object
            var processObject = function (actual) {
                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];
                        if (typeof actual === 'number') {
                            actualValue = convertToString(actual);
                        }
                        if (typeof actualValue === 'string') {
                            if (actualValue.indexOf('object:') > -1) {
                                continue;
                            }
                            valueFound(actualValue, expected);
                        }
                    }
                    else {
                        // Process inherited properties
                        processObject(actual[actualProperty]);
                    }
                }
            };
            //#endregion
            //#region Initialize
            // Prepare 'expected' value
            expected = expected.toLowerCase();
            // Split the search string into its parts if separated by blanks
            var expectedSplitted = expected.split(' ');
            //#endregion
            //#region Process depending on type
            // Process property, typeof 'object'
            if (typeof actual === 'object') {
                processObject(actual);
            }
            // Process property, typeof 'number'
            if (typeof actual === 'number') {
                actual = convertToString(actual);
            }
            // Process property, typeof 'string'
            if (typeof actual === 'string') {
                valueFound(actual, expected);
            }
            //#endregion
            //#region Verify if all expected has been found
            var foundCount = 0;
            expectedSplitted.forEach(function (expectedItem) {
                if (expectedItem === '') {
                    foundCount++;
                }
            });
            //#endregion
            //#region Return result
            if (foundCount === expectedSplitted.length) {
                return true;
            }
            else {
                return false;
            }
            ;
            //#endregion
        };
        return BladeGrid;
    }(angularportalazure.BladeData));
    angularportalazure.BladeGrid = BladeGrid;
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Debug = (function () {
        //#region Constructor
        function Debug() {
        }
        //#endregion
        //#region Methods
        Debug.enable = function (key) {
            Debug.isEnabled = true;
            if (key) {
                Debug.keys.push(key);
            }
        };
        Debug.disable = function (key) {
            if (key) {
                var indexToDelete = Debug.keys.indexOf(key);
                Debug.keys.splice(indexToDelete, 1);
            }
            if (Debug.keys.length === 0) {
                Debug.isEnabled = false;
            }
        };
        Debug.write = function (debugLine, objects) {
            if ((Debug.isEnabled && Debug.keys.length === 0)
                || (Debug.isEnabled && Debug.isInKeys(debugLine))) {
                console.log(debugLine);
                if (objects !== undefined && Debug.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
                return true;
            }
            return false;
        };
        /** Extract the key (e.g. [azureportal] from a string */
        Debug.extractKey = function (text) {
            var extractKey = '';
            var firstCharacter = text.substring(0, 1);
            if (firstCharacter === '[') {
                // Find closing bracket
                var closingPos = text.indexOf(']');
                if (closingPos > 0) {
                    extractKey = text.substring(0, closingPos + 1);
                }
            }
            return extractKey;
        };
        /** Extract the key (e.g. [azureportal] from a string */
        Debug.isInKeys = function (debugLine) {
            var key = Debug.extractKey(debugLine);
            if (Debug.keys.indexOf(key) !== -1) {
                return true;
            }
            return false;
        };
        return Debug;
    }());
    //#endregion
    //#region Properties
    Debug.isEnabled = false;
    Debug.isWithObjects = false;
    Debug.keys = new Array();
    angularportalazure.Debug = Debug;
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var ExceptionDotNet = (function () {
        function ExceptionDotNet() {
        }
        return ExceptionDotNet;
    }());
    angularportalazure.ExceptionDotNet = ExceptionDotNet;
    var ValidationResultDotNet = (function () {
        function ValidationResultDotNet() {
        }
        return ValidationResultDotNet;
    }());
    angularportalazure.ValidationResultDotNet = ValidationResultDotNet;
    var ValidationsExceptionDotNet = (function (_super) {
        __extends(ValidationsExceptionDotNet, _super);
        function ValidationsExceptionDotNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidationsExceptionDotNet.prototype.convertResponse = function (response) {
            if (response.headers === undefined) {
                ValidationsExceptionDotNet.convertResponse(this, response.data);
                ValidationsExceptionDotNet.convertExceptionType(this, response.data);
            }
            else {
                ValidationsExceptionDotNet.convertResponse(this, response.json());
                ValidationsExceptionDotNet.convertExceptionType(this, response.json());
            }
        };
        ValidationsExceptionDotNet.convertResponse = function (exception, responseData) {
            // ExceptionDotNet
            exception.ExceptionMessage = responseData.ExceptionMessage;
            exception.Message = responseData.Message;
            exception.StackTrace = responseData.StackTrace;
            exception.InnerException = responseData.InnerException;
            // ValidationsExceptionDotNet
            //exception.ClassName = 'Not yet implemented';
            //exception.Data = [{ key: 0, value: 'Not yet implemented' }];
            // ValidationResultDotNet
            //exception.ValidationResults = [{ ErrorMessage: 'Not yet implemented', MemberNames: [] }];
        };
        ValidationsExceptionDotNet.convertExceptionType = function (exception, responseData) {
            if (responseData.ExceptionType === undefined) {
                return;
            }
            if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                exception.ExceptionType = 'DbEntityValidationException';
                return;
            }
            else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                exception.ExceptionType = 'DbUpdateConcurrencyException';
                return;
            }
            // ClassName should by ExceptionType
            if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
                console.log('[angularportalazure.Exception.setExceptionType2] Why is this in ClassName? Can this be changed?');
                exception.ExceptionType = 'ValidationsException';
                return;
            }
            exception.ExceptionType = responseData.ExceptionType;
        };
        return ValidationsExceptionDotNet;
    }(ExceptionDotNet));
    angularportalazure.ValidationsExceptionDotNet = ValidationsExceptionDotNet;
})(angularportalazure || (angularportalazure = {}));
"use strict";
/// <reference path="exceptiondotnet.ts" />
var angularportalazure;
(function (angularportalazure) {
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //#endregion
        //#region Static Methods
        Exception.getOneLineMessage = function (exception) {
            var message = 'FEHLER ';
            if (exception.Message !== undefined) {
                message = message + ': ' + exception.Message + ' ';
            }
            if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') === -1) {
                message = message + ': ' + exception.ExceptionMessage + ' ';
            }
            if (exception.ExceptionMessage !== undefined && exception.ExceptionMessage.toLowerCase().indexOf('see the inner exception for details') > 0) {
                if (exception.InnerException !== undefined) {
                    if (exception.InnerException.InnerException !== undefined) {
                        message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                    }
                    else {
                        message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                    }
                }
            }
            if (exception.Messages !== undefined) {
                exception.Messages.forEach(function (item) {
                    message = message + '- ' + item + ' ';
                });
            }
            if (message === 'FEHLER ') {
                message = message + ' : JavaScript-Fehler oder Probleme mit der Internetverbindung. Ggf. weitere Informationen im Log. ' + exception;
                console.log(exception);
            }
            return message;
        };
        // TODO:2017-01-09/hp: [any] will be [Response] in angular2
        Exception.prepareException = function (response) {
            console.log('angularportalazure.Exception.prepareException - Logging Exception: Find more information in the following console messages for [Responsee] and [Exception].');
            var exception = new angularportalazure.Exception();
            if (response.headers === undefined) {
                console.log('> Get information from [processDotNetException1.data].');
                exception = Exception.processDotNetException1(response);
            }
            else {
                console.log('> Get information from [processDotNetException2.json()].');
                exception = Exception.processDotNetException2(response);
            }
            exception.convertResponse(response);
            exception.Url = response.url;
            exception.Status = response.status;
            exception.StatusText = response.statusText;
            //// Find a better way to log information, maybe to the database or to Google Analytics.
            console.log(response);
            console.log(exception);
            return exception;
        };
        Exception.processDotNetException1 = function (response) {
            var exception = new angularportalazure.Exception();
            //#region Convert data to Messages
            exception.Messages = [];
            if (response.data.Data === undefined) {
                exception.Messages.push('No further information found in [response.data.Data].');
            }
            else {
                var i = 1;
                while (response.data.Data[i + ''] !== undefined) {
                    exception.Messages.push(response.data.Data[i + '']);
                    i++;
                }
            }
            //#endregion
            return exception;
        };
        // TODO:2017-01-09/hp: Implement this function for angular2
        Exception.processDotNetException2 = function (response) {
            var exception = new angularportalazure.Exception();
            if (response.json().data !== undefined) {
                console.log('[angularportalazure.Exception.processDotNetException2] not implemented. Implement it to get proper exception data.');
            }
            return exception;
        };
        return Exception;
    }(angularportalazure.ValidationsExceptionDotNet));
    angularportalazure.Exception = Exception;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var DataService = (function () {
        //#region Constructor
        function DataService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        //#endregion
        //#region Methods
        DataService.prototype.getData = function (url) {
            return this.$http({ method: 'GET', url: url })
                .then(function (response) { })
                .catch(function (response) { });
        };
        return DataService;
    }());
    angularportalazure.DataService = DataService;
})(angularportalazure || (angularportalazure = {}));
