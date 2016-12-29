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
            //$translateProvider.useUrlLoader('/api/translation/get');
            $translateProvider.fallbackLanguage('de');
            $translateProvider.use(readCookie('SAMPLE_TRANSLATE_LANG_KEY'));
        }]);
    angularModule.config([function () {
            //Debug.enable('[angularportalazure-debug]');
            //Debug.isWithObjects = false;
        }]);
    angularModule.run(function () {
        //Debug.write('[angularportalazure-debug] \'angularportalazure.run\' executing.', [this]);
    });
    /** Read cookie */
    function readCookie(cookieName) {
        var cookieNameEQ = cookieName + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            ;
            if (cookie.indexOf(cookieNameEQ) == 0) {
                return cookie.substring(cookieNameEQ.length, cookie.length);
            }
            ;
        }
        return null;
    }
})(angularportalazure || (angularportalazure = {}));
//#region Make sure console.log is working in any case, even IE9
"use strict";
//if ($('html').hasClass('k-ie9')) {
//    if (typeof console !== 'object') window.console = <any>{};
//    if (typeof console.log !== 'object') window.console.log = function () { };
//}
//#endregion
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
            if (Debug.keys.indexOf(key) != -1) {
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
/// <reference path="debug.ts" />
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
                //this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return UserAccount;
    }());
    angularportalazure.UserAccount = UserAccount;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
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
        return UserControlBase;
    }());
    angularportalazure.UserControlBase = UserControlBase;
})(angularportalazure || (angularportalazure = {}));
"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="debug.ts" />
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
            _this.title = '';
            _this.subTitle = '';
            _this.width = { 'width': '0' };
            _this.widthStackLayout = { 'width': '50px' };
            _this.isInnerHtml = true;
            _this.statusBar = '';
            _this.statusBarClass = '';
            //#endregion
            //#region Commands
            _this.isCommandBrowse = false;
            _this.commandBrowse = function () { this.onCommandBrowse(); };
            _this.commandBrowseText = '';
            _this.isCommandCancel = false;
            _this.commandCancel = function () { this.onCommandCancel(); };
            _this.commandCancelText = '';
            _this.isCommandCopy = false;
            _this.commandCopy = function () { this.onCommandCopy(); };
            _this.commandCopyText = '';
            _this.isCommandDelete = false;
            _this.commandDelete = function () { this.onCommandDelete(); };
            _this.commandDeleteText = '';
            _this.isCommandDocument = false;
            _this.commandDocument = function () { this.onCommandDocument(); };
            _this.commandDocumentText = '';
            _this.isCommandDocument2 = false;
            _this.commandDocument2 = function () { this.onCommandDocument2(); };
            _this.commandDocument2Text = '';
            _this.isCommandDocument3 = false;
            _this.commandDocument3 = function () { this.onCommandDocument3(); };
            _this.commandDocument3Text = '';
            _this.isCommandDocument4 = false;
            _this.commandDocument4 = function () { this.onCommandDocument4(); };
            _this.commandDocument4Text = '';
            _this.isCommandDocument5 = false;
            _this.commandDocument5 = function () { this.onCommandDocument5(); };
            _this.commandDocument5Text = '';
            _this.isCommandNew = false;
            _this.commandNew = function () { this.onCommandNew(); };
            _this.commandNewText = '';
            _this.isCommandOrder = false;
            _this.commandOrder = function () { this.onCommandOrder(); };
            _this.commandOrderText = '';
            _this.isCommandRestart = false;
            _this.commandRestart = function () { this.onCommandRestart(); };
            _this.commandRestartText = '';
            _this.isCommandSave = false;
            _this.commandSave = function () { this.onCommandSave(); };
            _this.commandSaveText = '';
            _this.isCommandSearch = false;
            _this.commandSearch = function () { this.onCommandSearch(); };
            _this.commandSearchText = '';
            _this.isCommandStart = false;
            _this.commandStart = function () { this.onCommandStart(); };
            _this.commandStartText = '';
            _this.isCommandStop = false;
            _this.commandStop = function () { this.onCommandStop(); };
            _this.commandStopText = '';
            _this.isCommandSwap = false;
            _this.commandSwap = function () { this.onCommandSwap(); };
            _this.commandSwapText = '';
            var that = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px';
            //this.navGrid.portalService = portalService;
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
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            //if (portalService instanceof angularportalazure.PortalService == false) {
            //    console.log('Blade.constructor: This code cannot be removed yet.')
            //    return;
            //}
            /** OBSOLETE: end */
            //// Register listener1
            //this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args: angularportalazure.IAddBladeEventArgs) {
            //    if (that.comparePaths(args.path, that.path)) {
            //        console.log('listener1-BladeArea.AddBlade - function call: that.activate() will probably not work since this/that is not pointing to the right object. - deactivated');
            //        //that.activate();
            //    }
            //});
            //#endregion
            // Set 'this.portalService.bladeArea.blades[index]' to 'this'
            // 'this.portalService.bladeArea.blades[index]' was generated during AddBlade
            _this.portalService.bladeArea.blades.forEach(function (blade, index) {
                if (blade.path === _this.path) {
                    _this.portalService.bladeArea.blades[index] = _this;
                }
            });
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
        //#region OBSOLETE
        /** Obsolete */
        //blade: Blade;
        /** Obsolete */
        //isNavGrid: boolean;
        /** Obsolete */
        //navGrid = {
        //    portalService: <angularportalazure.PortalService | null>null,
        //    items: [],
        //    navigateTo: function (path: string) { }
        //};
        //#endregion
        //#endregion
        //#region Methods
        //#region Methods
        Blade.prototype.activate = function () {
            this.onActivate();
            this.onActivated();
        };
        Blade.prototype.onActivate = function () {
            //throw new Error('[angularportalazure.Blade] \'onActivate\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onActivated = function () {
        };
        Blade.prototype.navigateTo = function (path) {
            this.onNavigateTo(path);
        };
        Blade.prototype.onNavigateTo = function (path) {
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
            //this.listener1(); // Unregister listener1
            if (this.portalService.bladeArea !== undefined) {
                this.portalService.bladeArea.clearPath(this.path);
            }
            else {
                throw new Error('[angularportalazure.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.bladeArea\' available.');
            }
        };
        //#region Set StatusBar
        Blade.prototype.clearStatusBar = function () {
            this.statusBar = '';
            this.statusBarClass = '';
        };
        Blade.prototype.setStatusBarLoadData = function () {
            this.statusBar = 'Daten laden...';
            this.statusBarClass = '';
        };
        Blade.prototype.setStatusBarSaveData = function () {
            this.statusBar = 'Daten speichern...';
            this.statusBarClass = '';
        };
        Blade.prototype.setStatusBarException = function (exception) {
            var that = this;
            if (exception.Message === undefined) {
                that.statusBar = 'FEHLER: ' + exception;
            }
            else {
                that.statusBar = 'FEHLER: ' + exception.Message;
            }
            if (exception.Messages != undefined) {
                exception.Messages.forEach(function (item) {
                    that.statusBar += ' - ' + item;
                });
            }
            that.statusBarClass = 'message-error message-off';
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
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        //bladeClose() {
        //    this.close();
        //}
        //#endregion
        //#endregion
        //setTitle(watchExpression: string, func: () => void) {
        //    if (this.watcherTitle === undefined) {
        //        this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
        //        this.$scope.$on('$destroy', () => { this.watcherTitle(); });
        //    }
        //}
        Blade.prototype.setBladeHeights = function () {
            var that = this;
            that.bladeContentHeight = $('.fxs-blade-content').height();
            that.bladeContentInnerHeight = that.bladeContentHeight - 20;
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            var id;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(function () {
                    that.bladeContentHeight = $('.fxs-blade-content').height();
                    that.bladeContentInnerHeight = that.bladeContentHeight - 20;
                }, 500);
            });
        };
        return Blade;
    }(angularportalazure.UserControlBase));
    angularportalazure.Blade = Blade;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="debug.ts" />
