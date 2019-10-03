/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Appboard } from "./dashboard/appboard/appboard";
//import { Blades } from "./blade/blades";
import { Sidebar } from "./sidebar/sidebar";
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
export { AppConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9hcHAtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBR3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QztJQVlJLGFBQWE7SUFFYix1QkFBdUI7SUFFdkI7O1FBYkEsYUFBUSxHQUFXLHlCQUF5QixDQUFDO1FBQzdDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUNuQyxhQUFRLEdBQVcsd0JBQXdCLENBQUM7UUFDNUMsbUJBQWMsR0FBVyxZQUFZLENBQUM7UUFFdEMsYUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxXQUFNLEdBQVksRUFBRSxDQUFDLENBQUMsbUJBQW1COztRQUN6QyxZQUFPLEdBQVksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBT3BDLENBQUM7SUFPTCxnQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7SUFyQkcsNkJBQTZDOztJQUM3Qyx1Q0FBbUM7O0lBQ25DLDZCQUE0Qzs7SUFDNUMsbUNBQXNDOztJQUV0Qyw2QkFBdUM7O0lBQ3ZDLDJCQUFxQjs7SUFDckIsNEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwYm9hcmQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvYXBwYm9hcmQvYXBwYm9hcmRcIjtcclxuaW1wb3J0IHsgQmxhZGUgfSBmcm9tIFwiLi9ibGFkZS9ibGFkZVwiO1xyXG4vL2ltcG9ydCB7IEJsYWRlcyB9IGZyb20gXCIuL2JsYWRlL2JsYWRlc1wiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci9zaWRlYmFyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnIHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGFwcFRpdGxlOiBzdHJpbmcgPSAnT25lLVN5c3RlbSBQb3J0YWwgQXp1cmUnO1xyXG4gICAgaXNTaG93U3BsYXNoU2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHVzZXJuYW1lOiBzdHJpbmcgPSAndXNlckBvbmUtc3lzdGVtLmRvbWFpbic7XHJcbiAgICB1c2VybmFtZVRlbmFudDogc3RyaW5nID0gJ09uZS1TeXN0ZW0nO1xyXG5cclxuICAgIGFwcGJvYXJkOiBBcHBib2FyZCA9IEFwcGJvYXJkLmNyZWF0ZSgpO1xyXG4gICAgYmxhZGVzOiBCbGFkZVtdID0gW107IC8vIEJsYWRlcy5jcmVhdGUoKTtcclxuICAgIHNpZGViYXI6IFNpZGViYXIgPSBTaWRlYmFyLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==