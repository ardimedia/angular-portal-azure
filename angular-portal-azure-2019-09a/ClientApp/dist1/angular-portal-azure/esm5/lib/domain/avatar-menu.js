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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
import { UserAccount } from './user-account';
var AvatarMenu = /** @class */ (function (_super) {
    __extends(AvatarMenu, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function AvatarMenu(portalService) {
        var _this = _super.call(this, portalService) || this;
        _this.userAccount = new UserAccount('demo@apa.org', 'demo', 'apa');
        return _this;
    }
    return AvatarMenu;
}(UserControlBase));
export { AvatarMenu };
if (false) {
    /** @type {?} */
    AvatarMenu.prototype.userAccount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLW1lbnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXZhdGFyLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDO0lBQWdDLDhCQUFlO0lBQzNDLHNCQUFzQjtJQUV0QiwrQ0FBK0M7SUFDL0Msb0JBQVksYUFBNEI7UUFBeEMsWUFDSSxrQkFBTSxhQUFhLENBQUMsU0FHdkI7UUFERyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBQ3RFLENBQUM7SUFTTCxpQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBZ0MsZUFBZSxHQWlCOUM7Ozs7SUFIRyxpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xyXG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xyXG5pbXBvcnQgeyBCbGFkZURhdGEgfSBmcm9tICcuL2JsYWRlLWRhdGEnO1xyXG5pbXBvcnQgeyBCbGFkZU5hdkl0ZW0gfSBmcm9tICcuL2JsYWRlLW5hdi1pdGVtJztcclxuaW1wb3J0IHsgSUFkZEJsYWRlRXZlbnRBcmdzIH0gZnJvbSAnLi9pYWRkLWJsYWRlLWV2ZW50LWFyZ3MnO1xyXG5pbXBvcnQgeyBVc2VyQWNjb3VudCB9IGZyb20gJy4vdXNlci1hY2NvdW50JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXZhdGFyTWVudSBleHRlbmRzIFVzZXJDb250cm9sQmFzZSB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcclxuICAgIGNvbnN0cnVjdG9yKHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UpIHsgLy8gJHNjb3BlOiBhbnksXHJcbiAgICAgICAgc3VwZXIocG9ydGFsU2VydmljZSk7IC8vICRzY29wZSxcclxuXHJcbiAgICAgICAgdGhpcy51c2VyQWNjb3VudCA9IG5ldyBVc2VyQWNjb3VudCgnZGVtb0BhcGEub3JnJywgJ2RlbW8nLCAnYXBhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIHVzZXJBY2NvdW50OiBVc2VyQWNjb3VudCB8IG51bGw7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==