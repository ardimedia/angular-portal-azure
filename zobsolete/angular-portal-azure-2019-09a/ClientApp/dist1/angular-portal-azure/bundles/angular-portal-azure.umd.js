(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular-portal-azure', ['exports', '@angular/core', '@angular/router', 'rxjs/operators', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['angular-portal-azure'] = {}, global.ng.core, global.ng.router, global.rxjs.operators, global.ng.common, global.ng.forms));
}(this, function (exports, core, router, operators, common, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var TileSizes = {
        small: 0,
        mini: 1,
        normal: 2,
        herowide: 3,
    };
    TileSizes[TileSizes.small] = 'small';
    TileSizes[TileSizes.mini] = 'mini';
    TileSizes[TileSizes.normal] = 'normal';
    TileSizes[TileSizes.herowide] = 'herowide';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TileSize = /** @class */ (function () {
        // #region Properties
        // #endregion
        // #region Constructors
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
        }
        // #endregion
        // #region Static Methods
        // #endregion
        // #region Static Methods
        /**
         * @return {?}
         */
        TileSize.getTileSizes = 
        // #endregion
        // #region Static Methods
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tileSizes = Array();
            tileSizes.push(new TileSize(TileSizes.small, 90, 90));
            tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
            tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
            tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));
            return tileSizes;
        };
        return TileSize;
    }());
    if (false) {
        /** @type {?} */
        TileSize.prototype.tileSizes;
        /** @type {?} */
        TileSize.prototype.width;
        /** @type {?} */
        TileSize.prototype.height;
    }

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    Tiles = /** @class */ (function (_super) {
        __extends(Tiles, _super);
        // #endregion
        // #region Constructors
        function Tiles() {
            var tiles = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tiles[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(tiles)) || this;
            // #region Properties
            //tiles: Array<T> = new Array<T>();
            _this.isShowTiles = true;
            _this.isTilesLoaded = false;
            _this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
            // not yet evaluated in HTML, but this is the standard behavior
            _this.tileSizes = TileSize.getTileSizes();
            _this.nextLeft = 0;
            _this.nextTop = 0;
            _this.columnHeightMax = 0;
            return _this;
            //this.tiles = tiles;
        }
        /**
         * @template Apps
         * @return {?}
         */
        Tiles.create = /**
         * @template Apps
         * @return {?}
         */
        function () {
            /** @type {?} */
            var object = Object.create(Tiles.prototype);
            return object;
        };
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} tiles
         * @return {?}
         */
        Tiles.prototype.push = 
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} tiles
         * @return {?}
         */
        function () {
            var _this = this;
            var tiles = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tiles[_i] = arguments[_i];
            }
            tiles.forEach((/**
             * @param {?} tile
             * @return {?}
             */
            function (tile) {
                _this.processTile(tile);
            }));
            return _super.prototype.push.apply(this, __spread(tiles));
        };
        /**
         * @param {?} tile
         * @return {?}
         */
        Tiles.prototype.processTile = /**
         * @param {?} tile
         * @return {?}
         */
        function (tile) {
            return;
            //this.isTilesLoaded = true;
            /** @type {?} */
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes[tile.tileSize]; // Get CSS Name
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
            //this.tiles.push(tile);
            return tile;
        };
        return Tiles;
    }(Array));
    if (false) {
        /** @type {?} */
        Tiles.prototype.isShowTiles;
        /** @type {?} */
        Tiles.prototype.isTilesLoaded;
        /** @type {?} */
        Tiles.prototype.hideTileIfOnlyOne;
        /** @type {?} */
        Tiles.prototype.tileSizes;
        /** @type {?} */
        Tiles.prototype.nextLeft;
        /** @type {?} */
        Tiles.prototype.nextTop;
        /** @type {?} */
        Tiles.prototype.columnHeightMax;
    }

    var __extends$1 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __read$1 = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread$1 = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
        return ar;
    };
    var Appboard = /** @class */ (function (_super) {
        __extends$1(Appboard, _super);
        // #endregion
        // #region Constructors
        function Appboard() {
            var appboardEntries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                appboardEntries[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread$1(appboardEntries)) || this;
            // #region Properties
            _this.isVisible = true;
            _this.tileSizes = TileSize.getTileSizes();
            _this.nextLeft = 0;
            _this.nextTop = 0;
            _this.columnHeightMax = 0;
            return _this;
        }
        /**
         * @template Appboard
         * @return {?}
         */
        Appboard.create = /**
         * @template Appboard
         * @return {?}
         */
        function () {
            /** @type {?} */
            var object = Object.create(Appboard.prototype);
            object.tileSizes = TileSize.getTileSizes();
            object.nextLeft = 0;
            object.nextTop = 0;
            object.columnHeightMax = 0;
            return object;
        };
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} appboardEntries
         * @return {?}
         */
        Appboard.prototype.push = 
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} appboardEntries
         * @return {?}
         */
        function () {
            var appboardEntries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                appboardEntries[_i] = arguments[_i];
            }
            return _super.prototype.push.apply(this, __spread$1(appboardEntries));
        };
        return Appboard;
    }(Tiles));
    if (false) {
        /** @type {?} */
        Appboard.prototype.isVisible;
    }

    var __extends$2 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __read$2 = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread$2 = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$2(arguments[i]));
        return ar;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Sidebar = /** @class */ (function (_super) {
        __extends$2(Sidebar, _super);
        // #endregion
        // #region Constructors
        function Sidebar(sidebarEntries) {
            var _this = _super.apply(this, __spread$2(sidebarEntries)) || this;
            // #region Properties
            _this.isVisible = true;
            return _this;
        }
        /**
         * @template Sidebars
         * @return {?}
         */
        Sidebar.create = /**
         * @template Sidebars
         * @return {?}
         */
        function () {
            return Object.create(Sidebar.prototype);
        };
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} sidebarEntries
         * @return {?}
         */
        Sidebar.prototype.push = 
        // #endregion
        // #region Public Methods
        /**
         * @param {...?} sidebarEntries
         * @return {?}
         */
        function () {
            var sidebarEntries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                sidebarEntries[_i] = arguments[_i];
            }
            return _super.prototype.push.apply(this, __spread$2(sidebarEntries));
        };
        return Sidebar;
    }(Array));
    if (false) {
        /** @type {?} */
        Sidebar.prototype.isVisible;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppConfig = /** @class */ (function () {
        // #endregion
        // #region Constructors
        function AppConfig() {
            // #region Properties
            this.appTitle = 'One-System Portal Azure';
            this.isShowSplashScreen = true;
            this.username = 'user@one-system.domain';
            this.usernameTenant = 'One-System';
            this.appboard = Appboard.create();
            this.blades = []; // Blades.create();
            // Blades.create();
            this.sidebar = Sidebar.create();
        }
        return AppConfig;
    }());
    if (false) {
        /** @type {?} */
        AppConfig.prototype.appTitle;
        /** @type {?} */
        AppConfig.prototype.isShowSplashScreen;
        /** @type {?} */
        AppConfig.prototype.username;
        /** @type {?} */
        AppConfig.prototype.usernameTenant;
        /** @type {?} */
        AppConfig.prototype.appboard;
        /** @type {?} */
        AppConfig.prototype.blades;
        /** @type {?} */
        AppConfig.prototype.sidebar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppConfigService = /** @class */ (function () {
        // #region Properties
        // #endregion
        // #region Constructors
        function AppConfigService(appConfig) {
            this.appConfig = appConfig;
        }
        AppConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root' // singleton: should be provided in the application root
                    },] }
        ];
        /** @nocollapse */
        AppConfigService.ctorParameters = function () { return [
            { type: AppConfig }
        ]; };
        /** @nocollapse */ AppConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AppConfigService_Factory() { return new AppConfigService(core.ɵɵinject(AppConfig)); }, token: AppConfigService, providedIn: "root" });
        return AppConfigService;
    }());
    if (false) {
        /** @type {?} */
        AppConfigService.prototype.appConfig;
    }

    var __extends$3 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidationResultDotNet = /** @class */ (function () {
        function ValidationResultDotNet() {
        }
        return ValidationResultDotNet;
    }());
    if (false) {
        /** @type {?} */
        ValidationResultDotNet.prototype.ErrorMessage;
        /** @type {?} */
        ValidationResultDotNet.prototype.MemberNames;
    }
    var ExceptionDotNet = /** @class */ (function () {
        function ExceptionDotNet() {
        }
        return ExceptionDotNet;
    }());
    if (false) {
        /** @type {?} */
        ExceptionDotNet.prototype.ClassName;
        /** @type {?} */
        ExceptionDotNet.prototype.Data;
        /** @type {?} */
        ExceptionDotNet.prototype.ExceptionMethod;
        /** @type {?} */
        ExceptionDotNet.prototype.HelpURL;
        /** @type {?} */
        ExceptionDotNet.prototype.HelpLink;
        /** @type {?} */
        ExceptionDotNet.prototype.HResult;
        /** @type {?} */
        ExceptionDotNet.prototype.InnerException;
        /** @type {?} */
        ExceptionDotNet.prototype.Message;
        /** @type {?} */
        ExceptionDotNet.prototype.RemoteStackIndex;
        /** @type {?} */
        ExceptionDotNet.prototype.RemoteStackTraceString;
        /** @type {?} */
        ExceptionDotNet.prototype.Source;
        /** @type {?} */
        ExceptionDotNet.prototype.StackTrace;
        /** @type {?} */
        ExceptionDotNet.prototype.WatsonBuckets;
        /**
         * @deprecated ExceptionMessage is obsolete
         * @type {?}
         */
        ExceptionDotNet.prototype.ExceptionMessage;
        /**
         * @deprecated ExceptionType is obsolete
         * @type {?}
         */
        ExceptionDotNet.prototype.ExceptionType;
    }
    var ArgumentNullException = /** @class */ (function (_super) {
        __extends$3(ArgumentNullException, _super);
        function ArgumentNullException() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ArgumentNullException;
    }(ExceptionDotNet));
    if (false) {
        /** @type {?} */
        ArgumentNullException.prototype.ParamName;
    }
    var EntityValidationException = /** @class */ (function (_super) {
        __extends$3(EntityValidationException, _super);
        function EntityValidationException() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityValidationException;
    }(ExceptionDotNet));
    if (false) {
        /** @type {?} */
        EntityValidationException.prototype.Data;
        /** @type {?} */
        EntityValidationException.prototype.ValidationResults;
    }
    /**
     * @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
     */
    var /**
     * @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
     */
    ValidationsExceptionDotNet = /** @class */ (function (_super) {
        __extends$3(ValidationsExceptionDotNet, _super);
        function ValidationsExceptionDotNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ValidationsExceptionDotNet;
    }(EntityValidationException));

    var __extends$4 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Exception = /** @class */ (function (_super) {
        __extends$4(Exception, _super);
        function Exception() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // #endregion
        // #region Static Methods
        // #endregion
        // #region Static Methods
        /**
         * @param {?} exception
         * @return {?}
         */
        Exception.getOneLineMessage = 
        // #endregion
        // #region Static Methods
        /**
         * @param {?} exception
         * @return {?}
         */
        function (exception) {
            /** @type {?} */
            var message = '';
            if (exception.Message !== undefined) {
                if (exception.Message.toLowerCase().indexOf('cannot insert duplicate key in object') >= 0
                    || exception.Message.toLowerCase().indexOf('the duplicate key value is') >= 0) {
                    console.debug(exception.Message);
                    return 'Datensatz mit gleichem Key (SchlÃ¼ssel) bereits vorhanden!';
                }
                if (exception.Message.toLowerCase().indexOf('the delete statement conflicted with the reference constraint') >= 0) {
                    console.debug(exception.Message);
                    return 'Datensatz kann nicht gelÃ¶scht werden, da noch abhÃ¤ngige Daten vorhanden sind!';
                }
                if (exception.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                    // Frist innerException
                    /** @type {?} */
                    var innerException = exception.InnerException;
                    if (exception.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                        // Second innerException
                        /** @type {?} */
                        var innerException_1 = exception.InnerException.InnerException;
                        if (exception.InnerException.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                            // Third innerException
                            /** @type {?} */
                            var innerException_2 = exception.InnerException.InnerException.InnerException;
                        }
                    }
                    console.debug(exception);
                    return innerException.Message;
                }
                message = message + exception.Message + ' ';
                return message;
            }
            if (exception.Messages !== undefined) {
                if (exception.Messages.length > 0) {
                    message = '';
                    exception.Messages.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @return {?}
                     */
                    function (item, index) {
                        if (index > 0) {
                            message = message + ' - ';
                        }
                        message = message + item;
                    }));
                    return message;
                }
            }
            if (exception.ExceptionMessage !== undefined && ((/** @type {?} */ (exception.ExceptionMessage))).toLowerCase().indexOf('see the inner exception for details') < 0) {
                message = message + ': ' + exception.ExceptionMessage + ' ';
                return message;
            }
            if (exception.ExceptionMessage !== undefined && ((/** @type {?} */ (exception.ExceptionMessage))).toLowerCase().indexOf('see the inner exception for details') >= 0) {
                if (exception.InnerException !== undefined) {
                    if (exception.InnerException.InnerException !== undefined) {
                        message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                        return message;
                    }
                    else {
                        message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                        return message;
                    }
                }
            }
            // Default handler
            console.debug(exception);
            message = message + ': JavaScript-Fehler oder Probleme mit der Internetverbindung. Weitere Informationen im Log (change log to full = debug). ' + exception;
            return message;
        };
        // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
        // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
        /**
         * @param {?} response
         * @return {?}
         */
        Exception.prepareException = 
        // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
        /**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var exception = Exception.createException();
            // #region Process (Angular 1) response.data.Data
            if (response.data !== undefined && response.data.Data !== undefined) {
                exception = Exception.processResponseData(exception, response.data.Data);
            }
            // #endregion
            // #region Process (Angular 2) response.json().Data (EntityValidationException, etc.)
            else if (response.json !== undefined && response.json().Data != undefined) {
                exception = Exception.processResponseData(exception, response.json().Data);
            }
            // #endregion
            // #region Process (Angular 2) response._body
            else if (response._body !== undefined) {
                /** @type {?} */
                var body = JSON.parse(response._body);
                if (body.Message) {
                    exception.Message = body.Message;
                }
            }
            // #endregion
            // #region Process (Angular 2) response.InnerException.InnerException.Message
            else if (response.json !== undefined && response.json !== null
                && response.json().InnerException !== undefined && response.json().InnerException !== null
                && response.json().InnerException.InnerException !== undefined && response.json().InnerException.InnerException !== null) {
                exception.Message = response.json().InnerException.InnerException.Message;
            }
            // #endregion
            //exception.convertResponse(response);
            exception.Url = response.url;
            exception.Status = response.status;
            exception.StatusText = response.statusText;
            return exception;
        };
        /**
         * @private
         * @return {?}
         */
        Exception.createException = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var exception = new Exception();
            exception.Messages = [];
            return exception;
        };
        //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
        //    console.debug('Exception.processResponseWithData');
        //    // #region Convert data to Messages
        //    if (response.data.Data === undefined) {
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //    } else {
        //        let i = 1;
        //        while (response.data.Data[i + ''] !== undefined) {
        //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
        //            exception.Messages.push(response.data.Data[i + '']);
        //            i++;
        //        }
        //    }
        //    // #endregion
        //    return exception;
        //}
        //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
        //    console.debug('Exception.processResponseWithData');
        //    // #region Convert data to Messages
        //    if (response.data.Data === undefined) {
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //    } else {
        //        let i = 1;
        //        while (response.data.Data[i + ''] !== undefined) {
        //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
        //            exception.Messages.push(response.data.Data[i + '']);
        //            i++;
        //        }
        //    }
        //    // #endregion
        //    return exception;
        //}
        /**
         * @private
         * @param {?} exception
         * @param {?} data
         * @return {?}
         */
        Exception.processResponseData = 
        //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
        //    console.debug('Exception.processResponseWithData');
        //    // #region Convert data to Messages
        //    if (response.data.Data === undefined) {
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //        exception.Messages.push('No further information found in [response.data.Data].');
        //    } else {
        //        let i = 1;
        //        while (response.data.Data[i + ''] !== undefined) {
        //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
        //            exception.Messages.push(response.data.Data[i + '']);
        //            i++;
        //        }
        //    }
        //    // #endregion
        //    return exception;
        //}
        /**
         * @private
         * @param {?} exception
         * @param {?} data
         * @return {?}
         */
        function (exception, data) {
            /** @type {?} */
            var i = 1;
            while (data[i + ''] !== undefined) {
                exception.Messages.push(data[i + '']);
                i++;
            }
            return exception;
        };
        return Exception;
    }(ValidationsExceptionDotNet));
    if (false) {
        /** @type {?} */
        Exception.prototype.Type;
        /** @type {?} */
        Exception.prototype.MessageDetail;
        /** @type {?} */
        Exception.prototype.Messages;
        /** @type {?} */
        Exception.prototype.Status;
        /** @type {?} */
        Exception.prototype.StatusText;
        /** @type {?} */
        Exception.prototype.Url;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserControlBase = /** @class */ (function () {
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function UserControlBase(portalService) {
            this.statusBar = '';
            this.statusBarClass = '';
            //this.$scope = $scope;
            this.portalService = portalService;
        }
        // #endregion
        // #region Methods
        /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
        // #endregion
        // #region Methods
        /**
         * angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink()
         * @return {?}
         */
        UserControlBase.prototype.$onDestroy = 
        // #endregion
        // #region Methods
        /**
         * angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink()
         * @return {?}
         */
        function () {
            this.removeWindowResizeListener();
        };
        /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
        /**
         * angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
         * @return {?}
         */
        UserControlBase.prototype.ngOnDestroy = /**
         * angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
         * @return {?}
         */
        function () {
            this.removeWindowResizeListener();
        };
        /** Override */
        /**
         * Override
         * @return {?}
         */
        UserControlBase.prototype.onActivate = /**
         * Override
         * @return {?}
         */
        function () {
        };
        /** Override */
        /**
         * Override
         * @return {?}
         */
        UserControlBase.prototype.onActivated = /**
         * Override
         * @return {?}
         */
        function () {
        };
        /**
         * @private
         * @return {?}
         */
        UserControlBase.prototype.removeWindowResizeListener = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.windowResizeHandler !== undefined && this.portalService.$window) {
                this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
            }
        };
        /**
         * @param {?} callback
         * @return {?}
         */
        UserControlBase.prototype.setupWindowResizeListener = /**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            /** @type {?} */
            var id;
            window.addEventListener('resize', this.windowResizeHandler = (/**
             * @return {?}
             */
            function () {
                clearTimeout(id);
                id = setTimeout((/**
                 * @return {?}
                 */
                function () { callback(); }), 50);
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        UserControlBase.prototype.isNumberUndefinedNullOr0 = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value > 0) {
                return false;
            }
            else {
                return true;
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        UserControlBase.prototype.isObjectNullUndefinedOrEmpty = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == null) {
                return true;
            }
            if (value == undefined) {
                return true;
            }
            if (value && Object.keys(value).length > 0) {
                return false;
            }
            else {
                return true;
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        UserControlBase.prototype.isStringNullOrEmpty = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.replace(' ', '').length > 0) {
                return false;
            }
            else {
                return true;
            }
        };
        /**
         * @param {?=} length
         * @return {?}
         */
        UserControlBase.prototype.getRandomString = /**
         * @param {?=} length
         * @return {?}
         */
        function (length) {
            if (length === void 0) { length = 20; }
            return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
        };
        // #region Set StatusBar
        // #region Set StatusBar
        /**
         * @return {?}
         */
        UserControlBase.prototype.clearStatusBar = 
        // #region Set StatusBar
        /**
         * @return {?}
         */
        function () {
            this.statusBar = '';
            this.statusBarClass = '';
        };
        /**
         * @param {?=} text
         * @param {?=} style
         * @return {?}
         */
        UserControlBase.prototype.setStatusBar = /**
         * @param {?=} text
         * @param {?=} style
         * @return {?}
         */
        function (text, style) {
            this.statusBar = text ? text : '';
            this.statusBarClass = style ? style : '';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarCopyData = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'Daten kopieren...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarLoadData = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'Daten laden...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarSaveData = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'Daten speichern...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarDeleteData = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'Daten lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen...';
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarDeleteDataCanceled = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen abgebrochen.';
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @param {?} text
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarInfo = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-info';
        };
        /**
         * @param {?} text
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarError = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-error';
        };
        /**
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarNoDataFound = /**
         * @return {?}
         */
        function () {
            this.statusBar = 'Keine Daten gefunden!';
            this.statusBarClass = 'apa-statusbar-error';
        };
        /**
         * @param {?} exception
         * @return {?}
         */
        UserControlBase.prototype.setStatusBarException = /**
         * @param {?} exception
         * @return {?}
         */
        function (exception) {
            this.statusBar = Exception.getOneLineMessage(exception);
            this.statusBarClass = 'apa-statusbar-error';
        };
        return UserControlBase;
    }());
    if (false) {
        /** @type {?} */
        UserControlBase.prototype.portalService;
        /** @type {?} */
        UserControlBase.prototype.windowResizeHandler;
        /** @type {?} */
        UserControlBase.prototype.statusBar;
        /** @type {?} */
        UserControlBase.prototype.statusBarClass;
    }

    var __extends$5 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Blade = /** @class */ (function (_super) {
        __extends$5(Blade, _super);
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function Blade(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this, portalService) || this;
            // #endregion
            // #region Properties
            /**
             * HACK: 2016-11-06/hp
             * [angular-portal-blade] needs [this] as the controller.
             * We don't know how to provide [this] to the directive.
             * So we came up with this [vm] property.
             */
            _this.vm = {};
            // Indicates if maximize icon is shown
            // TODO: 2019-09-26/hp: it probably should be named isMaximizedShown
            _this.isMaximize = false;
            // TODO: 2019-09-26/hp: not sure what that is, checkout
            _this.isCommandMore = false;
            // Indicates if this is a navigation blade
            _this.isNav = false;
            // Indicates if this is a navigation grid blade
            _this.isGrid = false;
            _this.visibility = 'collapse';
            _this.title = '';
            _this.subTitle = '';
            _this.width = { 'width': '0' };
            _this.widthStackLayout = { 'width': '50px' };
            _this.isInnerHtml = true;
            // #endregion
            // #endregion
            // #region Commands
            _this.isCommandBrowse = false;
            _this.isCommandBrowseEnabled = true;
            _this.commandBrowse = (/**
             * @return {?}
             */
            function () { _this.onCommandBrowse(); });
            _this.commandBrowseText = '';
            _this.isCommandCancel = false;
            _this.isCommandCancelEnabled = true;
            _this.commandCancel = (/**
             * @return {?}
             */
            function () { _this.onCommandCancel(); });
            _this.commandCancelText = '';
            _this.isCommandCopy = false;
            _this.isCommandCopyEnabled = true;
            _this.commandCopy = (/**
             * @return {?}
             */
            function () { _this.onCommandCopy(); });
            _this.commandCopyText = '';
            _this.isCommandDelete = false;
            _this.isCommandDeleteEnabled = true;
            _this.commandDelete = (/**
             * @return {?}
             */
            function () { _this.onCommandDelete(); });
            _this.commandDeleteText = '';
            _this.isCommandDocument = false;
            _this.isCommandDocumentEnabled = true;
            _this.commandDocument = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument(); });
            _this.commandDocumentText = '';
            _this.isCommandDocument2 = false;
            _this.isCommandDocument2Enabled = true;
            _this.commandDocument2 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument2(); });
            _this.commandDocument2Text = '';
            _this.isCommandDocument3 = false;
            _this.isCommandDocument3Enabled = true;
            _this.commandDocument3 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument3(); });
            _this.commandDocument3Text = '';
            _this.isCommandDocument4 = false;
            _this.isCommandDocument4Enabled = true;
            _this.commandDocument4 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument4(); });
            _this.commandDocument4Text = '';
            _this.isCommandDocument5 = false;
            _this.isCommandDocument5Enabled = true;
            _this.commandDocument5 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument5(); });
            _this.commandDocument5Text = '';
            _this.isCommandNew = false;
            _this.isCommandNewEnabled = true;
            _this.commandNew = (/**
             * @return {?}
             */
            function () { _this.onCommandNew(); });
            _this.commandNewText = '';
            _this.isCommandOrder = false;
            _this.isCommandOrderEnabled = true;
            _this.commandOrder = (/**
             * @return {?}
             */
            function () { _this.onCommandOrder(); });
            _this.commandOrderText = '';
            _this.isCommandRestart = false;
            _this.isCommandRestartEnabled = true;
            _this.commandRestart = (/**
             * @return {?}
             */
            function () { _this.onCommandRestart(); });
            _this.commandRestartText = '';
            _this.isCommandSave = false;
            _this.isCommandSaveEnabled = true;
            _this.commandSave = (/**
             * @return {?}
             */
            function () { _this.onCommandSave(); });
            _this.commandSaveText = '';
            _this.isCommandSearch = false;
            _this.isCommandSearchEnabled = true;
            _this.commandSearch = (/**
             * @return {?}
             */
            function () { _this.onCommandSearch(); });
            _this.commandSearchText = '';
            _this.isCommandStart = false;
            _this.isCommandStartEnabled = true;
            _this.commandStart = (/**
             * @return {?}
             */
            function () { _this.onCommandStart(); });
            _this.commandStartText = '';
            _this.isCommandStop = false;
            _this.isCommandStopEnabled = true;
            _this.commandStop = (/**
             * @return {?}
             */
            function () { _this.onCommandStop(); });
            _this.commandStopText = '';
            _this.isCommandSwap = false;
            _this.isCommandSwapEnabled = true;
            _this.commandSwap = (/**
             * @return {?}
             */
            function () { _this.onCommandSwap(); });
            _this.commandSwapText = '';
            _this.isCommandExcel = false;
            _this.isCommandExcelEnabled = true;
            _this.commandExcel = (/**
             * @return {?}
             */
            function () { _this.onCommandExcel(); });
            _this.commandExcelText = '';
            _this.vm = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
            if (!portalService) {
                throw new Error('[Blade] constructor parameter \'portalService\' must be provided.');
            }
            if (!path) {
                throw new Error('[Blade] constructor parameter \'path\' must be a string.');
            }
            if (!title && title !== '') {
                throw new Error('[Blade] constructor parameter \'title\' must be a string when provided.');
            }
            if (!subtitle && subtitle !== '') {
                throw new Error('[Blade] constructor parameter \'subtitle\' must be a string when provided.');
            }
            if (!width && width !== 0) {
                throw new Error('[Blade] constructor parameter \'width\' must be a number when provided.');
            }
            if (width < 50) {
                throw new Error('[Blade] constructor parameter \'width\' must be at least 50.');
            }
            // Set 'this.portalService.areaBlades.blades[index]' to 'this'
            //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
            _this.portalService.areaBlades.blades.forEach((/**
             * @param {?} blade
             * @param {?} index
             * @return {?}
             */
            function (blade, index) {
                if (blade.path != null && _this.path != null && blade.path.toLowerCase() === _this.path.toLowerCase()) {
                    _this.portalService.areaBlades.blades[index] = _this;
                }
            }));
            _this.setupWindowResizeListener((/**
             * @return {?}
             */
            function () { _this.setBladeHeights(); }));
            _this.setBladeHeights();
            return _this;
        }
        Object.defineProperty(Blade.prototype, "path", {
            get: /**
             * @return {?}
             */
            function () {
                return this._path;
            },
            // For the moment we do distinguish between lower and upper case path name
            set: 
            // For the moment we do distinguish between lower and upper case path name
            /**
             * @param {?} newPath
             * @return {?}
             */
            function (newPath) {
                if (newPath == null) {
                    return;
                }
                this._path = newPath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Methods
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        Blade.prototype.activate = 
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        function () {
            this.onActivate();
            this.onActivated();
        };
        /**
         * @param {?} path
         * @return {?}
         */
        Blade.prototype.navigateTo = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            this.onNavigateTo(path);
        };
        /** Must be overridden. */
        /**
         * Must be overridden.
         * @param {?} value
         * @return {?}
         */
        Blade.prototype.onNavigateTo = /**
         * Must be overridden.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        // At the moment we do not distinguish between lower and upper case path name
        // At the moment we do not distinguish between lower and upper case path name
        /**
         * @param {?} path1
         * @param {?} path2
         * @return {?}
         */
        Blade.prototype.comparePaths = 
        // At the moment we do not distinguish between lower and upper case path name
        /**
         * @param {?} path1
         * @param {?} path2
         * @return {?}
         */
        function (path1, path2) {
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
        /**
         * close blade.
         * @return {?}
         */
        Blade.prototype.close = /**
         * close blade.
         * @return {?}
         */
        function () {
            if (!this.onClose) {
                return; // do not close blade
            }
            if (this.portalService.areaBlades !== undefined) {
                this.portalService.areaBlades.clearPath(this.path);
            }
            else {
                throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
            }
        };
        /** Override */
        /**
         * Override
         * @return {?}
         */
        Blade.prototype.onClose = /**
         * Override
         * @return {?}
         */
        function () {
            return true;
        };
        // #region Commands
        // #region Commands
        /**
         * @return {?}
         */
        Blade.prototype.onCommandBrowse = 
        // #region Commands
        /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandCancel = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandCopy = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDelete = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument2 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument3 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument4 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument5 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandNew = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandOrder = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandRestart = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSave = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSearch = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandStart = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandStop = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSwap = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandExcel = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
        };
        // #endregion
        // #endregion
        /** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
        // #endregion
        // #endregion
        /**
         * Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2]
         * @param {?} watchExpression
         * @param {?} func
         * @return {?}
         */
        Blade.prototype.setTitle = 
        // #endregion
        // #endregion
        /**
         * Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2]
         * @param {?} watchExpression
         * @param {?} func
         * @return {?}
         */
        function (watchExpression, func) {
            console.log('commented code at : Blade.setTitle');
            //if (this.watcherTitle === undefined) {
            //    if (this.$scope !== null) {
            //        // angular1
            //        this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
            //        this.$scope.$on('$destroy', () => { this.watcherTitle(); });
            //    } else {
            //        // angular2
            //        console.log('[Blade.setTitle()] not supported for angular2. use [ngOnChanges] instead.');
            //    }
            //}
        };
        /**
         * @private
         * @return {?}
         */
        Blade.prototype.setBladeHeights = /**
         * @private
         * @return {?}
         */
        function () {
            this.bladeContentHeight = window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
            this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
            // this.portalService.$timeout(() => { }, 50);
            //window.setTimeout(() => { }, 50);
        };
        return Blade;
    }(UserControlBase));
    if (false) {
        /**
         * HACK: 2016-11-06/hp
         * [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         * @type {?}
         */
        Blade.prototype.vm;
        /** @type {?} */
        Blade.prototype.isMaximize;
        /** @type {?} */
        Blade.prototype.isCommandMore;
        /** @type {?} */
        Blade.prototype.isNav;
        /** @type {?} */
        Blade.prototype.isGrid;
        /** @type {?} */
        Blade.prototype.visibility;
        /**
         * @type {?}
         * @private
         */
        Blade.prototype.watcherTitle;
        /** @type {?} */
        Blade.prototype.bladeContentHeight;
        /** @type {?} */
        Blade.prototype.bladeContentHeightInner;
        /** @type {?} */
        Blade.prototype.title;
        /** @type {?} */
        Blade.prototype.subTitle;
        /** @type {?} */
        Blade.prototype.width;
        /** @type {?} */
        Blade.prototype.widthStackLayout;
        /** @type {?} */
        Blade.prototype.isInnerHtml;
        /** @type {?} */
        Blade.prototype.formblade;
        /**
         * @type {?}
         * @private
         */
        Blade.prototype._path;
        /** @type {?} */
        Blade.prototype.isCommandBrowse;
        /** @type {?} */
        Blade.prototype.isCommandBrowseEnabled;
        /** @type {?} */
        Blade.prototype.commandBrowse;
        /** @type {?} */
        Blade.prototype.commandBrowseText;
        /** @type {?} */
        Blade.prototype.isCommandCancel;
        /** @type {?} */
        Blade.prototype.isCommandCancelEnabled;
        /** @type {?} */
        Blade.prototype.commandCancel;
        /** @type {?} */
        Blade.prototype.commandCancelText;
        /** @type {?} */
        Blade.prototype.isCommandCopy;
        /** @type {?} */
        Blade.prototype.isCommandCopyEnabled;
        /** @type {?} */
        Blade.prototype.commandCopy;
        /** @type {?} */
        Blade.prototype.commandCopyText;
        /** @type {?} */
        Blade.prototype.isCommandDelete;
        /** @type {?} */
        Blade.prototype.isCommandDeleteEnabled;
        /** @type {?} */
        Blade.prototype.commandDelete;
        /** @type {?} */
        Blade.prototype.commandDeleteText;
        /** @type {?} */
        Blade.prototype.isCommandDocument;
        /** @type {?} */
        Blade.prototype.isCommandDocumentEnabled;
        /** @type {?} */
        Blade.prototype.commandDocument;
        /** @type {?} */
        Blade.prototype.commandDocumentText;
        /** @type {?} */
        Blade.prototype.isCommandDocument2;
        /** @type {?} */
        Blade.prototype.isCommandDocument2Enabled;
        /** @type {?} */
        Blade.prototype.commandDocument2;
        /** @type {?} */
        Blade.prototype.commandDocument2Text;
        /** @type {?} */
        Blade.prototype.isCommandDocument3;
        /** @type {?} */
        Blade.prototype.isCommandDocument3Enabled;
        /** @type {?} */
        Blade.prototype.commandDocument3;
        /** @type {?} */
        Blade.prototype.commandDocument3Text;
        /** @type {?} */
        Blade.prototype.isCommandDocument4;
        /** @type {?} */
        Blade.prototype.isCommandDocument4Enabled;
        /** @type {?} */
        Blade.prototype.commandDocument4;
        /** @type {?} */
        Blade.prototype.commandDocument4Text;
        /** @type {?} */
        Blade.prototype.isCommandDocument5;
        /** @type {?} */
        Blade.prototype.isCommandDocument5Enabled;
        /** @type {?} */
        Blade.prototype.commandDocument5;
        /** @type {?} */
        Blade.prototype.commandDocument5Text;
        /** @type {?} */
        Blade.prototype.isCommandNew;
        /** @type {?} */
        Blade.prototype.isCommandNewEnabled;
        /** @type {?} */
        Blade.prototype.commandNew;
        /** @type {?} */
        Blade.prototype.commandNewText;
        /** @type {?} */
        Blade.prototype.isCommandOrder;
        /** @type {?} */
        Blade.prototype.isCommandOrderEnabled;
        /** @type {?} */
        Blade.prototype.commandOrder;
        /** @type {?} */
        Blade.prototype.commandOrderText;
        /** @type {?} */
        Blade.prototype.isCommandRestart;
        /** @type {?} */
        Blade.prototype.isCommandRestartEnabled;
        /** @type {?} */
        Blade.prototype.commandRestart;
        /** @type {?} */
        Blade.prototype.commandRestartText;
        /** @type {?} */
        Blade.prototype.isCommandSave;
        /** @type {?} */
        Blade.prototype.isCommandSaveEnabled;
        /** @type {?} */
        Blade.prototype.commandSave;
        /** @type {?} */
        Blade.prototype.commandSaveText;
        /** @type {?} */
        Blade.prototype.isCommandSearch;
        /** @type {?} */
        Blade.prototype.isCommandSearchEnabled;
        /** @type {?} */
        Blade.prototype.commandSearch;
        /** @type {?} */
        Blade.prototype.commandSearchText;
        /** @type {?} */
        Blade.prototype.isCommandStart;
        /** @type {?} */
        Blade.prototype.isCommandStartEnabled;
        /** @type {?} */
        Blade.prototype.commandStart;
        /** @type {?} */
        Blade.prototype.commandStartText;
        /** @type {?} */
        Blade.prototype.isCommandStop;
        /** @type {?} */
        Blade.prototype.isCommandStopEnabled;
        /** @type {?} */
        Blade.prototype.commandStop;
        /** @type {?} */
        Blade.prototype.commandStopText;
        /** @type {?} */
        Blade.prototype.isCommandSwap;
        /** @type {?} */
        Blade.prototype.isCommandSwapEnabled;
        /** @type {?} */
        Blade.prototype.commandSwap;
        /** @type {?} */
        Blade.prototype.commandSwapText;
        /** @type {?} */
        Blade.prototype.isCommandExcel;
        /** @type {?} */
        Blade.prototype.isCommandExcelEnabled;
        /** @type {?} */
        Blade.prototype.commandExcel;
        /** @type {?} */
        Blade.prototype.commandExcelText;
    }

    var __extends$6 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AreaBlades = /** @class */ (function (_super) {
        __extends$6(AreaBlades, _super);
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function AreaBlades(portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.blades = new Array();
            _this.portalScroll = window.document.getElementById('apa-portal-scroll');
            _this.setupWindowResizeListener((/**
             * @return {?}
             */
            function () { _this.setPortalScrollCss(); }));
            _this.blades = [];
            return _this;
        }
        // #endregion
        // #region Methods
        // #endregion
        // #region Methods
        /**
         * @param {?} args
         * @return {?}
         */
        AreaBlades.prototype.raiseBladeOnActivateEvent = 
        // #endregion
        // #region Methods
        /**
         * @param {?} args
         * @return {?}
         */
        function (args) {
            /** @type {?} */
            var isEventRaised = false;
            this.blades.forEach((/**
             * @param {?} blade
             * @return {?}
             */
            function (blade) {
                if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                    // Raise event onActivate
                    blade.onActivate();
                    isEventRaised = true;
                    return;
                }
            }));
        };
        /**
         * @param {?} args
         * @return {?}
         */
        AreaBlades.prototype.raiseAddBladeEvent = /**
         * @param {?} args
         * @return {?}
         */
        function (args) {
            /** @type {?} */
            var isBladeAlreadyShown = false;
            this.blades.forEach((/**
             * @param {?} blade
             * @return {?}
             */
            function (blade) {
                if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                    // Blade is already shown, just activate it again
                    blade.onActivate();
                    isBladeAlreadyShown = true;
                    return;
                }
            }));
            if (!isBladeAlreadyShown) {
                // Add the blade, since it is not yet shown
                this.portalService.areaBlades.addBlade(args.path, args.pathSender);
                //this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
            }
        };
        /**
         * @param {?} path
         * @return {?}
         */
        AreaBlades.prototype.setFirstBlade = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        };
        /**
         * @param {?} path
         * @param {?=} senderPath
         * @return {?}
         */
        AreaBlades.prototype.addBlade = /**
         * @param {?} path
         * @param {?=} senderPath
         * @return {?}
         */
        function (path, senderPath) {
            var _this = this;
            if (senderPath === void 0) { senderPath = ''; }
            if (path == null) {
                return;
            }
            if (senderPath == null) {
                return;
            }
            /** @type {?} */
            var portalcontent = null;
            console.log('commented code at : AreaBlades.addBlade (analytics)');
            // this.portalService.$analytics.pageTrack(path.toLowerCase());
            path = path.toLowerCase();
            senderPath = senderPath.toLowerCase();
            // #region Verify
            if (path === undefined || path === '') {
                return;
            }
            if (this.portalService.$window !== undefined) {
                if (this.portalService.$window.document === undefined) {
                    throw new Error('[AreaBlades] \'this.$window.document\' undefined.');
                }
                portalcontent = this.portalService.$window.document.getElementById('apa-portal-scroll');
                if (portalcontent === null) {
                    throw new Error('[AreaBlades] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
                }
            }
            // #endregion
            // #region Clear all children of the parent path
            this.clearChild(senderPath);
            // #endregion
            // #region Make sure the blade is not yet show
            this.blades.forEach((/**
             * @param {?} blade
             * @return {?}
             */
            function (blade) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    throw new Error('[AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
                }
            }));
            // #endregion
            // #region Show the blade
            /** @type {?} */
            var blade = new Blade(this.portalService, path, '');
            this.blades.push(blade);
            // #endregion
            // #region Position the blade
            if (this.portalService.$window !== undefined) {
                this.portalService.$window.setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var azureportalblades = _this.portalService.$window.document.getElementsByClassName('azureportalblade');
                    /** @type {?} */
                    var i = _this.blades.length - 1;
                    // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                    //       So now if it is, the user has to scroll on its own.
                    if (azureportalblades[i] !== undefined && ((/** @type {?} */ (azureportalblades[i]))).offsetLeft !== undefined) {
                        /** @type {?} */
                        var sl = ((/** @type {?} */ (azureportalblades[i]))).offsetLeft - 30;
                        portalcontent.scrollLeft = sl;
                    }
                }), 250);
            }
            // #endregion
            return blade;
        };
        /**
         * @return {?}
         */
        AreaBlades.prototype.clearAll = /**
         * @return {?}
         */
        function () {
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        };
        /**
         * @param {?} path
         * @return {?}
         */
        AreaBlades.prototype.clearPath = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            var _this = this;
            // we do not distinguish between lower and upper case path name
            path = path.toLowerCase();
            /** @type {?} */
            var isremoved = this.blades.some((/**
             * @param {?} blade
             * @param {?} index
             * @return {?}
             */
            function (blade, index) {
                if (blade.comparePaths(blade.path, path)) {
                    _this.blades.length = index;
                    return true;
                }
            }));
            if (!isremoved && this.portalService.areaNotification.path === path) {
                this.portalService.areaNotification.hide();
                isremoved = true;
            }
            if (!isremoved) {
                throw new Error('[AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        };
        /**
         * @param {?} level
         * @return {?}
         */
        AreaBlades.prototype.clearLevel = /**
         * @param {?} level
         * @return {?}
         */
        function (level) {
            if (this.blades.length < level) {
                throw new Error('[AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
            }
            if (level === 0) {
                level = 1;
            }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        };
        /**
         * @return {?}
         */
        AreaBlades.prototype.clearLastLevel = /**
         * @return {?}
         */
        function () {
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        };
        /**
         * @param {?} path
         * @return {?}
         */
        AreaBlades.prototype.clearChild = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            var _this = this;
            path = path.toLowerCase();
            if (path === '') {
                return;
            }
            /** @type {?} */
            var isremoved = this.blades.some((/**
             * @param {?} blade
             * @param {?} index
             * @return {?}
             */
            function (blade, index) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    _this.blades.length = index + 1;
                    return true;
                }
            }));
            if (!isremoved) {
                throw new Error('[AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        };
        /**
         * @return {?}
         */
        AreaBlades.prototype.showPanoramaIfNoBlades = /**
         * @return {?}
         */
        function () {
            if (this.blades.length === 0) {
                if (this.portalService.panorama !== undefined) {
                    {
                        this.portalService.panorama.isVisible = true;
                        this.portalService.panorama.startboard.tiles.showTiles = true;
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        AreaBlades.prototype.hidePanorama = /**
         * @return {?}
         */
        function () {
            if (this.portalService.panorama !== undefined) {
                this.portalService.panorama.isVisible = false;
                this.portalService.panorama.startboard.tiles.showTiles = false;
            }
        };
        /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
        /**
         * We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed.
         * @return {?}
         */
        AreaBlades.prototype.close = /**
         * We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed.
         * @return {?}
         */
        function () {
            // Unregister Listeners
            this.addBladeListener();
            this.areaNotificationShowListener();
            this.areaNotificationHideListener();
        };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        AreaBlades.prototype.setPortalScrollCss = 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            if (this.portalScroll != null && this.portalService.areaNotification != null) {
                this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
            }
        };
        return AreaBlades;
    }(UserControlBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AreaBlades.prototype.portalScroll;
        /**
         * @type {?}
         * @private
         */
        AreaBlades.prototype.addBladeListener;
        /**
         * @type {?}
         * @private
         */
        AreaBlades.prototype.areaNotificationShowListener;
        /**
         * @type {?}
         * @private
         */
        AreaBlades.prototype.areaNotificationHideListener;
        /** @type {?} */
        AreaBlades.prototype.blades;
    }

    var __extends$7 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AreaNotification = /** @class */ (function (_super) {
        __extends$7(AreaNotification, _super);
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function AreaNotification(portalService) {
            var _this = _super.call(this, portalService) || this;
            // #endregion
            // #region Properties
            _this.path = '';
            _this.widthAreaUsed = 0;
            _this._width = 250;
            _this._backgroundColor = '#32383f';
            _this.areaNotification = window.document.getElementById('apa-notification-area');
            _this.hide();
            _this.setupWindowResizeListener((/**
             * @return {?}
             */
            function () { _this.calcualteCssStyles(); }));
            return _this;
        }
        Object.defineProperty(AreaNotification.prototype, "width", {
            get: /**
             * @return {?}
             */
            function () {
                return this._width;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._width = value;
                this.calcualteCssStyles();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AreaNotification.prototype, "backgroundColor", {
            get: /**
             * @return {?}
             */
            function () {
                return this._backgroundColor;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._backgroundColor = value;
                this.calcualteCssStyles();
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Methods
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        AreaNotification.prototype.hide = 
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        function () {
            // Do not hide on false
            if (!this.onHide) {
                return;
            }
            this.path = '';
            this.widthAreaUsed = 0;
            if (this.areaNotification != null) {
                this.areaNotification.style.display = 'none';
            }
            ;
            this.portalService.areaBlades.setPortalScrollCss();
            //this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
        };
        /**
         * @param {?=} width
         * @return {?}
         */
        AreaNotification.prototype.show = /**
         * @param {?=} width
         * @return {?}
         */
        function (width) {
            if (width === void 0) { width = 250; }
            this.onShow();
            this.width = width;
            this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
            this.calcualteCssStyles();
            if (this.areaNotification != null) {
                this.areaNotification.style.display = 'inline-block';
            }
            ;
            console.log('commented code at : AreaNotification.show');
            this.portalService.areaBlades.setPortalScrollCss();
            //this.portalService.$rootScope.$broadcast('AreaNotification.Show');
            this.onShowed();
        };
        /* Override */
        /* Override */
        /**
         * @return {?}
         */
        AreaNotification.prototype.onHide = /* Override */
        /**
         * @return {?}
         */
        function () {
            return true;
        };
        /* Override */
        /* Override */
        /**
         * @return {?}
         */
        AreaNotification.prototype.onShow = /* Override */
        /**
         * @return {?}
         */
        function () {
        };
        /* Override */
        /* Override */
        /**
         * @return {?}
         */
        AreaNotification.prototype.onShowed = /* Override */
        /**
         * @return {?}
         */
        function () {
        };
        /**
         * @private
         * @return {?}
         */
        AreaNotification.prototype.calcualteCssStyles = /**
         * @private
         * @return {?}
         */
        function () {
            this.areaNotification = window.document.getElementById('apa-notification-area');
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
    }(UserControlBase));
    if (false) {
        /** @type {?} */
        AreaNotification.prototype.path;
        /** @type {?} */
        AreaNotification.prototype.widthAreaUsed;
        /**
         * @type {?}
         * @private
         */
        AreaNotification.prototype.areaNotification;
        /**
         * @type {?}
         * @private
         */
        AreaNotification.prototype._width;
        /**
         * @type {?}
         * @private
         */
        AreaNotification.prototype._backgroundColor;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserAccount = /** @class */ (function () {
        // #region Constructor
        function UserAccount(username, firstName, lastName) {
            if (firstName === void 0) { firstName = ''; }
            if (lastName === void 0) { lastName = ''; }
            this.userName = username;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(UserAccount.prototype, "firstName", {
            get: /**
             * @return {?}
             */
            function () {
                return this._firstName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._firstName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "lastName", {
            get: /**
             * @return {?}
             */
            function () {
                return this._lastName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._lastName = value;
                this._name = (this._firstName || '') + ' ' + (this._lastName || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserAccount.prototype, "name", {
            get: /**
             * @return {?}
             */
            function () {
                return this._name;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                throw new Error('[UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
            },
            enumerable: true,
            configurable: true
        });
        return UserAccount;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserAccount.prototype._firstName;
        /**
         * @type {?}
         * @private
         */
        UserAccount.prototype._lastName;
        /**
         * @type {?}
         * @private
         */
        UserAccount.prototype._name;
        /** @type {?} */
        UserAccount.prototype.userName;
        /** @type {?} */
        UserAccount.prototype.emailAddress;
    }

    var __extends$8 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AvatarMenu = /** @class */ (function (_super) {
        __extends$8(AvatarMenu, _super);
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function AvatarMenu(portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.userAccount = new UserAccount('demo@apa.org', 'demo', 'apa');
            return _this;
        }
        return AvatarMenu;
    }(UserControlBase));
    if (false) {
        /** @type {?} */
        AvatarMenu.prototype.userAccount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var TileSizes$1 = {
        small: 0,
        mini: 1,
        normal: 2,
        herowide: 3,
    };
    TileSizes$1[TileSizes$1.small] = 'small';
    TileSizes$1[TileSizes$1.mini] = 'mini';
    TileSizes$1[TileSizes$1.normal] = 'normal';
    TileSizes$1[TileSizes$1.herowide] = 'herowide';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TileSize$1 = /** @class */ (function () {
        // #region Constructor
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
        }
        // #endregion
        // #region Methods
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        TileSize.getTileSizes = 
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tileSizes = Array();
            tileSizes.push(new TileSize(TileSizes$1.small, 90, 90));
            tileSizes.push(new TileSize(TileSizes$1.mini, 180, 90));
            tileSizes.push(new TileSize(TileSizes$1.normal, 180, 180));
            tileSizes.push(new TileSize(TileSizes$1.herowide, 540, 360));
            return tileSizes;
        };
        return TileSize;
    }());
    if (false) {
        /** @type {?} */
        TileSize$1.prototype.tileSizes;
        /** @type {?} */
        TileSize$1.prototype.width;
        /** @type {?} */
        TileSize$1.prototype.height;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Tiles$1 = /** @class */ (function () {
        function Tiles() {
            // #region Properties
            // #region Properties
            this.showTiles = true;
            this.tiles = new Array();
            this.isTilesLoaded = false;
            this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
            // not yet evaluated in HTML, but this is the standard behavior
            this.tileSizes = TileSize$1.getTileSizes();
            this.nextLeft = 0;
            this.nextTop = 0;
            this.columnHeightMax = 0;
            // #endregion
        }
        // #endregion
        // #region Methods
        // #endregion
        // #region Methods
        /**
         * @param {?} tile
         * @return {?}
         */
        Tiles.prototype.addTile = 
        // #endregion
        // #region Methods
        /**
         * @param {?} tile
         * @return {?}
         */
        function (tile) {
            this.isTilesLoaded = true;
            /** @type {?} */
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes$1[tile.tileSize]; // Get CSS Name
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
    if (false) {
        /** @type {?} */
        Tiles$1.prototype.showTiles;
        /** @type {?} */
        Tiles$1.prototype.tiles;
        /** @type {?} */
        Tiles$1.prototype.isTilesLoaded;
        /** @type {?} */
        Tiles$1.prototype.hideTileIfOnlyOne;
        /**
         * @type {?}
         * @private
         */
        Tiles$1.prototype.tileSizes;
        /**
         * @type {?}
         * @private
         */
        Tiles$1.prototype.nextLeft;
        /**
         * @type {?}
         * @private
         */
        Tiles$1.prototype.nextTop;
        /**
         * @type {?}
         * @private
         */
        Tiles$1.prototype.columnHeightMax;
    }

    var __extends$9 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Startboard = /** @class */ (function (_super) {
        __extends$9(Startboard, _super);
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function Startboard(portalService) {
            var _this = _super.call(this, portalService) || this;
            _this.tiles = new Tiles$1();
            return _this;
        }
        return Startboard;
    }(UserControlBase));
    if (false) {
        /** @type {?} */
        Startboard.prototype.tiles;
    }

    var __extends$a = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Panorama = /** @class */ (function (_super) {
        __extends$a(Panorama, _super);
        // #endregion
        // #region Constructor
        //static $inject = ['$scope', 'portalService'];
        function Panorama(portalService, title) {
            var _this = _super.call(this, portalService) || this;
            _this.isVisible = true;
            _this.title = title;
            _this.portalService.panorama = _this;
            _this.avatarMenu = new AvatarMenu(_this.portalService);
            _this.startboard = new Startboard(_this.portalService);
            return _this;
        }
        return Panorama;
    }(UserControlBase));
    if (false) {
        /** @type {?} */
        Panorama.prototype.title;
        /** @type {?} */
        Panorama.prototype.isVisible;
        /** @type {?} */
        Panorama.prototype.avatarMenu;
        /** @type {?} */
        Panorama.prototype.startboard;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PortalService = /** @class */ (function () {
        // #region Constructor
        //static $inject = ['$injector'];
        function PortalService() {
            //this.$injector = $injector;
            this.parameter = { action: 'none', itemId: 0 };
            this.panorama = new Panorama(this, 'angular-portal-azure-module');
            //this.$http = $injector.get('$http');
            //this.$httpBackend = $injector.get('$httpBackend');
            //this.$q = $injector.get('$q');
            //this.$rootScope = $injector.get('$rootScope');
            //this.$window = $injector.get('$window');
            //this.$analytics = $injector.get('$analytics');
            //this.$timeout = $injector.get('$timeout');
            //this.$translate = $injector.get('$translate');
            //this.ngDialog = <any>$injector.get('ngDialog');
            this.areaBlades = new AreaBlades(this);
            this.areaNotification = new AreaNotification(this);
        }
        return PortalService;
    }());
    if (false) {
        /** @type {?} */
        PortalService.prototype.appService;
        /** @type {?} */
        PortalService.prototype.parameter;
        /** @type {?} */
        PortalService.prototype.$analytics;
        /** @type {?} */
        PortalService.prototype.portalShell;
        /** @type {?} */
        PortalService.prototype.panorama;
        /** @type {?} */
        PortalService.prototype.areaBlades;
        /** @type {?} */
        PortalService.prototype.areaNotification;
        /** @type {?} */
        PortalService.prototype.ngDialog;
        /** @type {?} */
        PortalService.prototype.$injector;
        /** @type {?} */
        PortalService.prototype.$http;
        /** @type {?} */
        PortalService.prototype.$httpBackend;
        /** @type {?} */
        PortalService.prototype.$q;
        /** @type {?} */
        PortalService.prototype.$rootScope;
        /** @type {?} */
        PortalService.prototype.$window;
        /** @type {?} */
        PortalService.prototype.$timeout;
        /** @type {?} */
        PortalService.prototype.$translate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BladeService = /** @class */ (function () {
        // #endregion
        // #region Constructors
        function BladeService(appConfigService, router$1, portalService, appService) {
            // #region Handle router events
            var _this = this;
            this.appConfigService = appConfigService;
            this.router = router$1;
            this.portalService = portalService;
            this.appService = appService;
            // #region Properties
            this.bladeId = 0;
            this.router.events
                .pipe(
            // The "events" stream contains all the navigation events. For this demo,
            // though, we only care about the NavigationStart event as it contains
            // information about what initiated the navigation sequence.
            operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return (event instanceof router.NavigationStart);
            })))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // See [https://angular.io/api/router/Event] for routes sequences
                // NavigationStart
                if (event instanceof router.NavigationStart) {
                    // console.log({ NavigationStart: '', event: event, eventUrl: event.url, eventRestoreState: event.restoredState, routerConfig: this.router.config });
                    _this.fixRouterConfigBladeOutlet(event);
                    _this.handleRestoreStateEventForBlades(event);
                }
                console.groupEnd();
            }));
            // #endregion
        }
        // #endregion
        // #region Public Methods
        /**
         *
         */
        // #endregion
        // #region Public Methods
        /**
         *
         * @param {?} routerToPath
         * @return {?}
         */
        BladeService.prototype.navigateTo = 
        // #endregion
        // #region Public Methods
        /**
         *
         * @param {?} routerToPath
         * @return {?}
         */
        function (routerToPath) {
            var _this = this;
            /** @type {?} */
            var isRouteMatchFound = false;
            // Process all route configuration entries
            this.router.config.forEach((/**
             * @param {?} routeConfig
             * @return {?}
             */
            function (routeConfig) {
                var _a;
                // Try to match a configured route, with the one requested
                // (forEach cannot break out (stop execution), therefore we check for isRouteMatchFound for no further processing)
                if (routeConfig.path === routerToPath && !isRouteMatchFound) {
                    _this.bladeId = _this.bladeId + 1; // create a unique id
                    // create a unique id
                    /** @type {?} */
                    var outletId = 'blade' + _this.bladeId;
                    _this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: outletId })));
                    routeConfig.outlet = outletId; // set outlet, so the route knows, in which router-outlet it should be shown
                    // Navigate to the route
                    _this.router.navigate([{ outlets: (_a = {}, _a[outletId] = [routerToPath], _a) }]);
                    //this.router.navigate([{ outlets: { primary: ['appboard'], [outletId]: [routerToPath] } }]);
                    isRouteMatchFound = true;
                }
            }));
            // No match found
            if (!isRouteMatchFound) {
                console.log('XXXXXX');
                if (this.appConfigService.appConfig.blades.length > 0) {
                    this.appConfigService.appConfig.appboard.isVisible = false;
                }
                else {
                    this.appConfigService.appConfig.appboard.isVisible = true;
                }
                if (this.portalService.areaBlades.blades.length == 0) {
                    this.portalService.panorama.isVisible = true;
                    this.portalService.panorama.startboard.tiles.showTiles = true;
                }
                this.router.navigate(['/' + routerToPath]);
            }
        };
        // #endregion
        // #region Private Methods
        /**
         * Fix router configuration for blades
         * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
         * see above in the navigateTo function.
         * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
         * to the route configuration, so that a corresponding URL can be reconstructed.
         * */
        // #endregion
        // #region Private Methods
        /**
         * Fix router configuration for blades
         * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
         * see above in the navigateTo function.
         * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
         * to the route configuration, so that a corresponding URL can be reconstructed.
         *
         * @private
         * @param {?} event
         * @return {?}
         */
        BladeService.prototype.fixRouterConfigBladeOutlet = 
        // #endregion
        // #region Private Methods
        /**
         * Fix router configuration for blades
         * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
         * see above in the navigateTo function.
         * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
         * to the route configuration, so that a corresponding URL can be reconstructed.
         *
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            // TODO:2019-09-30/hp: Not yet finished.
            //                     Processing multiple blade outlets(https://localhost:44398/appboard(blade2:counter//blade1:fetchdata)).
            //                     We need to parse event.url and find all blade outlets.
            //                     At the moment only the first one is found and processed.
            /** @type {?} */
            var outlet1 = event.url.substring(10, 16);
            /** @type {?} */
            var path1 = event.url.substring(17).replace(')', '');
            //this.router.routerState.root.children.forEach((child) => {
            //    if (child.outlet.startsWith('blade')) {
            //        console.log({ child: child });
            this.router.config.forEach((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                if (config.path == path1
                    && config.outlet === undefined) {
                    config.outlet = outlet1;
                    _this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: outlet1 })));
                }
            }));
            //    }
            //});
        };
        /**
         *
         */
        /**
         *
         * @private
         * @param {?} event
         * @return {?}
         */
        BladeService.prototype.handleRestoreStateEventForBlades = /**
         *
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // The "restoredState" property is set/defined when the navigation
            // event is triggered by a "popstate" event (e.g.: back / forward buttons).
            // It will contain the ID of the earlier navigation event
            // to which the browser is returning.
            // CAUTION: This ID may not be part of the current page rendering.
            // This value is pulled out of the browser; and, may exist across page refreshes.
            if (event.restoredState) {
                if (event.url.indexOf('(blade') < 0) {
                    console.log('no more blades, reset appboard visibility');
                    this.appConfigService.appConfig.appboard.isVisible = true;
                    this.portalService.panorama.isVisible = true;
                    this.portalService.panorama.startboard.tiles.showTiles = true;
                }
                else {
                    console.log('remove latest blade');
                    this.appConfigService.appConfig.blades.pop();
                }
            }
        };
        BladeService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BladeService.ctorParameters = function () { return [
            { type: AppConfigService },
            { type: router.Router },
            { type: PortalService },
            { type: AppService }
        ]; };
        return BladeService;
    }());
    if (false) {
        /** @type {?} */
        BladeService.prototype.bladeId;
        /**
         * @type {?}
         * @private
         */
        BladeService.prototype.appConfigService;
        /**
         * @type {?}
         * @private
         */
        BladeService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        BladeService.prototype.portalService;
        /**
         * @type {?}
         * @private
         */
        BladeService.prototype.appService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // https://devblogs.microsoft.com/premier-developer/angular-how-to-simplify-components-with-typescript-inheritance/
    var InjectorService = /** @class */ (function () {
        function InjectorService() {
        }
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @param {?} injector
         * @return {?}
         */
        InjectorService.setInjector = 
        // #endregion
        // #region Public Methods
        /**
         * @param {?} injector
         * @return {?}
         */
        function (injector) {
            InjectorService.injector = injector;
        };
        /**
         * @return {?}
         */
        InjectorService.getInjector = /**
         * @return {?}
         */
        function () {
            return InjectorService.injector;
        };
        // #region Properties
        InjectorService.injector = null;
        return InjectorService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        InjectorService.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppService = /** @class */ (function () {
        // #region Constructors
        //constructor(title: string = null) {
        function AppService(appConfigService, bladeService, injector) {
            this.appConfigService = appConfigService;
            this.bladeService = bladeService;
            InjectorService.setInjector(injector);
        }
        AppService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root' // singleton: should be provided in the application root
                    },] }
        ];
        /** @nocollapse */
        AppService.ctorParameters = function () { return [
            { type: AppConfigService },
            { type: BladeService },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ AppService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AppService_Factory() { return new AppService(core.ɵɵinject(AppConfigService), core.ɵɵinject(BladeService), core.ɵɵinject(core.INJECTOR)); }, token: AppService, providedIn: "root" });
        return AppService;
    }());
    if (false) {
        /** @type {?} */
        AppService.prototype.portalService;
        /** @type {?} */
        AppService.prototype.appConfigService;
        /** @type {?} */
        AppService.prototype.bladeService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { MainService } from '../../service/main/main.service';
    //import { BrowserWindowService } from '../service/base/browser-window.service';
    var UserControlBase$1 = /** @class */ (function () {
        // #region Properties
        //browserWindowService: BrowserWindowService;
        // #endregion
        // #region Constructors
        // public mainService: MainService
        function UserControlBase() {
        }
        // #endregion
        // #region Public Methods
        /** Override */
        // #endregion
        // #region Public Methods
        /**
         * Override
         * @return {?}
         */
        UserControlBase.prototype.onActivate = 
        // #endregion
        // #region Public Methods
        /**
         * Override
         * @return {?}
         */
        function () {
        };
        /** Override */
        /**
         * Override
         * @return {?}
         */
        UserControlBase.prototype.onActivated = /**
         * Override
         * @return {?}
         */
        function () {
        };
        return UserControlBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Viewport = /** @class */ (function () {
        function Viewport() {
            // #region Properties
            // provided by the browser itself
            this.fixedHeight = 0; // contains the heights of all the fixed area in the browser | 20 is the scroller
            // contains the heights of all the fixed area in the browser | 20 is the scroller
            this.dynamicHeight = 0; // calculated Height (browserWindowInnerHeight - fixedHeight)
            // #endregion
        }
        // #endregion
        // #region Public Methods
        // calculated Height (browserWindowInnerHeight - fixedHeight)
        // #endregion
        // #region Public Methods
        /**
         * @param {?} browserWindow
         * @return {?}
         */
        Viewport.prototype.setBrowserWindow = 
        // calculated Height (browserWindowInnerHeight - fixedHeight)
        // #endregion
        // #region Public Methods
        /**
         * @param {?} browserWindow
         * @return {?}
         */
        function (browserWindow) {
            this.browserWindowInnerHeight = browserWindow.innerHeight;
            this.browserWindowInnerWidth = browserWindow.innerWidth;
            this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
        };
        /**
         * @param {?} height
         * @return {?}
         */
        Viewport.prototype.addFixedHeight = /**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            this.fixedHeight = this.fixedHeight + height;
            this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
        };
        /**
         * @return {?}
         */
        Viewport.prototype.log = /**
         * @return {?}
         */
        function () {
            console.group('Viewport');
            console.log("browserWindowInnerHeight: " + this.browserWindowInnerHeight);
            console.log("browserWindowInnerWidth: " + this.browserWindowInnerWidth);
            console.log("dynamicHeight: " + this.dynamicHeight);
            console.log("fixedHeight: " + this.fixedHeight);
            console.groupEnd();
        };
        return Viewport;
    }());
    if (false) {
        /** @type {?} */
        Viewport.prototype.browserWindowInnerHeight;
        /** @type {?} */
        Viewport.prototype.browserWindowInnerWidth;
        /**
         * @type {?}
         * @private
         */
        Viewport.prototype.fixedHeight;
        /** @type {?} */
        Viewport.prototype.dynamicHeight;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { pipe } from '@angular/core/src/render3';
    // #region Global JavaScript Functions
    /**
     * @return {?}
     */
    function getWindow() {
        return window;
    }
    // #endregion
    var BrowserService = /** @class */ (function () {
        // #endregion
        // #region Constructors
        function BrowserService() {
            this.viewport = new Viewport();
            this.viewport.addFixedHeight(40);
            this.viewport.setBrowserWindow(this.browserWindow); // Initialize values
            console.log('commented code at : BrowserService.constructor');
            //this.onResize = fromEvent(this.browserWindow, 'resize')
            //    .pipe(
            //        throttleTime(20),
            //        map((event) => {
            //            this.viewport.setBrowserWindow(<Window>event.currentTarget);
            //            return this.viewport;
            //        }),
            //        startWith(this.viewport),
            //        //tap(viewport => console.log(viewport))
            //    );
        }
        Object.defineProperty(BrowserService.prototype, "browserWindow", {
            // #region Properties
            get: 
            // #region Properties
            /**
             * @return {?}
             */
            function () {
                return getWindow();
            },
            enumerable: true,
            configurable: true
        });
        BrowserService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root' // singleton: should be provided in the application root
                    },] }
        ];
        /** @nocollapse */
        BrowserService.ctorParameters = function () { return []; };
        /** @nocollapse */ BrowserService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BrowserService_Factory() { return new BrowserService(); }, token: BrowserService, providedIn: "root" });
        return BrowserService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BrowserService.prototype.viewport;
        /** @type {?} */
        BrowserService.prototype.onResize;
    }

    var __extends$b = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Blade$1 = /** @class */ (function (_super) {
        __extends$b(Blade, _super);
        // #endregion
        // #endregion
        // #region Constructors
        // mainService: MainService, 
        function Blade(path, title, subtitle, width) {
            if (path === void 0) { path = ''; }
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            var _this = _super.call(this) || this;
            _this.viewport = new Viewport();
            // bladeId: string = '';
            _this._bladeId = '';
            /**
             * HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
             * We don't know how to provide [this] to the directive.
             * So we came up with this [vm] property.
             */
            _this.vm = {};
            _this.visibility = 'collapse';
            _this.title = '';
            _this.subTitle = '';
            _this.width = '0';
            _this.widthStackLayout = { 'width': '50px' };
            _this.height = '0';
            _this.isInnerHtml = true;
            // #endregion
            // #region Commands
            _this.isCommandBrowse = false;
            _this.commandBrowse = (/**
             * @return {?}
             */
            function () { _this.onCommandBrowse(); });
            _this.commandBrowseText = '';
            _this.isCommandCancel = false;
            _this.commandCancel = (/**
             * @return {?}
             */
            function () { _this.onCommandCancel(); });
            _this.commandCancelText = '';
            _this.isCommandCopy = false;
            _this.isCommandCopyEnabled = true;
            _this.commandCopy = (/**
             * @return {?}
             */
            function () { _this.onCommandCopy(); });
            _this.commandCopyText = '';
            _this.isCommandDelete = false;
            _this.isCommandDeleteEnabled = true;
            _this.commandDelete = (/**
             * @return {?}
             */
            function () { _this.onCommandDelete(); });
            _this.commandDeleteText = '';
            _this.isCommandDocument = false;
            _this.commandDocument = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument(); });
            _this.commandDocumentText = '';
            _this.isCommandDocument2 = false;
            _this.commandDocument2 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument2(); });
            _this.commandDocument2Text = '';
            _this.isCommandDocument3 = false;
            _this.commandDocument3 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument3(); });
            _this.commandDocument3Text = '';
            _this.isCommandDocument4 = false;
            _this.commandDocument4 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument4(); });
            _this.commandDocument4Text = '';
            _this.isCommandDocument5 = false;
            _this.commandDocument5 = (/**
             * @return {?}
             */
            function () { _this.onCommandDocument5(); });
            _this.commandDocument5Text = '';
            _this.isCommandNew = false;
            _this.commandNew = (/**
             * @return {?}
             */
            function () { _this.onCommandNew(); });
            _this.commandNewText = '';
            _this.isCommandOrder = false;
            _this.commandOrder = (/**
             * @return {?}
             */
            function () { _this.onCommandOrder(); });
            _this.commandOrderText = '';
            _this.isCommandRestart = false;
            _this.commandRestart = (/**
             * @return {?}
             */
            function () { _this.onCommandRestart(); });
            _this.commandRestartText = '';
            _this.isCommandSave = false;
            _this.isCommandSaveEnabled = true;
            _this.commandSave = (/**
             * @return {?}
             */
            function () { _this.onCommandSave(); });
            _this.commandSaveText = '';
            _this.isCommandSearch = false;
            _this.commandSearch = (/**
             * @return {?}
             */
            function () { _this.onCommandSearch(); });
            _this.commandSearchText = '';
            _this.isCommandStart = false;
            _this.commandStart = (/**
             * @return {?}
             */
            function () { _this.onCommandStart(); });
            _this.commandStartText = '';
            _this.isCommandStop = false;
            _this.commandStop = (/**
             * @return {?}
             */
            function () { _this.onCommandStop(); });
            _this.commandStopText = '';
            _this.isCommandSwap = false;
            _this.commandSwap = (/**
             * @return {?}
             */
            function () { _this.onCommandSwap(); });
            _this.commandSwapText = '';
            _this.isCommandExcel = false;
            _this.commandExcel = (/**
             * @return {?}
             */
            function () { _this.onCommandExcel(); });
            _this.commandExcelText = '';
            _this.browserService = InjectorService.getInjector().get(BrowserService);
            _this.browserService.onResize.subscribe((/**
             * @param {?} viewport
             * @return {?}
             */
            function (viewport) { return _this.viewport = viewport; }));
            _this.vm = _this;
            _this.path = path;
            _this.title = title;
            _this.subTitle = subtitle;
            _this.width = width + 'px';
            _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
            //if (!mainService) { throw new Error('[Blade] constructor parameter \'mainService\' must be provided.'); }
            if (!path) {
                throw new Error('[Blade] constructor parameter \'path\' must be a string.');
            }
            if (!title && title !== '') {
                throw new Error('[Blade] constructor parameter \'title\' must be a string when provided.');
            }
            if (!subtitle && subtitle !== '') {
                throw new Error('[Blade] constructor parameter \'subtitle\' must be a string when provided.');
            }
            if (!width && width !== 0) {
                throw new Error('[Blade] constructor parameter \'width\' must be a number when provided.');
            }
            if (width < 50) {
                throw new Error('[Blade] constructor parameter \'width\' must be at least 50.');
            }
            // Set 'this.mainService.areaBlades.blades[index]' to 'this'
            //     'this.mainService.areaBlades.blades[index]' was generated during AddBlade
            //this.mainService.areaBlades.blades.forEach((blade, index) => {
            //    if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
            //        this.mainService.areaBlades.blades[index] = this;
            //    }
            //});
            //this.browserWindow.setupWindowResizeListener(() => { this.setBladeHeights(); });
            _this.setBladeHeights();
            return _this;
        }
        Object.defineProperty(Blade.prototype, "bladeId", {
            get: /**
             * @return {?}
             */
            function () {
                return this._bladeId;
            },
            set: /**
             * @param {?} bladeId
             * @return {?}
             */
            function (bladeId) {
                if (bladeId == null) {
                    return;
                }
                this._bladeId = bladeId.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Blade.prototype, "path", {
            get: /**
             * @return {?}
             */
            function () {
                return this._path;
            },
            // For the moment we do distinguish between lower and upper case path name
            set: 
            // For the moment we do distinguish between lower and upper case path name
            /**
             * @param {?} newPath
             * @return {?}
             */
            function (newPath) {
                if (newPath == null) {
                    return;
                }
                this._path = newPath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Angular Methods
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        Blade.prototype.ngOnInit = 
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        function () {
            console.log('ngOnInit');
        };
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @return {?}
         */
        Blade.prototype.activate = 
        // #endregion
        // #region Public Methods
        /**
         * @return {?}
         */
        function () {
            this.onActivate();
            this.onActivated();
        };
        /**
         * @param {?} path
         * @return {?}
         */
        Blade.prototype.navigateTo = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            this.onNavigateTo(path);
        };
        /** Must be overridden. */
        /**
         * Must be overridden.
         * @param {?} value
         * @return {?}
         */
        Blade.prototype.onNavigateTo = /**
         * Must be overridden.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        // At the moment we do not distinguish between lower and upper case path name
        // At the moment we do not distinguish between lower and upper case path name
        /**
         * @param {?} path1
         * @param {?} path2
         * @return {?}
         */
        Blade.prototype.comparePaths = 
        // At the moment we do not distinguish between lower and upper case path name
        /**
         * @param {?} path1
         * @param {?} path2
         * @return {?}
         */
        function (path1, path2) {
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
        /**
         * close blade.
         * @return {?}
         */
        Blade.prototype.close = /**
         * close blade.
         * @return {?}
         */
        function () {
            if (!this.onClose) {
                return; // do not close blade
            }
            //if (this.mainService.areaBlades !== undefined) {
            //    this.mainService.areaBlades.clearPath(this.path);
            //} else {
            //    throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.mainService.areaBlades\' available.');
            //}
        };
        /** Override */
        /**
         * Override
         * @return {?}
         */
        Blade.prototype.onClose = /**
         * Override
         * @return {?}
         */
        function () {
            return true;
        };
        ///** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
        //setTitle(watchExpression: string, func: () => void) {
        //    if (this.watcherTitle === undefined) {
        //        if (this.$scope !== null) {
        //            // angular1
        //            this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
        //            this.$scope.$on('$destroy', () => { this.watcherTitle(); });
        //        } else {
        //            // angular2
        //        }
        //    }
        //}
        // #region Commands
        ///** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
        //setTitle(watchExpression: string, func: () => void) {
        //    if (this.watcherTitle === undefined) {
        //        if (this.$scope !== null) {
        //            // angular1
        //            this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
        //            this.$scope.$on('$destroy', () => { this.watcherTitle(); });
        //        } else {
        //            // angular2
        //        }
        //    }
        //}
        // #region Commands
        /**
         * @return {?}
         */
        Blade.prototype.onCommandBrowse = 
        ///** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
        //setTitle(watchExpression: string, func: () => void) {
        //    if (this.watcherTitle === undefined) {
        //        if (this.$scope !== null) {
        //            // angular1
        //            this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
        //            this.$scope.$on('$destroy', () => { this.watcherTitle(); });
        //        } else {
        //            // angular2
        //        }
        //    }
        //}
        // #region Commands
        /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandCancel = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandCopy = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDelete = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument2 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument3 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument4 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandDocument5 = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandNew = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandOrder = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandRestart = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSave = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSearch = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandStart = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandStop = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandSwap = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        /**
         * @return {?}
         */
        Blade.prototype.onCommandExcel = /**
         * @return {?}
         */
        function () {
            throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
        };
        // #endregion
        // #endregion
        // #region Private Methods
        // #endregion
        // #endregion
        // #region Private Methods
        /**
         * @private
         * @return {?}
         */
        Blade.prototype.setBladeHeights = 
        // #endregion
        // #endregion
        // #region Private Methods
        /**
         * @private
         * @return {?}
         */
        function () {
            //this.bladeContentHeight = this.mainService.browserWindowService.browserWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
            this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
            // this.mainService.$timeout(() => {
            // }, 50);
        };
        return Blade;
    }(UserControlBase$1));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        Blade$1.prototype.browserService;
        /** @type {?} */
        Blade$1.prototype.viewport;
        /**
         * @type {?}
         * @private
         */
        Blade$1.prototype._bladeId;
        /**
         * HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         * @type {?}
         */
        Blade$1.prototype.vm;
        /** @type {?} */
        Blade$1.prototype.statusBar;
        /** @type {?} */
        Blade$1.prototype.visibility;
        /**
         * @type {?}
         * @private
         */
        Blade$1.prototype.watcherTitle;
        /** @type {?} */
        Blade$1.prototype.bladeContentHeight;
        /** @type {?} */
        Blade$1.prototype.bladeContentHeightInner;
        /** @type {?} */
        Blade$1.prototype.title;
        /** @type {?} */
        Blade$1.prototype.subTitle;
        /** @type {?} */
        Blade$1.prototype.width;
        /** @type {?} */
        Blade$1.prototype.widthStackLayout;
        /** @type {?} */
        Blade$1.prototype.height;
        /** @type {?} */
        Blade$1.prototype.isInnerHtml;
        /** @type {?} */
        Blade$1.prototype.formblade;
        /**
         * @type {?}
         * @private
         */
        Blade$1.prototype._path;
        /** @type {?} */
        Blade$1.prototype.isCommandBrowse;
        /** @type {?} */
        Blade$1.prototype.commandBrowse;
        /** @type {?} */
        Blade$1.prototype.commandBrowseText;
        /** @type {?} */
        Blade$1.prototype.isCommandCancel;
        /** @type {?} */
        Blade$1.prototype.commandCancel;
        /** @type {?} */
        Blade$1.prototype.commandCancelText;
        /** @type {?} */
        Blade$1.prototype.isCommandCopy;
        /** @type {?} */
        Blade$1.prototype.isCommandCopyEnabled;
        /** @type {?} */
        Blade$1.prototype.commandCopy;
        /** @type {?} */
        Blade$1.prototype.commandCopyText;
        /** @type {?} */
        Blade$1.prototype.isCommandDelete;
        /** @type {?} */
        Blade$1.prototype.isCommandDeleteEnabled;
        /** @type {?} */
        Blade$1.prototype.commandDelete;
        /** @type {?} */
        Blade$1.prototype.commandDeleteText;
        /** @type {?} */
        Blade$1.prototype.isCommandDocument;
        /** @type {?} */
        Blade$1.prototype.commandDocument;
        /** @type {?} */
        Blade$1.prototype.commandDocumentText;
        /** @type {?} */
        Blade$1.prototype.isCommandDocument2;
        /** @type {?} */
        Blade$1.prototype.commandDocument2;
        /** @type {?} */
        Blade$1.prototype.commandDocument2Text;
        /** @type {?} */
        Blade$1.prototype.isCommandDocument3;
        /** @type {?} */
        Blade$1.prototype.commandDocument3;
        /** @type {?} */
        Blade$1.prototype.commandDocument3Text;
        /** @type {?} */
        Blade$1.prototype.isCommandDocument4;
        /** @type {?} */
        Blade$1.prototype.commandDocument4;
        /** @type {?} */
        Blade$1.prototype.commandDocument4Text;
        /** @type {?} */
        Blade$1.prototype.isCommandDocument5;
        /** @type {?} */
        Blade$1.prototype.commandDocument5;
        /** @type {?} */
        Blade$1.prototype.commandDocument5Text;
        /** @type {?} */
        Blade$1.prototype.isCommandNew;
        /** @type {?} */
        Blade$1.prototype.commandNew;
        /** @type {?} */
        Blade$1.prototype.commandNewText;
        /** @type {?} */
        Blade$1.prototype.isCommandOrder;
        /** @type {?} */
        Blade$1.prototype.commandOrder;
        /** @type {?} */
        Blade$1.prototype.commandOrderText;
        /** @type {?} */
        Blade$1.prototype.isCommandRestart;
        /** @type {?} */
        Blade$1.prototype.commandRestart;
        /** @type {?} */
        Blade$1.prototype.commandRestartText;
        /** @type {?} */
        Blade$1.prototype.isCommandSave;
        /** @type {?} */
        Blade$1.prototype.isCommandSaveEnabled;
        /** @type {?} */
        Blade$1.prototype.commandSave;
        /** @type {?} */
        Blade$1.prototype.commandSaveText;
        /** @type {?} */
        Blade$1.prototype.isCommandSearch;
        /** @type {?} */
        Blade$1.prototype.commandSearch;
        /** @type {?} */
        Blade$1.prototype.commandSearchText;
        /** @type {?} */
        Blade$1.prototype.isCommandStart;
        /** @type {?} */
        Blade$1.prototype.commandStart;
        /** @type {?} */
        Blade$1.prototype.commandStartText;
        /** @type {?} */
        Blade$1.prototype.isCommandStop;
        /** @type {?} */
        Blade$1.prototype.commandStop;
        /** @type {?} */
        Blade$1.prototype.commandStopText;
        /** @type {?} */
        Blade$1.prototype.isCommandSwap;
        /** @type {?} */
        Blade$1.prototype.commandSwap;
        /** @type {?} */
        Blade$1.prototype.commandSwapText;
        /** @type {?} */
        Blade$1.prototype.isCommandExcel;
        /** @type {?} */
        Blade$1.prototype.commandExcel;
        /** @type {?} */
        Blade$1.prototype.commandExcelText;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Tile = /** @class */ (function () {
        // #endregion
        // #region Constructors
        // mainService: MainService, 
        function Tile(title, bladePath) {
            //this.mainService = mainService;
            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = TileSizes.normal;
        }
        Object.defineProperty(Tile.prototype, "bladePath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._bladePath;
            },
            // For the moment we do not distinguish between lower and upper case path name
            set: 
            // For the moment we do not distinguish between lower and upper case path name
            /**
             * @param {?} newBladePath
             * @return {?}
             */
            function (newBladePath) {
                this._bladePath = newBladePath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @return {?}
         */
        Tile.prototype.clicked = 
        // #endregion
        // #region Public Methods
        /**
         * @return {?}
         */
        function () {
            //this.mainService.areaBlades.setFirstBlade(this.bladePath);
        };
        return Tile;
    }());
    if (false) {
        /** @type {?} */
        Tile.prototype.title;
        /** @type {?} */
        Tile.prototype.subTitle;
        /** @type {?} */
        Tile.prototype.tileSize;
        /** @type {?} */
        Tile.prototype.size;
        /** @type {?} */
        Tile.prototype.left;
        /** @type {?} */
        Tile.prototype.top;
        /**
         * @type {?}
         * @private
         */
        Tile.prototype._bladePath;
    }

    var __extends$c = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AppboardEntry = /** @class */ (function (_super) {
        __extends$c(AppboardEntry, _super);
        // #region Properties
        //mainService: MainService
        // #endregion
        // #region Constructors
        function AppboardEntry(title, routerPath, subTitle, iconClass, iconColor) {
            if (subTitle === void 0) { subTitle = ''; }
            if (iconClass === void 0) { iconClass = ''; }
            if (iconColor === void 0) { iconColor = ''; }
            var _this = _super.call(this, title, routerPath) || this;
            _this.title = title;
            _this.routerPath = routerPath;
            _this.subTitle = subTitle;
            _this.iconClass = iconClass;
            _this.iconColor = iconColor;
            return _this;
        }
        return AppboardEntry;
    }(Tile));
    if (false) {
        /** @type {?} */
        AppboardEntry.prototype.title;
        /** @type {?} */
        AppboardEntry.prototype.routerPath;
        /** @type {?} */
        AppboardEntry.prototype.subTitle;
        /** @type {?} */
        AppboardEntry.prototype.iconClass;
        /** @type {?} */
        AppboardEntry.prototype.iconColor;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarEntry = /** @class */ (function () {
        // #region Properties
        // #endregion
        // #region Constructors
        function SidebarEntry(title, routerPath, iconClass) {
            if (iconClass === void 0) { iconClass = null; }
            this.title = title;
            this.routerPath = routerPath;
            this.iconClass = iconClass;
        }
        return SidebarEntry;
    }());
    if (false) {
        /** @type {?} */
        SidebarEntry.prototype.title;
        /** @type {?} */
        SidebarEntry.prototype.routerPath;
        /** @type {?} */
        SidebarEntry.prototype.iconClass;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Tile$1 = /** @class */ (function () {
        // #region Constructor
        function Tile(title, bladePath, portalService) {
            this.portalService = portalService;
            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = TileSizes$1.normal;
        }
        Object.defineProperty(Tile.prototype, "bladePath", {
            // #region bladePath
            get: 
            // #region bladePath
            /**
             * @return {?}
             */
            function () {
                return this._bladePath;
            },
            // For the moment we do not distinguish between lower and upper case path name
            set: 
            // For the moment we do not distinguish between lower and upper case path name
            /**
             * @param {?} newBladePath
             * @return {?}
             */
            function (newBladePath) {
                this._bladePath = newBladePath.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Methods
        // top position (CSS) - during refactoring, rename to top
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        Tile.prototype.clicked = 
        // top position (CSS) - during refactoring, rename to top
        // #endregion
        // #region Methods
        /**
         * @return {?}
         */
        function () {
            this.portalService.areaBlades.setFirstBlade(this.bladePath);
            this.portalService.appService.bladeService.navigateTo(this.bladePath);
        };
        return Tile;
    }());
    if (false) {
        /** @type {?} */
        Tile$1.prototype.portalService;
        /** @type {?} */
        Tile$1.prototype.title;
        /** @type {?} */
        Tile$1.prototype.subTitle;
        /**
         * @type {?}
         * @private
         */
        Tile$1.prototype._bladePath;
        /** @type {?} */
        Tile$1.prototype.tileSize;
        /** @type {?} */
        Tile$1.prototype.size;
        /** @type {?} */
        Tile$1.prototype.left;
        /** @type {?} */
        Tile$1.prototype.top;
        /** @type {?} */
        Tile$1.prototype.leftN;
        /** @type {?} */
        Tile$1.prototype.topN;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DinoThemes() { }
    /**
     * @record
     */
    function DinoTheme() { }
    if (false) {
        /* Skipping unnamed member:
        '--topbar-color': string;*/
        /* Skipping unnamed member:
        '--topbar-background-color': string;*/
        /* Skipping unnamed member:
        '--topbar-home-color': string;*/
        /* Skipping unnamed member:
        '--blade-statusbar-background-color': string;*/
        /* Skipping unnamed member:
        '--blade-commands-background-color': string;*/
    }
    var AppComponent = /** @class */ (function () {
        function AppComponent(appService, router) {
            this.appService = appService;
            this.router = router;
            this.themeProps = [
                'color-main',
                'color-main-darken',
                'color-main-darken2',
                'color-main-lighten',
                'color-accent',
            ];
            this.themes = {
                'black': {
                    '--topbar-color': '#fff',
                    '--topbar-background-color': '#1c1c1c',
                    '--topbar-home-color': '#fff',
                    '--blade-statusbar-background-color': '#293644',
                    '--blade-commands-background-color': '#3e4045',
                },
                'white': {
                    '--topbar-color': '#1c1c1c',
                    '--topbar-background-color': '#efefef',
                    '--topbar-home-color': '#1c1c1c',
                    '--blade-statusbar-background-color': '#dcdcdc',
                    '--blade-commands-background-color': '#c7c7c7',
                }
            };
            this.selectedTheme = this.themes['black'];
            this.portalService = new PortalService();
            this.portalService.appService = this.appService;
            this.portalService.areaNotification = new AreaNotification(this.portalService);
            this.portalService.areaBlades = new AreaBlades(this.portalService);
            this.appService.portalService = this.portalService;
        }
        /**
         * @return {?}
         */
        AppComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { _this.appService.appConfigService.appConfig.isShowSplashScreen = false; }), 500);
            // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
            //                     refactor this.portalService.panorama.startboard.tiles
            //                       to use this.appService.appConfigService.appConfig.appboard
            this.appService.appConfigService.appConfig.appboard.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new Tile$1(item.title, item.routerPath, _this.portalService));
                tile.subTitle = item.subTitle;
            }));
        };
        /**
         * @param {?} themeIndex
         * @return {?}
         */
        AppComponent.prototype.setTheme = /**
         * @param {?} themeIndex
         * @return {?}
         */
        function (themeIndex) {
            this.selectedTheme = this.themes[themeIndex];
        };
        AppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'angular-portal-azure',
                        template: "<div class=\"fxs-portal fxs-theme-blue\">\r\n  <!-- TOOLBAR -->\r\n  <div class=\"fxs-topbar container-fluid row\">\r\n    <div class=\"col-6\" style=\"padding-left: 25px;\">\r\n      <a [routerLink]=\"['/appboard']\" class=\"fxs-topbar-home fxs-has-hover\">{{portalService.panorama.title}}</a>\r\n    </div>\r\n    <div class=\"col-6 fxs-avatarmenu-tenant-container\" style=\"padding-right:10px;\">\r\n      <a class=\"fxs-has-hover\" href=\"/Account/Manage\">\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.name}}</span><br />\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.userName}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"apa-portal-scroll\" class=\"fxs-portal-content fxs-panorama\" style=\"height:calc(100% - 40px)\">\r\n    <!-- PRIMARY ROUTER OUTLET -->\r\n    <!-- E.G.: APPBOARD -->\r\n    <router-outlet></router-outlet>\r\n    <!-- BLADES -->\r\n    <div id=\"apa-blade-area\" class=\"fxs-journey-target fxs-journey\">\r\n      <div class=\"fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal\">\r\n        <!-- track by $index -->\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\" class=\"azureportalblade fxs-stacklayout-child\" ng-include=\"blade.path\"></div>-->\r\n        <!--<router-outlet [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet>-->\r\n        <router-outlet-named [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet-named>\r\n      </div>\r\n    </div>\r\n    <!-- NOTIFICATION AREA -->\r\n    <div id=\"apa-notification-area\" style=\"display: none;\">\r\n      <div style=\"height:40px;background-color:#202428\"></div>\r\n      <button ng-if=\"!portalService.areaNotification.path\" (click)=\"portalService.areaNotification.hide();\">Schliessen</button>\r\n      <div ng-include=\"portalService.areaNotification.path\"></div>\r\n    </div>\r\n  </div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AppComponent.ctorParameters = function () { return [
            { type: AppService },
            { type: router.Router }
        ]; };
        return AppComponent;
    }());
    if (false) {
        /** @type {?} */
        AppComponent.prototype.themeProps;
        /** @type {?} */
        AppComponent.prototype.themes;
        /** @type {?} */
        AppComponent.prototype.portalService;
        /** @type {?} */
        AppComponent.prototype.selectedTheme;
        /** @type {?} */
        AppComponent.prototype.appService;
        /**
         * @type {?}
         * @private
         */
        AppComponent.prototype.router;
    }

    var __extends$d = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var BladeComponent = /** @class */ (function (_super) {
        __extends$d(BladeComponent, _super);
        function BladeComponent(portalService) {
            return _super.call(this, portalService, 'blade1', '', '', 500) || this;
        }
        /**
         * @return {?}
         */
        BladeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BladeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'apa-blade',
                        template: "<section data-ng-form=\"formblade\" class=\"fxs-blade-locked fxs-blade fx-rightClick fxs-bladesize-small\" [ngStyle]=\"width\" style=\"height:100%;display:inline-block\">\r\n  <header class=\"fxs-blade-header\">\r\n    <div class=\"fxs-blade-statusbar-wrapper\">\r\n      <div class=\"fxs-blade-statusbar\" [ngClass]=\"statusBarClass\">\r\n        <span><!--{{statusBar}}--></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"fxs-blade-actions\">\r\n      <button [hidden]=\"!isMaximize\" title=\"Maximize\" class=\"fxs-blade-maximizeOrRestore\" type=\"button\">\r\n        <svg class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 20 20\">\r\n          <path class=\"msportalfx-svg-c01\" d=\"M 3 4 v 12 h 14 V 4 H 3 Z M 5 14 V 6 h 10 v 8 H 5 Z\" />\r\n        </svg>\r\n      </button>\r\n      <button (click)=\"close();\" title=\"Schliessen\" class=\"fxs-blade-close\" type=\"button\">\r\n        <svg class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 20 20\">\r\n          <polygon class=\"msportalfx-svg-c01\" points=\"16.894,5.414 15.48,4 10.436,9.044 5.414,4.023 4,5.437 9.022,10.458 4.022,15.458 5.436,16.872 10.436,11.872 15.458,16.894 16.872,15.48 11.85,10.458\" />\r\n        </svg>\r\n      </button>\r\n    </div>\r\n    <div class=\"fxs-blade-title\">\r\n      <div class=\"fxs-blade-title-text-container\">\r\n        <h2 class=\"fxs-pannable fxs-blade-title-titleText msportalfx-tooltip-overflow\"><!--{{title}}--></h2>\r\n        <h3 class=\"fxs-pannable msportalfx-tooltip-overflow\"><!--{{subTitle}}--></h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"fxs-blade-commandBarContainer\">\r\n      <div class=\"fxs-commandBar fxs-commandBar-active\">\r\n        <ul class=\"fxs-commandBar-itemList fxs-commandBar-itemList-canExpand\">\r\n          <!-- SHOW MORE COMMANDS -->\r\n          <li [hidden]=\"!isCommandMore\" class=\"fxs-commandBar-item-expandListContainer\">\r\n            <a title=\"Fewer\" class=\"fxs-commandBar-item fxs-commandBar-item-expandList\" href=\"\" data-bind=\"click: func._ellipsisCommandHandler, attr: { title: data.ellipsisCommandText }\"></a>\r\n          </li>\r\n          <!-- SERACH -->\r\n          <li [hidden]=\"!isCommandSearch\" [ngClass]=\"{'apa-disable-click': !isCommandSearchEnabled}\">\r\n            <a (click)=\"commandSearch()\" class=\"fxs-commandBar-item\" href=\"#\"\r\n               data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandSearchText || 'suchen'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\">\r\n                  <g>\r\n                    <path d=\"M384,192C384,85.969,298.031,0,192,0S0,85.969,0,192s85.969,192,192,192S384,298.031,384,192z M192,336 c-79.406,0-144-64.594-144-144S112.594,48,192,48s144,64.594,144,144S271.406,336,192,336z\" />\r\n                    <path d=\"M497.938,430.063L380.469,312.594c-17.5,27.219-40.656,50.375-67.875,67.875l117.469,117.469 c18.75,18.75,49.156,18.75,67.875,0C516.688,479.219,516.688,448.813,497.938,430.063z\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- ORDER -->\r\n          <li [hidden]=\"!isCommandOrder\" [ngClass]=\"{'apa-disable-click': !isCommandOrderEnabled}\">\r\n            <a (click)=\"commandOrder()\" class=\"fxs-commandBar-item\" href=\"#\"\r\n               data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandOrderText  || 'bestellen'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 30.512 24.717\" focusable=\"false\">\r\n                  <path d=\"M26.818,16.14l3.607-10.796c0.181-0.519,0.044-0.831-0.102-1.037c-0.374-0.527-1.143-0.532-1.292-0.532L8.646,3.771\tL8.102,1.19C7.955,0.581,7.521,0,6.646,0H0.917C0.323,0,0,0.278,0,0.833v1.49C0,2.86,0.322,3,0.938,3h4.837l3.702,15.717\tc-0.588,0.623-0.908,1.531-0.908,2.378c0,1.864,1.484,3.582,3.38,3.582c1.79,0,3.132-1.677,3.35-2.677h7.21\tc0.218,1,1.305,2.717,3.349,2.717c1.863,0,3.378-1.614,3.378-3.475c0-1.851-1.125-3.492-3.359-3.492c-0.929,0-2.031,0.5-2.543,1.25\th-8.859c-0.643-1-1.521-1.31-2.409-1.345L11.943,17h13.479C26.438,17,26.638,16.63,26.818,16.14z M25.883,19.931\tc0.701,0,1.27,0.569,1.27,1.27c0,0.701-0.569,1.27-1.27,1.27s-1.271-0.568-1.271-1.27C24.613,20.5,25.182,19.931,25.883,19.931z\t M13.205,21.201c0,0.709-0.576,1.286-1.283,1.286c-0.709-0.002-1.286-0.577-1.286-1.286s0.577-1.286,1.286-1.286\tC12.629,19.915,13.205,20.492,13.205,21.201z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- NEW -->\r\n          <li [hidden]=\"!isCommandNew\" [ngClass]=\"{'apa-disable-click': !isCommandNewEnabled}\">\r\n            <a (click)=\"commandNew()\" class=\"fxs-commandBar-item\" href=\"#\"\r\n               data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandNewText  || 'neu'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"> <g> <g> <polygon points=\"14,21 9,21 9,2 14,2 14,20.87\" /> </g> <g> <polygon points=\"20.87,14 2,14 2,9 21,9 21,14\" /> </g> </g> </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- COPY -->\r\n          <li [hidden]=\"!isCommandCopy\" [ngClass]=\"{'apa-disable-click': !isCommandCopyEnabled}\">\r\n            <a (click)=\"commandCopy()\" class=\"fxs-commandBar-item\" href=\"#\"\r\n               data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandCopyText  || 'kopieren'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\">\r\n                  <path d=\"M320,128V0H96L0,96v288h192v128h320V128H320z M96,45.255V96H45.255L96,45.255z M32,352V128h96V32h160v96l-96,96v128H32z M288,173.255V224h-50.745L288,173.255z M480,480H224V256h96v-96h160V480z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- SAVE -->\r\n          <li [hidden]=\"!isCommandSave\" [ngClass]=\"{'apa-disable-click': !isCommandSaveEnabled}\">\r\n            <a (click)=\"commandSave()\" class=\"fxs-commandBar-item\" href=\"#\"\r\n               data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandSaveText  || 'speichern'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\">\r\n                  <g>\r\n                    <path d=\"M18.009,0H0v21.002h21V2.993L18.009,0z M17.848,10.284H5.13V1.191h12.718V10.284z\" />\r\n                    <rect x=\"12.635\" y=\"2.165\" width=\"3.742\" height=\"7.144\" />\r\n                  </g>\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- DELETE -->\r\n          <li [hidden]=\"!isCommandDelete\" [ngClass]=\"{'apa-disable-click': !isCommandDeleteEnabled}\">\r\n            <a (click)=\"commandDelete()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDeleteText  || 'l\u00C3\u0192\u00C2\u00B6schen'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\">\r\n                  <!--<path d=\"M 19.846 6.5 H 5.154 C 4.601 6.5 4.5 6.27 4.5 6 s 0.101 -1.5 0.654 -1.5 h 14.692 C 20.399 4.5 20.5 5.73 20.5 6 S 20.399 6.5 19.846 6.5 Z\" />\r\n                  <path d=\"M 14.33 3.5 h -0.011 h -3.723 c -0.402 0 -0.597 -0.13 -0.597 -0.5 c 0.011 -0.36 0.149 -0.5 0.597 -0.5 h 3.686 c 0.402 0 0.717 0.14 0.717 0.5 c 0 0.37 -0.256 0.5 -0.646 0.5 H 14.33 Z\" />\r\n                  <path d=\"M 5.5 7.5 v 14 c 0.04 0.82 3.537 1 4.337 1 h 5.862 c 0.8 0 3.761 -0.18 3.801 -1 v -14 H 5.5 Z M 9.542 19.167 c 0.01 0.36 -0.27 0.68 -0.62 0.69 h -0.73 c -0.35 0 -0.63 -0.28 -0.65 -0.65 v -9.37 c -0.01 -0.37 0.542 -0.726 1.023 -0.726 c 0.34 0 0.967 0.316 0.977 0.676 V 19.167 Z M 13.5 19.156 c -0.01 0.36 -0.3 0.64 -0.64 0.64 h -0.74 c -0.35 -0.01 -0.63 -0.33 -0.62 -0.7 v -9.37 c 0.02 -0.37 0.642 -0.655 1.002 -0.635 S 13.51 9.416 13.5 9.786 V 19.156 Z M 17.396 19.151 c -0.01 0.36 -0.3 0.64 -0.64 0.64 h -0.74 c -0.35 -0.01 -0.63 -0.33 -0.62 -0.7 v -9.37 c 0.02 -0.37 0.642 -0.654 1.002 -0.635 c 0.36 0.02 1.008 0.325 0.998 0.695 V 19.151 Z\" />-->\r\n                  <path d=\"M96,512h320l32-352H64L96,512z M320,64V0H192v64H32v96l32-32h384l32,32V64H320z M288,64h-64V32h64V64z\" />\r\n                </svg>\r\n\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- BROWSE -->\r\n          <li [hidden]=\"!isCommandBrowse\" [ngClass]=\"{'apa-disable-click': !isCommandBrowseEnabled}\">\r\n            <a (click)=\"commandBrowse()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandBrowseText  || 'Browse'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"> <g> <polygon clip-rule=\"evenodd\" fill-rule=\"evenodd\" points=\"14.607,2.04 17.727,4.61 8.557,13.31 11.377,16.12 19.987,6.96 22.507,9.48 22.507,2.04\" /> <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M 19.507 19.04 h -15 v -14 h 7 v -3 h -7.92 c -1.66 0 -2.09 1.77 -2.08 1.75 c -0.02 -0.74 0.01 11.45 0.02 16.17 c 0 1.09 2.05 2.08 2 2.08 c 0.68 -0.05 12.88 -0.02 17.36 -0.01 c 1 0.01 1.6 -1.46 1.62 -1.4 c -0.02 0.93 0 -6.59 0 -6.59 h -3 V 19.04 Z\" /> </g> </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- START -->\r\n          <li [hidden]=\"!isCommandStart\" [ngClass]=\"{'apa-disable-click': !isCommandStartEnabled}\">\r\n            <a (click)=\"commandStart()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandStartText  || 'Start'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"> <g> <polygon points=\"20,11.95 6,22 6,2\" /> </g> </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- STOP -->\r\n          <li [hidden]=\"!isCommandStop\" [ngClass]=\"{'apa-disable-click': !isCommandStopEnabled}\">\r\n            <a (click)=\"commandStop()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandStopText  || 'Stop'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"> <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" /> </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- RESTART -->\r\n          <li [hidden]=\"!isCommandRestart\" [ngClass]=\"{'apa-disable-click': !isCommandRestartEnabled}\">\r\n            <a (click)=\"commandRestart()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandRestartText  || 'Restart'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"> <g> <g> <polygon points=\"3.25,2 11.94,2 11.94,10.17\" /> <path d=\"M 12.6 22 C 7.32 21.91 3 17.53 3 12.19 c 0 -3.12 1.49 -5.86 3.78 -7.58 l 2.08 2.08 c -1.8 1.18 -2.98 3.22 -2.98 5.55 c 0 3.74 3.02 6.81 6.71 6.87 c 3.71 0.06 6.7 -2.9 6.7 -6.63 c 0 -2.37 -1.22 -4.48 -3.06 -5.71 l 2.04 -2.06 c 2.36 1.8 3.73 4.7 3.73 7.88 C 22 17.92 17.9 22.09 12.6 22 Z\" /> </g> </g> </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- SWAP -->\r\n          <li [hidden]=\"!isCommandSwap\" [ngClass]=\"{'apa-disable-click': !isCommandSwapEnabled}\">\r\n            <a (click)=\"commandSwap()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandSwapText  || 'Swap'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 24 24\" focusable=\"false\"><polygon points=\"14.047,4.976 8.075,9.769 12.968,10.134 10.7,11.963 4.142,11.488 5.011,4.958 7.279,3.129 6.63,8.004 12.657,2.855 13.663,4.336\" /><polygon points=\"19.927,19.097 17.806,20.715 18.318,16.061 12.026,21.145 10.59,19.38 16.873,14.295 11.98,13.93 14.248,12.101 20.604,12.32\" /></svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- CANCEL -->\r\n          <li [hidden]=\"!isCommandCancel\" [ngClass]=\"{'apa-disable-click': !isCommandCancelEnabled}\">\r\n            <a (click)=\"commandCancel()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandCancelText  || 'abbrechen'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 20 20\"><polygon points=\"16.894,5.414 15.48,4 10.436,9.044 5.414,4.023 4,5.437 9.022,10.458 4.022,15.458 5.436,16.872 10.436,11.872 15.458,16.894 16.872,15.48 11.85,10.458\" /></svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- EXCEL -->\r\n          <li [hidden]=\"!isCommandExcel\" [ngClass]=\"{'apa-disable-click': !isCommandExcelEnabled}\">\r\n            <a (click)=\"commandExcel()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandExcelText  || 'Export Excel'}}--></div>\r\n              <div class=\"apa-commandbar-icon\">\r\n                <i class=\"fa fa-file-excel\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- DOCUMENT -->\r\n          <li [hidden]=\"!isCommandDocument\" [ngClass]=\"{'apa-disable-click': !isCommandDocumentEnabled}\">\r\n            <a (click)=\"commandDocument()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDocumentText  || 'Dokument'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 100 100\" focusable=\"false\">\r\n                  <path d=\"M65.164,11.126H26.033c-2.627,0-4.767,2.141-4.767,4.768v68.213c0,2.63,2.14,4.768,4.767,4.768h47.932\tc2.63,0,4.768-2.138,4.768-4.768V25.869L65.164,11.126z M66.289,18.261l5.948,6.463h-5.948V18.261z M74.729,84.106 c0,0.421-0.344,0.765-0.765,0.765H26.033c-0.421,0-0.763-0.344-0.763-0.765V15.894c0-0.421,0.342-0.762,0.763-0.762h36.251v11.595 c0,1.104,0.899,1.999,2.003,1.999h10.442V84.106z M32.333,32.421h34c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-34\tc-0.828,0-1.5-0.672-1.5-1.5S31.505,32.421,32.333,32.421z M67.833,44.001c0,0.828-0.672,1.5-1.5,1.5h-34 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,42.501,67.833,43.173,67.833,44.001z M67.833,53.751 c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,52.251,67.833,52.923,67.833,53.751z M67.833,63.667c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34 C67.161,62.167,67.833,62.839,67.833,63.667z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- DOCUMENT2 -->\r\n          <li [hidden]=\"!isCommandDocument2\" [ngClass]=\"{'apa-disable-click': !isCommandDocument2Enabled}\">\r\n            <a (click)=\"commandDocument2()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDocument2Text  || 'Dokument'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 100 100\" focusable=\"false\">\r\n                  <path d=\"M65.164,11.126H26.033c-2.627,0-4.767,2.141-4.767,4.768v68.213c0,2.63,2.14,4.768,4.767,4.768h47.932\tc2.63,0,4.768-2.138,4.768-4.768V25.869L65.164,11.126z M66.289,18.261l5.948,6.463h-5.948V18.261z M74.729,84.106 c0,0.421-0.344,0.765-0.765,0.765H26.033c-0.421,0-0.763-0.344-0.763-0.765V15.894c0-0.421,0.342-0.762,0.763-0.762h36.251v11.595 c0,1.104,0.899,1.999,2.003,1.999h10.442V84.106z M32.333,32.421h34c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-34\tc-0.828,0-1.5-0.672-1.5-1.5S31.505,32.421,32.333,32.421z M67.833,44.001c0,0.828-0.672,1.5-1.5,1.5h-34 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,42.501,67.833,43.173,67.833,44.001z M67.833,53.751 c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,52.251,67.833,52.923,67.833,53.751z M67.833,63.667c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34 C67.161,62.167,67.833,62.839,67.833,63.667z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- DOCUMENT3 -->\r\n          <li [hidden]=\"!isCommandDocument3\" [ngClass]=\"{'apa-disable-click': !isCommandDocument3Enabled}\">\r\n            <a (click)=\"commandDocument3()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDocument3Text  || 'Dokument'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 100 100\" focusable=\"false\">\r\n                  <path d=\"M65.164,11.126H26.033c-2.627,0-4.767,2.141-4.767,4.768v68.213c0,2.63,2.14,4.768,4.767,4.768h47.932\tc2.63,0,4.768-2.138,4.768-4.768V25.869L65.164,11.126z M66.289,18.261l5.948,6.463h-5.948V18.261z M74.729,84.106 c0,0.421-0.344,0.765-0.765,0.765H26.033c-0.421,0-0.763-0.344-0.763-0.765V15.894c0-0.421,0.342-0.762,0.763-0.762h36.251v11.595 c0,1.104,0.899,1.999,2.003,1.999h10.442V84.106z M32.333,32.421h34c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-34\tc-0.828,0-1.5-0.672-1.5-1.5S31.505,32.421,32.333,32.421z M67.833,44.001c0,0.828-0.672,1.5-1.5,1.5h-34 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,42.501,67.833,43.173,67.833,44.001z M67.833,53.751 c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,52.251,67.833,52.923,67.833,53.751z M67.833,63.667c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34 C67.161,62.167,67.833,62.839,67.833,63.667z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- DOCUMENT4 -->\r\n          <li [hidden]=\"!isCommandDocument4\" [ngClass]=\"{'apa-disable-click': !isCommandDocument4Enabled}\">\r\n            <a (click)=\"commandDocument4()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDocument4Text  || 'Dokument'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 100 100\" focusable=\"false\">\r\n                  <path d=\"M65.164,11.126H26.033c-2.627,0-4.767,2.141-4.767,4.768v68.213c0,2.63,2.14,4.768,4.767,4.768h47.932\tc2.63,0,4.768-2.138,4.768-4.768V25.869L65.164,11.126z M66.289,18.261l5.948,6.463h-5.948V18.261z M74.729,84.106 c0,0.421-0.344,0.765-0.765,0.765H26.033c-0.421,0-0.763-0.344-0.763-0.765V15.894c0-0.421,0.342-0.762,0.763-0.762h36.251v11.595 c0,1.104,0.899,1.999,2.003,1.999h10.442V84.106z M32.333,32.421h34c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-34\tc-0.828,0-1.5-0.672-1.5-1.5S31.505,32.421,32.333,32.421z M67.833,44.001c0,0.828-0.672,1.5-1.5,1.5h-34 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,42.501,67.833,43.173,67.833,44.001z M67.833,53.751 c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,52.251,67.833,52.923,67.833,53.751z M67.833,63.667c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34 C67.161,62.167,67.833,62.839,67.833,63.667z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <!-- Document5 -->\r\n          <li [hidden]=\"!isCommandDocument5\" [ngClass]=\"{'apa-disable-click': !isCommandDocument5Enabled}\">\r\n            <a (click)=\"commandDocument5()\" class=\"fxs-commandBar-item\" href=\"#\" data-bind='css: { \"fxs-commandBar-itemDisabled\": !enabled(), \"fxs-commandBar-itemPressed\": pressed() }, attr: { href: enabled() ? \"#\" : null }'>\r\n              <div class=\"fxs-commandBar-item-text\" data-bind=\"text: text()\"><!--{{commandDocument5Text  || 'Dokument'}}--></div>\r\n              <div class=\"fxs-commandBar-item-icon\" data-bind=\"image: icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 100 100\" focusable=\"false\">\r\n                  <path d=\"M65.164,11.126H26.033c-2.627,0-4.767,2.141-4.767,4.768v68.213c0,2.63,2.14,4.768,4.767,4.768h47.932\tc2.63,0,4.768-2.138,4.768-4.768V25.869L65.164,11.126z M66.289,18.261l5.948,6.463h-5.948V18.261z M74.729,84.106 c0,0.421-0.344,0.765-0.765,0.765H26.033c-0.421,0-0.763-0.344-0.763-0.765V15.894c0-0.421,0.342-0.762,0.763-0.762h36.251v11.595 c0,1.104,0.899,1.999,2.003,1.999h10.442V84.106z M32.333,32.421h34c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-34\tc-0.828,0-1.5-0.672-1.5-1.5S31.505,32.421,32.333,32.421z M67.833,44.001c0,0.828-0.672,1.5-1.5,1.5h-34 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,42.501,67.833,43.173,67.833,44.001z M67.833,53.751 c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34C67.161,52.251,67.833,52.923,67.833,53.751z M67.833,63.667c0,0.828-0.672,1.5-1.5,1.5h-34c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h34 C67.161,62.167,67.833,62.839,67.833,63.667z\" />\r\n                </svg>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"fxs-blade-content fxs-pannable\" [ngStyle]=\"{'height': bladeContentHeight}\">\r\n    <div class=\"fxs-blade-stacklayout fxs-stacklayout fxs-stacklayout-vertical\" [ngStyle]=\"widthStackLayout\">\r\n      <div class=\"fxs-stacklayout-child\">\r\n        <div class=\"fxs-lens\">\r\n          <h2 class=\"fxs-lens-title\"></h2>\r\n          <div class=\"fxs-lens-layout\">\r\n            <section class=\"fxs-tile fxs-tilesize-fullwidthfitheight fx-rightClik\">\r\n              <div class=\"fxs-part\">\r\n                <!--<header class=\"fxs-part-title\">\r\n                    <h2 class=\"msportalfx-tooltip-overflow\">{{contentTitle}}</h2>\r\n                    <h3 class=\"msportalfx-tooltip-overflow\">{{contentSubTitle}}</h3>\r\n                </header>-->\r\n                <section class=\"fxs-part-content css-scope-HubsExtension\">\r\n                  <div tabindex=\"0\" class=\"fxcontrol-base azc-control azc-theme-frost azc-grid-focusableRow azc-grid-selectableRow azc-grid-activateableRow azc-grid-rightClickableRow azc-grid azc-grid-headerHidden Formatter FormatterHtmlBindings Focusable Selectable RightClickableRow\" data-bind=\"pcGrid: $root\" data-control=\"true\">\r\n                    <!--<div class=\"azc-grid-container\">-->\r\n                    <!-- neutral -->\r\n                    <div *ngIf=\"isInnerHtml\">\r\n                      <ng-content></ng-content>\r\n                    </div>\r\n\r\n                    <!-- nav -->\r\n                    <apa-nav *ngIf=\"isNav\" vm=\"vm\"></apa-nav>\r\n\r\n                    <!-- grid -->\r\n                    <apa-grid *ngIf=\"isGrid\" vm=\"vm\"></apa-grid>\r\n\r\n                    <!--</div>-->\r\n                  </div>\r\n                </section>\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"fxs-blade-maximized-content\"></div>\r\n  </div>\r\n  <div class=\"fxs-blade-actionBar\"></div>\r\n</section>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BladeComponent.ctorParameters = function () { return [
            { type: PortalService }
        ]; };
        return BladeComponent;
    }(Blade));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridComponent = /** @class */ (function () {
        function GridComponent() {
        }
        /**
         * @return {?}
         */
        GridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        GridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'apa-grid',
                        template: "<table class=\"azc-grid-full azc-grid-multiselectable\">\r\n  <caption data-bind=\"text: data.summary\"></caption>\r\n  <colgroup>\r\n    <col class=\"col0\" style=\"width: 41px;\">\r\n    <col class=\"col1\">\r\n  </colgroup>\r\n  <tbody class=\"azc-grid-groupdata\" role=\"rowgroup\">\r\n    <tr data-ng-repeat=\"<!--item in $ctrl.vm.items track by $index-->\" data-ng-click=\"<!--$ctrl.vm.navigateTo(item.bladePath);-->\" role=\"row\" aria-selected=\"false\" data-grid-row-activated=\"false\" data-grid-selectable=\"true\" data-grid-focusable=\"true\" data-grid-activateable=\"true\" ng-show=\"<!--item.isVisible-->\" style=\"cursor:pointer\" ng-style=\"<!--item.style-->\">\r\n      <td class=\"msportalfx-gridcolumn-asseticon\" role=\"gridcell\" data-grid-cell-activated=\"false\">\r\n        <div class=\"azc-vivaControl\" data-bind='vivaControl: \"DEB28B4C-518F-4F70-A817-BF9277606CAB\"'>\r\n          <div data-bind=\"image: value\">\r\n            <svg data-ng-show=\"item.title\" xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 50 50\" focusable=\"false\">\r\n              <rect class=\"msportalfx-svg-c04\" x=\"19.8\" y=\"39.4\" width=\"10.6\" height=\"3.4\" />\r\n              <polygon class=\"msportalfx-svg-c04\" points=\"23.1,50 27,50 30.3,46.5 19.8,46.5\" />\r\n              <path class=\"msportalfx-svg-c20\" d=\"M 41.2 14.7 L 41.2 14.7 v -0.3 c 0 -7.7 -6.6 -14.1 -14.7 -14.2 c -0.2 -0.3 -4.8 0.1 -4.8 0.1 l 0 0 c -7.3 0.9 -13 7 -13 14.1 c 0 0.2 -0.8 5.8 4.9 10.5 c 2.6 2.3 5.3 8.5 5.7 10.3 l 0.3 0.6 h 10.6 l 0.3 -0.6 c 0.4 -1.8 3.2 -8 5.7 -10.2 C 41.9 20.2 41.2 14.9 41.2 14.7 Z\" />\r\n              <path class=\"msportalfx-svg-c01\" d=\"M 30.4 18.1 l -1.7 10.6 h -2 V 18.2 l 0.1 -0.2 c 3.8 0 3.3 -3.5 3.3 -3.5 H 19.8 v 0.3 c 0 0.8 0.3 3.3 3.5 3.3 v 10.6 h -2 l -0.5 -2.5 l -1.3 -8.1 c -2.3 0 -3 -1.5 -3.3 -2.6 c 0 -0.4 0 -0.9 0 -1.4 c 0 -2.8 3.2 -3.1 3.2 -3.1 h 11 c 0 0 3.5 0.4 3.5 3.5 C 33.8 14.5 33.9 18.1 30.4 18.1 Z\" />\r\n              <path class=\"msportalfx-svg-c01\" opacity=\"0.15\" enable-background=\"new \" d=\"M 41.2 16.4 c 0.1 -1 0 -1.7 0 -1.8 l 0 0 v -0.3 c 0 -7.7 -6.6 -14.1 -14.7 -14.2 c -0.2 -0.3 -4.8 0.1 -4.8 0.1 l 0 0 c -7.3 0.9 -13 7 -13 14.1 c 0 0.1 -0.1 0.9 0 2.1 H 41.2 Z\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </td>\r\n      <td tabindex=\"0\" role=\"gridcell\" data-activatable=\"true\" data-grid-cell-activated=\"false\">\r\n        <a href=\"<!--item.hrefPath-->\" target=\"_blank\" style=\"color:black\"><!--{{item.title}}--></a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GridComponent.ctorParameters = function () { return []; };
        return GridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavComponent = /** @class */ (function () {
        function NavComponent() {
        }
        /**
         * @return {?}
         */
        NavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'apa-nav',
                        template: "<div>\r\n  <table class=\"azc-grid-full azc-grid-multiselectable\" ng-if=\"!$ctrl.vm.isInnerHtml\">\r\n    <caption data-bind=\"text: data.summary\"></caption>\r\n    <colgroup>\r\n      <col class=\"col0\" style=\"width: 25px;\">\r\n      <col class=\"col1\">\r\n    </colgroup>\r\n    <tbody class=\"azc-grid-groupdata\" role=\"rowgroup\">\r\n      <tr repeat=\"item in $ctrl.vm.items track by $index\" click=\"$ctrl.vm.navigateTo(item.bladePath);item.onNavItemClick();\" role=\"row\" aria-selected=\"false\" data-grid-row-activated=\"false\" data-grid-selectable=\"true\" data-grid-focusable=\"true\" data-grid-activateable=\"true\" show=\"<!--item.isVisible-->\" style=\"cursor:pointer\" style=\"<!--item.style-->\">\r\n        <td class=\"msportalfx-gridcolumn-asseticon\" role=\"gridcell\" data-grid-cell-activated=\"false\">\r\n          <i ng-class=\"<!--item.cssClass-->\"></i>\r\n        </td>\r\n        <td tabindex=\"0\" role=\"gridcell\" data-activatable=\"true\" data-grid-cell-activated=\"false\">\r\n          <a href=\"<!--item.hrefPath-->\" target=\"_blank\" style=\"color:black\"><!--{{item.title}}--></a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div ng-if=\"$ctrl.vm.isInnerHtml\">\r\n    <div ng-transclude></div>\r\n  </div>\r\n</div>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NavComponent.ctorParameters = function () { return []; };
        return NavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppboardComponent = /** @class */ (function () {
        // #region Constructors
        function AppboardComponent(appService, portalService, router) {
            this.appService = appService;
            this.portalService = portalService;
            this.router = router;
            this.portalService.appService = this.appService;
            this.portalService.areaNotification = new AreaNotification(this.portalService);
            this.portalService.areaBlades = new AreaBlades(this.portalService);
            this.appService.portalService = this.portalService;
        }
        // #endregion
        // #region Angular Methods
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        AppboardComponent.prototype.ngOnInit = 
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { _this.appService.appConfigService.appConfig.isShowSplashScreen = false; }), 500);
            // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
            //                     refactor this.portalService.panorama.startboard.tiles
            //                       to use this.appService.appConfigService.appConfig.appboard
            if (this.portalService.panorama.startboard.tiles.tiles.length == 0) {
                this.appService.appConfigService.appConfig.appboard.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var tile = _this.portalService.panorama.startboard.tiles.addTile(new Tile$1(item.title, item.routerPath, _this.portalService));
                    tile.subTitle = item.subTitle;
                }));
            }
        };
        // #endregion
        // #region Public Methods
        // #endregion
        // #region Public Methods
        /**
         * @param {?} routerPath
         * @return {?}
         */
        AppboardComponent.prototype.navigateTo = 
        // #endregion
        // #region Public Methods
        /**
         * @param {?} routerPath
         * @return {?}
         */
        function (routerPath) {
            this.appService.bladeService.navigateTo(routerPath);
        };
        AppboardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ospa-appboard',
                        template: "  <!-- PANORAMA -->\r\n<div class=\"fxs-panorama-homearea\" style=\"padding-top:45px;\"\r\n     [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\"\r\n     [hidden]=\"!portalService.panorama.isVisible\">\r\n  <div class=\"fxs-startboard-target fxs-startboard fx-rightClick\"\r\n       [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\">\r\n    <!-- INFO AREA -->\r\n    <div hidden class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Redesign</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Zur Zeit stehen nicht alle Applikation in der PREVIEW-Umgebung zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung. <b>\r\n            Falls Ihre Applikation unten nicht aufgelistet wird,\r\n            entfernen sie in der URL den Teil mit [.preview] und navigieren Sie somit zur STANDARD-Umgebung.\r\n            In der STANDARD-Umgebung k\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00B6nnen Sie wie gewohnt weiterarbeiten.\r\n          </b>\r\n          In den kommenden Monaten werden alle Applikationen auf das neue Layout angepasst.\r\n          <br /><br />Bei Fragen stehen wir gerne zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n      <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n    </div>\r\n    <!-- NO TILES/APPS -->\r\n    <div *ngIf=\"portalService.panorama.startboard.tiles.tiles.length === 0\" class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;height:auto;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Keine Applikationen zugeordnet</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n    </div>\r\n    <!-- TILES/APPS -->\r\n    <div class=\"fxs-startboard-layout fxs-flowlayout\">\r\n      <div class=\"fxs-flowlayout-childcontainer\">\r\n        <!-- track by $index -->\r\n        <section *ngFor=\"let tile of portalService.panorama.startboard.tiles.tiles\" class=\"fxs-tile fx-rightClick fxs-flowlayout-element\"\r\n                 [ngClass]=\"{'fxs-tilesize-normal':tile.size=='normal', 'fxs-tilesize-mini':tile.size=='mini', 'fxs-tilesize-herowide':tile.size=='herowide'}\"\r\n                 [ngStyle]=\"{'left': tile.left, 'top': tile.top}\">\r\n          <div class=\"fxs-part fxs-part-clickable\" style=\"cursor:pointer;\"\r\n               (click)=\"tile.clicked();\">\r\n            <header class=\"fxs-part-title\">\r\n              <h2 class=\"msportalfx-tooltip-overflow\">{{tile.title}}</h2>\r\n              <h3 class=\"msportalfx-tooltip-overflow\">{{tile.subTitle}}</h3>\r\n            </header>\r\n            <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n          </div>\r\n          <div class=\"fxs-title-overlay\"></div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".appboard-layout{padding:40px}.appboard-no-apps{padding:25px;max-width:800px;margin-bottom:15px;height:auto}.appboard-title-text{padding-bottom:5px;margin:auto;width:100%;font-weight:500;text-transform:uppercase}.appboard-tile{border-radius:2px;margin-right:7px;margin-bottom:7px;cursor:pointer;padding-top:10px}.appboard-tile:hover{background-color:rgba(220,220,220,.6)}.appboard-tile-size-small{height:180px;width:200px;display:inline-block}@media only screen and (max-width:540px){.appboard-tile-size-small{width:100%}}.onesys-mode-light{color:#000;background-color:#fff}.appboard-no-apps{background-color:#293644;color:#fff}.appboard-tile-icon{margin:auto;width:100%;height:100px;color:#f1f1f1}.appboard-tile-title-text{text-align:center;margin-top:0;font-size:16px;font-weight:700}.appboard-tile-subtitle-text{text-align:center;margin:0;font-size:14px;font-weight:400}.appboard-tile.onesys-mode-light{border:1px solid rgba(204,204,204,.8);box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}"]
                    }] }
        ];
        /** @nocollapse */
        AppboardComponent.ctorParameters = function () { return [
            { type: AppService },
            { type: PortalService },
            { type: router.Router }
        ]; };
        return AppboardComponent;
    }());
    if (false) {
        /** @type {?} */
        AppboardComponent.prototype.appService;
        /** @type {?} */
        AppboardComponent.prototype.portalService;
        /** @type {?} */
        AppboardComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent() {
        }
        /**
         * @return {?}
         */
        PageNotFoundComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PageNotFoundComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ospa-page-not-found',
                        template: "<div class=\"pagenotfound-layout\">\r\n    <div class=\"#child-container\">\r\n        <header>\r\n            <h3><i class=\"fas fa-exclamation fa-pull-left fa-border\"></i>Die verwendete URL ist nicht verf\u00FCgbar</h3>\r\n            <p>\r\n                Bitte \u00FCberpr\u00FCfen Sie die URL oder wenden Sich sich an den Administrator.\r\n            </p>\r\n        </header>\r\n    </div>\r\n</div>\r\n",
                        styles: [".pagenotfound-layout{padding:40px}.pagenotfound-message{padding:25px;max-width:800px;margin-bottom:15px;height:auto;background-color:#293644;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        PageNotFoundComponent.ctorParameters = function () { return []; };
        return PageNotFoundComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        { path: '', redirectTo: 'appboard', pathMatch: 'full' },
        { path: 'appboard', component: AppboardComponent },
        { path: '**', component: PageNotFoundComponent }
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forRoot(routes) // , { enableTracing: true }
                        ],
                        exports: [
                            router.RouterModule
                        ]
                    },] }
        ];
        return AppRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { MainOscService } from '@one-system/one-sys-core';
    var SplashScreenComponent = /** @class */ (function () {
        //constructor(public mainOscService: MainOscService) { }
        function SplashScreenComponent() {
        }
        /**
         * @return {?}
         */
        SplashScreenComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SplashScreenComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ospa-splash-screen',
                        template: "<div class=\"ospa-splash-screen\" <!--[style.display]=\"mainOscService.appConfigService.appConfig.isShowSplashScreen ? 'flex' : 'none'\"-->>\r\n    <img style=\"width:200px;\" src=\"/style/one-system.png\" />\r\n    <br />\r\n    Loading...\r\n</div>\r\n",
                        styles: ["*{color:#fff;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:1em}.ospa-splash-screen{position:fixed;top:0;right:0;bottom:0;left:0;z-index:8;background-color:#2e80ab;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center}"]
                    }] }
        ];
        /** @nocollapse */
        SplashScreenComponent.ctorParameters = function () { return []; };
        return SplashScreenComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // #region README
    // <router-outlet> does not yet support a dynamic [name] attribute
    // During ng build, we get the following error:
    // > ERROR: Can't bind to 'name' since it isn't a known property of 'router-outlet'.
    // Therefore we have implemented this. Usage:
    // <router-outlet-named [name]="name1">
    // #endregion
    var RouterOutletNamedDirective = /** @class */ (function () {
        // #endregion
        // #region Properties
        function RouterOutletNamedDirective(parentContexts, location, resolver, changeDetector, router) {
            this.parentContexts = parentContexts;
            this.location = location;
            this.resolver = resolver;
            this.changeDetector = changeDetector;
            this.router = router;
        }
        // #endregion
        // #region Angular Methods
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        RouterOutletNamedDirective.prototype.ngOnInit = 
        // #endregion
        // #region Angular Methods
        /**
         * @return {?}
         */
        function () {
            this.outlet = new router.RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
            this.outlet.ngOnInit();
        };
        /**
         * @return {?}
         */
        RouterOutletNamedDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.outlet) {
                this.outlet.ngOnDestroy();
            }
        };
        RouterOutletNamedDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'router-outlet-named',
                        exportAs: 'outlet'
                    },] }
        ];
        /** @nocollapse */
        RouterOutletNamedDirective.ctorParameters = function () { return [
            { type: router.ChildrenOutletContexts },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.ChangeDetectorRef },
            { type: router.Router }
        ]; };
        RouterOutletNamedDirective.propDecorators = {
            name: [{ type: core.Input }]
        };
        return RouterOutletNamedDirective;
    }());
    if (false) {
        /** @type {?} */
        RouterOutletNamedDirective.prototype.outlet;
        /** @type {?} */
        RouterOutletNamedDirective.prototype.name;
        /**
         * @type {?}
         * @private
         */
        RouterOutletNamedDirective.prototype.parentContexts;
        /**
         * @type {?}
         * @private
         */
        RouterOutletNamedDirective.prototype.location;
        /**
         * @type {?}
         * @private
         */
        RouterOutletNamedDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        RouterOutletNamedDirective.prototype.changeDetector;
        /**
         * @type {?}
         * @private
         */
        RouterOutletNamedDirective.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemingDirective = /** @class */ (function () {
        function ThemingDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        ThemingDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            Object.keys(this.theme).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) {
                _this.el.nativeElement.style.setProperty("" + prop, _this.theme[prop]);
            }));
        };
        ThemingDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[theming]'
                    },] }
        ];
        /** @nocollapse */
        ThemingDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ThemingDirective.propDecorators = {
            theme: [{ type: core.Input, args: ['theming',] }]
        };
        return ThemingDirective;
    }());
    if (false) {
        /** @type {?} */
        ThemingDirective.prototype.theme;
        /**
         * @type {?}
         * @private
         */
        ThemingDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularPortalAzureModule = /** @class */ (function () {
        function AngularPortalAzureModule(parentModule) {
            if (parentModule) {
                throw new Error('OneSysCoreModule is already loaded. Import it in only in one AppModule.');
            }
        }
        /**
         * @param {?} appConfig
         * @return {?}
         */
        AngularPortalAzureModule.forRoot = /**
         * @param {?} appConfig
         * @return {?}
         */
        function (appConfig) {
            return {
                ngModule: AngularPortalAzureModule,
                providers: [
                    { provide: AppConfig, useValue: appConfig }
                ]
            };
        };
        AngularPortalAzureModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            // Component
                            AppboardComponent,
                            PageNotFoundComponent,
                            SplashScreenComponent,
                            AppComponent,
                            NavComponent,
                            GridComponent,
                            BladeComponent,
                            // Directives
                            RouterOutletNamedDirective,
                            ThemingDirective
                        ],
                        providers: [
                            PortalService,
                            BladeService,
                            BrowserService
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            AppRoutingModule // Should be last, since it contains the ** route
                        ],
                        exports: [
                            // Component
                            AppComponent,
                            PageNotFoundComponent,
                            SplashScreenComponent,
                            NavComponent,
                            GridComponent,
                            BladeComponent,
                            // Directives
                            RouterOutletNamedDirective,
                            ThemingDirective
                        ]
                    },] }
        ];
        /** @nocollapse */
        AngularPortalAzureModule.ctorParameters = function () { return [
            { type: AngularPortalAzureModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return AngularPortalAzureModule;
    }());

    exports.AngularPortalAzureModule = AngularPortalAzureModule;
    exports.AppComponent = AppComponent;
    exports.AppConfig = AppConfig;
    exports.AppService = AppService;
    exports.Appboard = Appboard;
    exports.AppboardComponent = AppboardComponent;
    exports.AppboardEntry = AppboardEntry;
    exports.Blade = Blade$1;
    exports.BladeComponent = BladeComponent;
    exports.BladeService = BladeService;
    exports.GridComponent = GridComponent;
    exports.NavComponent = NavComponent;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.Sidebar = Sidebar;
    exports.SidebarEntry = SidebarEntry;
    exports.Viewport = Viewport;
    exports.ɵa = AppConfigService;
    exports.ɵb = PortalService;
    exports.ɵc = UserControlBase$1;
    exports.ɵd = Tiles;
    exports.ɵe = Tile;
    exports.ɵf = Blade;
    exports.ɵg = UserControlBase;
    exports.ɵh = SplashScreenComponent;
    exports.ɵi = RouterOutletNamedDirective;
    exports.ɵj = ThemingDirective;
    exports.ɵk = BrowserService;
    exports.ɵl = AppRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-portal-azure.umd.js.map
