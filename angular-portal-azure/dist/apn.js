/// <reference types="angular" />
var angularportalazure;
(function (angularportalazure) {
    /** Define Angular module and its dependencies */
    var angularModule = angular.module('angularportalazure', [
        // Angular modules
        'ngResource',
        'ngDialog',
        'angulartics',
        'angulartics.google.analytics'
    ]);
    angularModule.config([function () {
            //Debug.enable('[angularportalazure-debug]');
            //Debug.isWithObjects = false;
        }]);
    angularModule.run(function () {
        //Debug.write('[angularportalazure-debug] \'angularportalazure.run\' executing.', [this]);
    });
})(angularportalazure || (angularportalazure = {}));
//#region Make sure console.log is working in any case, even IE9
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
var angularportalazure;
(function (angularportalazure) {
    var UserAccount = (function () {
        //#region Constructor
        function UserAccount(username, firstName, lastName) {
            if (firstName === void 0) { firstName = ''; }
            if (lastName === void 0) { lastName = ''; }
            angularportalazure.Debug.write('[angularportalazure-debug] \'UserAccount\' constructor called.', [this, username, firstName, lastName]);
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
var angularportalazure;
(function (angularportalazure) {
    var UserControlBase = (function () {
        //#region Constructor
        function UserControlBase(portalService) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }
        return UserControlBase;
    }());
    angularportalazure.UserControlBase = UserControlBase;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference path="debug.ts" />
/// <reference path="useraccount.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="iaddbladeeventargs.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var angularportalazure;
(function (angularportalazure) {
    var Blade = (function (_super) {
        __extends(Blade, _super);
        //#region Constructor
        function Blade(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService) || this;
            //#endregion
            _this.title = '';
            _this.subTitle = '';
            _this.width = { 'width': '0' };
            _this.widthStackLayout = { 'width': '50px' };
            _this.isInnerHtml = true;
            _this.statusbar = '';
            _this.statusbarClass = '';
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
            /** Obsolete */
            _this.navGrid = {
                portalService: null,
                items: [],
                navigateTo: function (path) { }
            };
            angularportalazure.Debug.write('[angularportalazure-debug] \'Blade\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            var that = _this;
            _this.blade = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px';
            _this.navGrid.portalService = portalService;
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
            if (portalService instanceof angularportalazure.PortalService == false) {
                return _this;
            }
            /** OBSOLETE: end */
            // Register listener1
            _this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                if (that.blade.comparePaths(args.path, that.blade.path)) {
                    console.log('function call: that.activate() will probably not work since this/that is not pointing to the right object.');
                    that.activate();
                }
            });
            return _this;
            //#endregion
        }
        Object.defineProperty(Blade.prototype, "path", {
            //#region path
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'Blade.navigateTo\' called. You should not override this, use onNavigateTo instead.', [this, path]);
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'Blade.close\' called.', [this]);
            this.listener1(); // Unregister listener1
            if (this.portalService.bladeArea !== undefined) {
                this.portalService.bladeArea.clearPath(this.path);
            }
            else {
                throw new Error('[angularportalazure.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.bladeArea\' available.');
            }
        };
        //#region Show Exceptions
        Blade.prototype.showExceptionOnStatusbar = function (data) {
            var that = this;
            that.statusbar = data.Message;
            that.statusbar += ' - ';
            data.Messages.forEach(function (item) {
                that.statusbar += item + ' - ';
            });
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
        Blade.prototype.setObsoleteLayoutProperites = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandBrowse = this.isCommandBrowse;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandCopy = this.isCommandCopy;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandDocument = this.isCommandDocument;
            this.blade.isCommandDocument2 = this.isCommandDocument2;
            this.blade.isCommandDocument3 = this.isCommandDocument3;
            this.blade.isCommandDocument4 = this.isCommandDocument4;
            this.blade.isCommandDocument5 = this.isCommandDocument5;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandOrder = this.isCommandOrder;
            this.blade.isCommandRestart = this.isCommandRestart;
            this.blade.isCommandSave = this.isCommandSave;
            this.blade.isCommandSearch = this.isCommandSearch;
            this.blade.isCommandStart = this.isCommandStart;
            this.blade.isCommandStop = this.isCommandStop;
            this.blade.isCommandSwap = this.isCommandSwap;
        };
        /** Obsolete */
        Blade.prototype.bladeClose = function () {
            this.close();
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
var angularportalazure;
(function (angularportalazure) {
    var BladeArea = (function (_super) {
        __extends(BladeArea, _super);
        //#region Constructor
        function BladeArea(portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.blades = new Array();
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea\' constructor called.', [_this, portalService]);
            var that = _this;
            // Set dependencies
            _this.portalService = portalService;
            _this.portalService.bladeArea = _this;
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof angularportalazure.PortalService == false) {
                return _this;
            }
            /** OBSOLETE: end */
            // Register listener1
            _this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea\' BladeArea.AddBlade event processing.', [this, event, args]);
                that.addBlade(args.path, args.pathSender);
            });
            return _this;
            //#endregion
        }
        //#endregion
        //#region Methods
        BladeArea.prototype.raiseAddBladeEvent = function (args) {
            this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
        };
        BladeArea.prototype.setFirstBlade = function (path) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        };
        /** obsolete */
        BladeArea.prototype.addBlade = function (path, senderPath) {
            if (senderPath === void 0) { senderPath = ''; }
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
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
                var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
                if (portalcontent === null) {
                    throw new Error('[angularportalazure.BladeArea] HTML element with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
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
            var blade = new angularportalazure.Blade(that.portalService, path, '');
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearAll\' called.', [this]);
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearPath = function (path) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearPath\' called.', [this, path]);
            var that = this;
            // we do not distinguish between lower and upper case path name
            path = path.toLowerCase();
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.comparePaths(blade.path, path)) {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearPath\' set bladeUrls.length to: ' + index);
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                angularportalazure.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[angularportalazure.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLevel = function (level) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearLevel\' called.', [this, level]);
            if (this.blades.length < level) {
            }
            if (level == 0) {
                level = 1;
            }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLastLevel = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearLastLevel\' called.', [this]);
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearChild = function (path) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' called.', [this, path]);
            var that = this;
            path = path.toLowerCase();
            if (path === '') {
                angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' path is empty, nothing to clear.');
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' set bladeUrls.length to: ' + (index + 1));
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                angularportalazure.Debug.write('>>> bladeUrls:', [that.blades]);
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
        /** You need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
        BladeArea.prototype.close = function () {
            this.listener1(); // Unregister listener1
        };
        //#endregion
        //#region OBSOLETE
        BladeArea.prototype.addBladePath = function (path) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBladePath\' called.', [this, path]);
            // Fix issue with old code
            if (this.portalService.$window === undefined) {
                this.portalService.$window = this.portalService;
            }
            this.addBlade(path);
            //this.addBladeOld(path);
        };
        BladeArea.prototype.addBladeOld = function (path) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
            var that = this;
            if (path === undefined || path == '') {
                return;
            }
            var blade = new angularportalazure.Blade(that.portalService, path, '');
            that.blades.push(blade);
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
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
        };
        return BladeArea;
    }(angularportalazure.UserControlBase));
    angularportalazure.BladeArea = BladeArea;
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('angularportalazure').service('angularportalazure.bladeArea', ['$window', BladeArea]);
    })();
    //#endregion
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="useraccount.ts" />
/// <reference path="usercontrolbase.ts" />
var angularportalazure;
(function (angularportalazure) {
    var AvatarMenu = (function (_super) {
        __extends(AvatarMenu, _super);
        //#region Constructor
        function AvatarMenu(portalService) {
            var _this = _super.call(this, portalService) || this;
            angularportalazure.Debug.write('[angularportalazure-debug] \'AvatarMenu\' constructor called.', [_this]);
            return _this;
        }
        return AvatarMenu;
    }(angularportalazure.UserControlBase));
    angularportalazure.AvatarMenu = AvatarMenu;
})(angularportalazure || (angularportalazure = {}));
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
var angularportalazure;
(function (angularportalazure) {
    var TileSize = (function () {
        //#region Constructor
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
            angularportalazure.Debug.write('[angularportalazure-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
        }
        //#endregion
        //#region Methods
        TileSize.getTileSizes = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'TileSize.getTileSizes\' called.', [this]);
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
var angularportalazure;
(function (angularportalazure) {
    var Tile = (function () {
        //#region Constructor
        function Tile(title, bladePath, portalService) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'Tiles.addTile\' called.', [this, tile]);
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
var angularportalazure;
(function (angularportalazure) {
    var Startboard = (function (_super) {
        __extends(Startboard, _super);
        //#endregion
        //#region Constructor
        function Startboard(portalService) {
            var _this = _super.call(this, portalService) || this;
            angularportalazure.Debug.write('[angularportalazure-debug] \'Startboard\' constructor called.', [_this]);
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
var angularportalazure;
(function (angularportalazure) {
    var Panorama = (function (_super) {
        __extends(Panorama, _super);
        //#endregion
        //#region Constructor
        function Panorama(title, portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.isVisible = true;
            angularportalazure.Debug.write('[angularportalazure-debug] \'Panorama\' constructor called.', [_this, title]);
            _this.title = title;
            _this.portalService.panorama = _this;
            _this.avatarMenu = new angularportalazure.AvatarMenu(_this.portalService);
            _this.startboard = new angularportalazure.Startboard(_this.portalService);
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
var angularportalazure;
(function (angularportalazure) {
    var PortalShell = (function (_super) {
        __extends(PortalShell, _super);
        //#endregion
        //#endregion
        //#region Constructor
        function PortalShell(title, portalService) {
            var _this = _super.call(this, portalService) || this;
            angularportalazure.Debug.write('[angularportalazure-debug] \'PortalShell\' constructor called.', [_this, title, portalService]);
            _this.portalService = portalService;
            _this.portalService.portalShell = _this;
            _this.portalService.panorama = new angularportalazure.Panorama(title, _this.portalService);
            _this.portalService.bladeArea = new angularportalazure.BladeArea(portalService);
            _this.initialize();
            return _this;
        }
        //#endregion
        //#region Methods
        PortalShell.prototype.initialize = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'PortalShell.initialize\' called.', [this]);
            this.setObsoleteLayoutProperites();
        };
        PortalShell.prototype.setObsoleteLayoutProperites = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            this.blades = this.portalService.bladeArea.blades;
            //var bladeServiceOLD = <angularportalazure.Blade>this.portalService.$injector.get('bladeService');
            //bladeServiceOLD.blades = this.portalService.bladeArea.blades;
            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
                };
            }
            if (this.portalService.bladeArea != null) {
                this.portalService.bladeArea.blades.forEach(function (blade) {
                    blade.setObsoleteLayoutProperites();
                });
            }
        };
        return PortalShell;
    }(angularportalazure.UserControlBase));
    angularportalazure.PortalShell = PortalShell;
})(angularportalazure || (angularportalazure = {}));
/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />
var angularportalazure;
(function (angularportalazure) {
    var PortalService = (function () {
        function PortalService($injector) {
            //#endregion
            //#region Properties
            this.parameter = { action: 'none', itemId: 0 };
            angularportalazure.Debug.write('[angularportalazure-debug] \'PortalService\' constructor called.', [this, $injector]);
            this.$injector = $injector;
            //this.$scope = $scope;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            this.$rootScope = $injector.get('$rootScope');
            this.$window = $injector.get('$window');
            this.$analytics = $injector.get('$analytics');
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
                    this.vm.close = function () {
                        angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
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
                    this.vm.close = function () {
                        angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
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
var angularportalazure;
(function (angularportalazure) {
    angularPortalBlade.$inject = ['angularportalazure.portalService'];
    function angularPortalBlade(portalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                controller.vm.close = function () {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [controller, portalService]);
                    portalService.bladeArea.clearLastLevel();
                };
            },
            controller: function () {
                this.$onInit = function () {
                    //this.vm.close = function () {
                    //    angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                    //    portalService.bladeArea.clearLastLevel();
                    //};
                };
            },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('angularPortalBlade', angularPortalBlade);
})(angularportalazure || (angularportalazure = {}));
// http://blogs.msdn.com/b/laurieatkinson/archive/2014/08/23/implementing-a-save-warning-in-an-angular-spa.aspx
//'use strict';
//module App.Directives {
//    // USE:
//    // <form name="personForm" azureportal-dirty-flag>
//    interface IDirtyFlag extends ng.IDirective {
//    }
//    interface IDirtyFlagScope extends ng.IScope {
//        personForm: ng.IFormController;
//        vm: any;
//    }
//    class DirtyFlag implements IDirtyFlag {
//        static directiveId: string = 'azureportalDirtyFlag'
//        restrict: string = 'A';
//        personManager: App.Services.IpersonManager;
//        constructor(personManager) {
//            this.personManager = personManager;
//        }
//        link = (scope: IDirtyFlagScope, element, attrs) => {
//            var self = this;
//            // When the directive is first invoked, check if the stored dirty value is true and 
//            // if so set the $dirty flag on the form.
//            if (scope.vm.person && scope.vm.person.isDirty) {
//                scope.personForm.$dirty = true;
//            }
//            // When the user navigates away from this view, check the value of the $dirty flag on this form. 
//            // If it is dirty(indicating unsaved changes), then store the id of the current person as dirty 
//            // using a service named personManger.
//            scope.$on('$locationChangeStart'), function () {
//                if (scope.personForm.$dirty) {
//                    self.personManager.markpersonAsDirty(scope.vm.person.personId);
//                }
//            });
//        }
//    }
//    app.directive(DirtyFlag.directiveId, ['personmanager', (pm) => new DirtyFlag(pm)]);
//} 
var angularportalazure;
(function (angularportalazure) {
    function grid($window) {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
            link: function (scope, element, attrs, controller) {
                //angular.forEach(controller.vm.items, function (item) {
                //    // Set some default values, depending on existing values
                //    if (item.isVisible == undefined) { item.isVisible = true; }
                //    if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
                //    if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
                //});
            },
            controller: function () { },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('grid', ['$window', grid]);
})(angularportalazure || (angularportalazure = {}));
var angularportalazure;
(function (angularportalazure) {
    function angularPortalHome() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
            link: function (scope, element, attrs, controller) { },
            controller: function () { },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('angularPortalHome', angularPortalHome);
})(angularportalazure || (angularportalazure = {}));
var angularportalazure;
(function (angularportalazure) {
    function nav($window) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
            link: function (scope, element, attrs, controller) {
                angular.forEach(controller.vm.items, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) {
                        item.isVisible = true;
                    }
                    if (item.title == undefined || item.title == '') {
                        item.style = { cursor: 'default' };
                    }
                    if (item.bladePath == undefined || item.bladePath == '') {
                        item.style = { cursor: 'default' };
                    }
                });
            },
            controller: function () { },
            controllerAs: '$ctrl'
        };
    }
    angular.module('angularportalazure').directive('nav', ['$window', nav]);
})(angularportalazure || (angularportalazure = {}));
//namespace angularportalazure {
//    /** If a Web API throws an exception, the following interface should be used to communicate the execption. */
//    export interface IException {
//        ExceptionType: string;  // provided by the server
//        ClassName: string;      // provided by the server - .NET exception class name
//        Data: Object;           // provided by the server - object having trouble
//        Type: string;           // provided by the server
//        Messages?: string[];    // provided by the server
//        Message: string;        // provided by Web API or filled by the client if empty - .NET exception messages or user defined
//        MessageDetail: string;  // Filled by the client - .NET exception detail message
//        Status: number;         // Filled by the client - http error code
//        StatusText: string;     // Filled by the client - http message
//        Url: string;            // Filled by the client - http URL
//    }
//}
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="iexception.ts" />
/// <reference path="portalservice.ts" />
var angularportalazure;
(function (angularportalazure) {
    var BladeData = (function (_super) {
        __extends(BladeData, _super);
        //#region Constructor
        function BladeData(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 300; }
            return _super.call(this, portalService, path, title, subtitle, width) || this;
        }
        return BladeData;
    }(angularportalazure.Blade));
    angularportalazure.BladeData = BladeData;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
var angularportalazure;
(function (angularportalazure) {
    var BladeDetail = (function (_super) {
        __extends(BladeDetail, _super);
        //#endregion
        //#region Constructor
        function BladeDetail(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.item = null;
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeDetail\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            _this.isCommandNew = true;
            _this.commandNewText = 'neu';
            _this.isCommandSave = true;
            _this.commandSaveText = 'speichern';
            _this.isCommandDelete = true;
            _this.commandDeleteText = 'löschen';
            _this.isCommandCancel = true;
            _this.commandCancelText = 'abbrechen';
            return _this;
        }
        //#endregion
        //#region Methods
        //activate() {
        //    angularportalazure.Debug.write('[angularportalazure-debug] \'BladeDetail.activate\' called.', [this]);
        //    var that = this;
        //    that.statusbar = 'Daten laden...';
        //    that.statusbarClass = '';
        //    var onActivate = that.onActivate();
        //    if (onActivate === null || onActivate === undefined) {
        //        that.statusbar = '';
        //        that.statusbarClass = '';
        //    } else {
        //        onActivate.success(function (data: any) {
        //            that.item = data;
        //            that.statusbar = '';
        //            that.statusbarClass = '';
        //            that.onActivated();
        //        }).error(function (data: any, status: any, headers: any, config: any) {
        //            that.item = null;
        //            that.statusbar = 'FEHLER: ' + data;
        //            that.statusbarClass = 'message-info message-off';
        //            that.onActivated();
        //        });
        //    }
        //}
        //onActivate(): any { // any should be: angular.IHttpPromise<any>
        //    throw new Error('[angularportalazure.BladeDetail] \'onActivate\' is an abstract function. Define one in the derived class.');
        //}
        //onActivated(): void {
        //    angularportalazure.Debug.write('[angularportalazure-debug] \'onActivated\' called. You could override this.');
        //}
        BladeDetail.prototype.loadItems = function (func) {
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            func().then(function (data) {
                that.item = data;
                that.statusbar = '';
                that.statusbarClass = '';
                that.onActivated();
            }).catch(function (exception) {
                that.statusbar = 'FEHLER: ' + exception.Message;
                that.statusbarClass = 'message-error message-off';
            });
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
var angularportalazure;
(function (angularportalazure) {
    var BladeGrid = (function (_super) {
        __extends(BladeGrid, _super);
        //#endregion
        //#region Constructor
        function BladeGrid(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
            //#region Properties
            _this.items = [];
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeGrid\' constructor called.', [_this, portalService, path, title, subtitle, width]);
            _this.isCommandNew = true;
            _this.commandNewText = 'neu';
            return _this;
        }
        //#endregion
        //#region Methods
        //activate(): void {
        //    let that = this;
        //    //this.loadItems(() => this.getItemsFunction);
        //    //angularportalazure.Debug.write('[angularportalazure-debug] \'BladeGrid.activate\' called.', [this]);
        //    //console.log('BladeGrid.activate()');
        //    //var that = this;
        //    //that.statusbar = 'Daten laden...';
        //    //that.statusbarClass = '';
        //    this.onActivate();
        //    ////var onActivate = that.onActivate();
        //    ////if (that.onActivate === null || that.onActivate === undefined) {
        //    ////} else {
        //    //    //that.loadItems(onActivate);
        //    //    console.log('call onActivate()');
        //    //    that.onActivate()
        //    //        .then(function (data: any) {
        //    //            console.log('OK');
        //    //            that.items = data;
        //    //            that.statusbar = '';
        //    //            that.statusbarClass = '';
        //    //        }).catch(function (exception: angularportalazure.Exception) {
        //    //            console.log('exception');
        //    //            console.log(exception);
        //    //            that.statusbar = 'FEHLER: ' + exception.Message;
        //    //            that.statusbarClass = 'message-info message-off';
        //    //        });
        //    ////}
        //}
        //onActivate(): angular.IHttpPromise<any> { // any should be: angular.IHttpPromise<any>
        //    throw new Error('[angularportalazure.BladeGrid] \'onActivate\' is an abstract function. Define one in the derived class.');
        //}
        BladeGrid.prototype.loadItems = function (func) {
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            func().then(function (data) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
                that.onActivated();
            }).catch(function (exception) {
                that.statusbar = 'FEHLER: ' + exception.Message;
                that.statusbarClass = 'message-error message-off';
            });
        };
        //#region Filter
        BladeGrid.prototype.onFilter = function (actual, expected) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeGrid.filter\' called.', [this, actual, expected]);
            //#region Documentation
            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
            //#endregion
            //#region Helper functions
            // Implemenation detail:
            // > We must implement the functions in code, since onFilter is not called within the scope of this class (this. not working).
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
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        BladeGrid.prototype.setObsoleteLayoutProperites = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeGrid.setObsoleteLayoutProperites\' called.', [this]);
            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> needed, otherwise nav html pages will no longer work.
            }
            this.blade.isNavGrid = this.isNavGrid;
            _super.prototype.setObsoleteLayoutProperites.call(this);
        };
        return BladeGrid;
    }(angularportalazure.BladeData));
    angularportalazure.BladeGrid = BladeGrid;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
/// <reference path="bladenav.ts" />
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
        }
        //#endregion
        //#region
        BladeNavItem.prototype.onNavItemClick = function () {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
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
var angularportalazure;
(function (angularportalazure) {
    var BladeNav = (function (_super) {
        __extends(BladeNav, _super);
        //#region Constructor
        function BladeNav(portalService, path, title, subtitle, width) {
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 315; }
            var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
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
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        };
        return BladeNav;
    }(angularportalazure.BladeData));
    angularportalazure.BladeNav = BladeNav;
})(angularportalazure || (angularportalazure = {}));
/// <reference path="debug.ts" />
/// <reference path="iexception.ts" />
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
/// <reference path="iexception.ts" />
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
