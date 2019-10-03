/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
import { UserAccount } from './user-account';
export class AvatarMenu extends UserControlBase {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     */
    constructor(portalService) {
        super(portalService); // $scope,
        this.userAccount = new UserAccount('demo@apa.org', 'demo', 'apa');
    }
}
if (false) {
    /** @type {?} */
    AvatarMenu.prototype.userAccount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLW1lbnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXZhdGFyLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFlOzs7Ozs7SUFJM0MsWUFBWSxhQUE0QjtRQUNwQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBRWhDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBU0o7OztJQUhHLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuL3BvcnRhbC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGlsZXMgfSBmcm9tICcuL3RpbGVzJztcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xCYXNlIH0gZnJvbSAnLi91c2VyLWNvbnRyb2wtYmFzZSc7XHJcbmltcG9ydCB7IEJsYWRlIH0gZnJvbSAnLi9ibGFkZSc7XHJcbmltcG9ydCB7IEJsYWRlRGF0YSB9IGZyb20gJy4vYmxhZGUtZGF0YSc7XHJcbmltcG9ydCB7IEJsYWRlTmF2SXRlbSB9IGZyb20gJy4vYmxhZGUtbmF2LWl0ZW0nO1xyXG5pbXBvcnQgeyBJQWRkQmxhZGVFdmVudEFyZ3MgfSBmcm9tICcuL2lhZGQtYmxhZGUtZXZlbnQtYXJncyc7XHJcbmltcG9ydCB7IFVzZXJBY2NvdW50IH0gZnJvbSAnLi91c2VyLWFjY291bnQnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXJNZW51IGV4dGVuZHMgVXNlckNvbnRyb2xCYXNlIHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcclxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxyXG5cclxuICAgICAgICB0aGlzLnVzZXJBY2NvdW50ID0gbmV3IFVzZXJBY2NvdW50KCdkZW1vQGFwYS5vcmcnLCAnZGVtbycsICdhcGEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgdXNlckFjY291bnQ6IFVzZXJBY2NvdW50IHwgbnVsbDtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19