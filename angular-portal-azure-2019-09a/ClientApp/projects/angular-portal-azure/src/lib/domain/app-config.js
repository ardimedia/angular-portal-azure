"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appboard_1 = require("./dashboard/appboard/appboard");
//import { Blades } from "./blade/blades";
var sidebar_1 = require("./sidebar/sidebar");
var AppConfig = /** @class */ (function () {
    // #endregion
    // #region Constructors
    function AppConfig() {
        // #region Properties
        this.appTitle = 'One-System Portal Azure';
        this.isShowSplashScreen = true;
        this.username = 'user@one-system.domain';
        this.usernameTenant = 'One-System';
        this.appboard = appboard_1.Appboard.create();
        this.blades = []; // Blades.create();
        this.sidebar = sidebar_1.Sidebar.create();
    }
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=app-config.js.map