/// <reference path="blade.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="iaddbladeeventargs.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeArea = (function (_super) {
        __extends(BladeArea, _super);
        function BladeArea($scope, portalService) {
            var _this = _super.call(this, $scope, portalService) || this;
            _this.blades = new Array();
            var that = _this;
            _this.areaBlades = $('#apa-blade-area');
            _this.portalScroll = $('#apa-portal-scroll');
            // Set dependencies
            _this.portalService = portalService;
            //this.portalService.bladeArea = this;
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof angularportalazure.PortalService == false) {
                console.log('BladeArea.constructor: This code cannot be removed yet.');
                return _this;
            }
            /** OBSOLETE: end */
            // Register listener1
            _this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                that.addBlade(args.path, args.pathSender);
            });
            //#endregion
            _this.setupResizerListener();
            return _this;
        }
        //#endregion
        //#region Methods
        BladeArea.prototype.raiseAddBladeEvent = function (args) {
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
                this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
            }
        };
        BladeArea.prototype.setFirstBlade = function (path) {
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        };
        BladeArea.prototype.addBlade = function (path, senderPath) {
            if (senderPath === void 0) { senderPath = ''; }
            if (path == null) {
                return;
            }
            if (senderPath == null) {
                return;
            }
            var that = this;
            this.portalService.$analytics.pageTrack(path);
            path = path.toLowerCase();
            senderPath = senderPath.toLowerCase();
            //#region Verify
            if (path === undefined || path === '') {
                return;
            }
            if (that.portalService.$window !== undefined) {
                if (that.portalService.$window.document === undefined) {
                    throw new Error('[angularportalazure.BladeArea] \'this.$window.document\' undefined.');
                }
                var portalcontent = that.portalService.$window.document.getElementById('apa-portal-scroll');
                if (portalcontent === null) {
                    throw new Error('[angularportalazure.BladeArea] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
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
                    throw new Error('[angularportalazure.BladeArea] path: \'' + path + '\' will not be added. It is already added.');
                }
                ;
            });
            //#endregion
            //#region Show the blade
            var blade = new angularportalazure.Blade(that.$scope, that.portalService, path, '');
            that.blades.push(blade);
            //#endregion
            //#region Position the blade
            if (that.portalService.$window !== undefined) {
                that.portalService.$window.setTimeout(function () {
                    var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                    var i = that.blades.length - 1;
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
        BladeArea.prototype.clearAll = function () {
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearPath = function (path) {
            var that = this;
            // we do not distinguish between lower and upper case path name
            path = path.toLowerCase();
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.comparePaths(blade.path, path)) {
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                throw new Error('[angularportalazure.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLevel = function (level) {
            if (this.blades.length < level) {
            }
            if (level == 0) {
                level = 1;
            }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLastLevel = function () {
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearChild = function (path) {
            var that = this;
            path = path.toLowerCase();
            if (path === '') {
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                throw new Error('[angularportalazure.BladeArea.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        };
        BladeArea.prototype.showPanoramaIfNoBlades = function () {
            if (this.blades.length === 0) {
                if (this.portalService.panorama !== undefined) {
                    {
                        this.portalService.panorama.isVisible = true;
                    }
                }
            }
        };
        BladeArea.prototype.hidePanorama = function () {
            if (this.portalService.panorama !== undefined) {
                this.portalService.panorama.isVisible = false;
            }
        };
        /** We need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
        BladeArea.prototype.close = function () {
            this.listener1(); // Unregister listener1
        };
        //#endregion
        //#region OBSOLETE
        //addBladePath(path: string) {
        //    // Fix issue with old code
        //    if (this.portalService.$window === undefined) {
        //        this.portalService.$window = <any>this.portalService;
        //    }
        //    this.addBlade(path);
        //    //this.addBladeOld(path);
        //}
        //addBladeOld(path: string) {
        //    var that = this;
        //    if (path === undefined || path == '') { return; }
        //    var blade = new angularportalazure.Blade(that.$scope, that.portalService, path, '');
        //    that.blades.push(blade);
        //    var portalcontent = that.portalService.$window.document.getElementById('apa-portal-scroll');
        //    that.portalService.$window.setTimeout(function () {
        //        var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
        //        var i = that.blades.length - 1;
        //        // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
        //        //       So now if it is, the user has to scroll on its own.
        //        if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
        //            var sl = (<any>azureportalblades[i]).offsetLeft - 30;
        //            portalcontent.scrollLeft = sl;
        //        }
        //    }, 250);
        //}
        //#endregion
        BladeArea.prototype.setupResizerListener = function () {
            var that = this;
            that.portalScroll.css('margin-right', that.portalService.areaNotification.widthAreaUsed + 'px');
            console.log(that.portalScroll.css('margin-right'));
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            var id;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(function () {
                    that.portalScroll.css('margin-right', that.portalService.areaNotification.widthAreaUsed + 'px');
                    console.log(that.portalScroll.css('margin-right'));
                }, 50);
            });
        };
        return BladeArea;
    }(angularportalazure.UserControlBase));
    //#region Constructor
    BladeArea.$inject = ['$scope', 'angularportalazure.portalService'];
    angularportalazure.BladeArea = BladeArea;
    angular.module('angularportalazure').service('angularportalazure.bladeArea', BladeArea);
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
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
        return BladeData;
    }(angularportalazure.Blade));
    angularportalazure.BladeData = BladeData;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
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
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.path });
        };
        return BladeNav;
    }(angularportalazure.BladeData));
    angularportalazure.BladeNav = BladeNav;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
/// <reference path="bladenav.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeNavItem = (function () {
        //#region Constructor
        function BladeNavItem(title, cssClass, bladePath, hrefPath, roles, isVisible, callback, bladeNav) {
            if (title === void 0) { title = ''; }
            if (cssClass === void 0) { cssClass = ""; }
            if (bladePath === void 0) { bladePath = ''; }
            if (hrefPath === void 0) { hrefPath = ""; }
            if (roles === void 0) { roles = ""; }
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
        //#region
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
/// <reference path="debug.ts" />
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
            _this.widthAreaUsed = 0;
            _this.width = 250;
            _this.backgroundColor = '#32383f';
            _this.areaNotification = $('#apa-notification-area');
            _this.hide();
            _this.setupResizerListener();
            return _this;
        }
        //#endregion
        //#region Methods
        AreaNotification.prototype.hide = function () {
            this.widthAreaUsed = 0;
            this.areaNotification.css('display', 'none');
        };
        AreaNotification.prototype.show = function () {
            this.areaNotification.css('position', 'absolute');
            this.areaNotification.css('top:0', '0');
            this.areaNotification.css('height', '100%');
            this.areaNotification.css('background-color', this.backgroundColor);
            this.areaNotification.css('border-left', '2px solid gray');
            this.areaNotification.css('width', this.width + 'px');
            this.areaNotification.css('left', $(window).width() - this.width + 'px');
            this.widthAreaUsed = this.width;
            this.areaNotification.css('display', 'inline-block');
        };
        AreaNotification.prototype.setupResizerListener = function () {
            var that = this;
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            var id;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(function () {
                    that.show();
                }, 50);
            });
        };
        return AreaNotification;
    }(angularportalazure.UserControlBase));
    angularportalazure.AreaNotification = AreaNotification;
})(angularportalazure || (angularportalazure = {}));
"use strict";
/// <reference path="debug.ts" />
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
/// <reference path="debug.ts" />
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
/// <reference path="debug.ts" />
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
            this.portalService.bladeArea.setFirstBlade(this.bladePath);
        };
        return Tile;
    }());
    angularportalazure.Tile = Tile;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
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
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = angularportalazure.TileSizes[tile.tileSize]; // Get CSS Name
            tile.top = this.nextTop + 'px';
            tile.left = this.nextLeft + 'px';
            this.nextLeft += tileSize.width;
            if (tileSize.height > this.columnHeightMax) {
                this.columnHeightMax = tileSize.height;
            }
            if (this.nextLeft > 360) {
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
/// <reference path="debug.ts" />
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
/// <reference path="debug.ts" />
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
/// <reference path="bladearea.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="debug.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var PortalShell = (function (_super) {
        __extends(PortalShell, _super);
        //#region Constructor
        function PortalShell(portalService, title) {
            var _this = _super.call(this, null, portalService) || this;
            _this.portalService = portalService;
            _this.portalService.portalShell = _this;
            _this.portalService.panorama = new angularportalazure.Panorama(_this.$scope, title, _this.portalService);
            //this.portalService.bladeArea = new angularportalazure.BladeArea(this.$scope, portalService);
            _this.portalService.panorama.title = title;
            return _this;
            //this.initialize();
        }
        return PortalShell;
    }(angularportalazure.UserControlBase));
    angularportalazure.PortalShell = PortalShell;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference path="areanotification.ts" />
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />
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
            this.$translate = $injector.get('$translate');
            this.ngDialog = $injector.get('ngDialog');
            this.ngDialog.openConfirm;
        }
        return PortalService;
    }());
    //#region Constructor
    PortalService.$inject = ['$injector'];
    angularportalazure.PortalService = PortalService;
    angular.module('angularportalazure').service('angularportalazure.portalService', PortalService);
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    angularPortalBladeGrid.$inject = ['angularportalazure.portalService'];
    function angularPortalBladeGrid(portalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) { },
            controller: function () {
                this.$onInit = function () {
                    this.close = function () {
                        //portalService.bladeArea.clearLastLevel();
                    };
                };
            },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('angularPortalBladeGrid', angularPortalBladeGrid);
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    angularPortalBladeNav.$inject = ['angularportalazure.portalService'];
    function angularPortalBladeNav(portalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) { },
            controller: function () {
                this.$onInit = function () {
                    this.close = function () {
                        //portalService.bladeArea.clearLastLevel();
                    };
                };
            },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('angularPortalBladeNav', angularPortalBladeNav);
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    //angularPortalBlade.$inject = ['angularportalazure.portalService'];
    //function angularPortalBlade(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
    //        link: function (scope, element, attrs, controller) {
    //            //controller.close = function () {
    //            //    portalService.bladeArea.clearLastLevel();
    //            //};
    //        },
    //        controller: function () {
    //            this.$onInit = function () {
    //                this.close = function () {
    //                    portalService.bladeArea.clearLastLevel();
    //                };
    //            };
    //        },
    //        controllerAs: '$ctrl'
    //    };
    //}
    //angular.module('angularportalazure').directive('angularPortalBlade', angularPortalBlade);
    AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
    function AngularPortalBladeController(portalService) {
        this.$onInit = function () {
            portalService.areaNotification.show();
            this.close = function () {
                //portalService.bladeArea.clearLastLevel();
                portalService.areaNotification.hide();
            };
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
    //grid.$inject = ['angularportalazure.portalService'];
    //function grid(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
    //        link: function (scope, element, attrs, controller) { },
    //        controller: function () {
    //            //this.$onInit = function () {
    //            //    this.close = function () {
    //            //        portalService.bladeArea.clearLastLevel();
    //            //    };
    //            //};
    //        },
    //        controllerAs: '$ctrl'
    //    };
    //}
    //angular.module('angularportalazure').directive('grid', grid);
    var grid = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('grid', grid);
})(angularportalazure || (angularportalazure = {}));
"use strict";
var angularportalazure;
(function (angularportalazure) {
    //function angularPortalHome() {
    //    return {
    //        restrict: 'E',
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
    //        link: function (scope, element, attrs, controller) { },
    //        controller: function () { },
    //        controllerAs: '$ctrl'
    //    };
    //}
    //angular.module('angularportalazure').directive('angularPortalHome', angularPortalHome);
    AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
    function AngularPortalHomeController($scope, portalService) {
        this.$onInit = function () {
            console.log('initializse');
            portalService.areaNotification = new angularportalazure.AreaNotification($scope, portalService);
            portalService.bladeArea = new angularportalazure.BladeArea($scope, portalService);
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
    //nav.$inject = ['angularportalazure.portalService'];
    //function nav(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
    //        link: function (scope, element, attrs, controller) {
    //            angular.forEach(controller.items, function (item) {
    //                // Set some default values, depending on existing values
    //                if (item.isVisible == undefined) { item.isVisible = true; }
    //                if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
    //                if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
    //            });
    //        },
    //        controller: function () {
    //            //this.$onInit = function () {
    //            //    this.close = function () {
    //            //        portalService.bladeArea.clearLastLevel();
    //            //    };
    //            //};
    //        },
    //        controllerAs: '$ctrl'
    //    };
    //}
    //angular.module('angularportalazure').directive('nav', nav);
    var nav = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };
    angular.module('angularportalazure').component('nav', nav);
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var BladeDetail = (function (_super) {
        __extends(BladeDetail, _super);
        //#endregion
        //#region Constructor
        function BladeDetail($scope, portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.item = null;
            //this.isCommandNew = true;
            _this.commandNewText = 'neu';
            //this.isCommandSave = true;
            _this.commandSaveText = 'speichern';
            //this.isCommandDelete = true;
            _this.commandDeleteText = 'löschen';
            //this.isCommandCancel = true;
            _this.commandCancelText = 'abbrechen';
            return _this;
        }
        //#endregion
        //#region Methods
        BladeDetail.prototype.loadItem = function (func) {
            var that = this;
            that.onLoadItem();
            func().then(function (data) {
                that.item = data;
                that.clearStatusBar();
                that.onLoadedItem();
            }).catch(function (exception) {
                that.setStatusBarException(exception);
            });
        };
        BladeDetail.prototype.onLoadItem = function () {
            this.setStatusBarLoadData();
        };
        BladeDetail.prototype.onLoadedItem = function () {
        };
        BladeDetail.prototype.saveItem = function (func) {
            var that = this;
            that.onSaveItem();
            // Is form valid
            if (!that.formblade.$valid) {
                that.statusBar = 'Speichern nicht möglich!';
                that.statusBarClass = 'message-error message-off';
                console.log(that.formblade);
                return;
            }
            func().then(function (data) {
                that.item = data;
                that.onSavedItem();
            }).catch(function (exception) {
                that.setStatusBarException(exception);
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
/// <reference path="debug.ts" />
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
            //this.isCommandNew = true;
            _this.commandNewText = 'neu';
            return _this;
        }
        //#endregion
        //#region Methods
        BladeGrid.prototype.loadItems = function (func) {
            var that = this;
            that.onLoadItems();
            func().then(function (data) {
                that.items = data;
                that.onLoadedItems();
            }).catch(function (exception) {
                that.setStatusBarException(exception);
            });
        };
        BladeGrid.prototype.onLoadItems = function () {
            this.setStatusBarLoadData();
        };
        BladeGrid.prototype.onLoadedItems = function () {
            this.clearStatusBar();
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
                        if (typeof actual == 'number') {
                            actualValue = convertToString(actual);
                        }
                        if (typeof actualValue == 'string') {
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
            if (typeof actual == 'object') {
                processObject(actual);
            }
            // Process property, typeof 'number'
            if (typeof actual == 'number') {
                actual = convertToString(actual);
            }
            // Process property, typeof 'string'
            if (typeof actual == 'string') {
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
/// <reference path="debug.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var Exception = (function () {
        function Exception() {
        }
        //#endregion
        Exception.prototype.processException = function (response) {
            var that = this;
            this.convertFromWebApiException(response.data);
            that.ExceptionType = response.data.ExceptionType;
            that.Type = response.data.Type;
            that.Message = response.data.Message;
            that.MessageDetail = response.data.MessageDetail;
            that.Messages = response.data.Messages;
            that.Url = response.config.url;
            that.Status = response.status;
            that.StatusText = response.statusText;
            // Find a better way to log information, maybe to the database or to Google Analytics.
            console.log('processException:');
            console.log(response);
            console.log(that);
        };
        Exception.prototype.convertFromWebApiException = function (ex) {
            //#region Process data to Messages
            ex.Messages = [];
            var i = 1;
            while (ex.Data[i + ''] !== undefined) {
                ex.Messages.push(ex.Data[i + '']);
                i++;
            }
            //#endregion
            //#region Process DbEntityValidationException
            if (ex.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                ex.Type = 'DbEntityValidationException';
            }
            //#endregion
            //#region Process DbUpdateConcurrencyException
            if (ex.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                ex.Type = 'DbUpdateConcurrencyException';
            }
            //#endregion
            //#region Process ValidationsException
            // ClassName should by ExceptionType
            if (ex.ClassName.indexOf('ValidationsException') > 0) {
                ex.Type = 'ValidationsException';
            }
            //#endregion
        };
        return Exception;
    }());
    angularportalazure.Exception = Exception;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
"use strict";
var angularportalazure;
(function (angularportalazure) {
    var IExceptionDotNet = (function () {
        function IExceptionDotNet() {
        }
        return IExceptionDotNet;
    }());
    angularportalazure.IExceptionDotNet = IExceptionDotNet;
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
            var that = this;
            return that.$http({ method: 'GET', url: url })
                .then(function (response) {
            })
                .catch(function (response) {
            });
        };
        return DataService;
    }());
    angularportalazure.DataService = DataService;
})(angularportalazure || (angularportalazure = {}));
