/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
import { AvatarMenu } from './avatar-menu';
import { Startboard } from './startboard';
export class Panorama extends UserControlBase {
    // #endregion
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     * @param {?} title
     */
    constructor(portalService, title) {
        super(portalService); // $scope,
        this.isVisible = true;
        this.title = title;
        this.portalService.panorama = this;
        this.avatarMenu = new AvatarMenu(this.portalService);
        this.startboard = new Startboard(this.portalService);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub3JhbWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcGFub3JhbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUMsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7OztJQWN6QyxZQUFZLGFBQTRCLEVBQUUsS0FBYTtRQUNuRCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBWHBDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFZdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FHSjs7O0lBckJHLHlCQUFjOztJQUNkLDZCQUEwQjs7SUFFMUIsOEJBQXVCOztJQUN2Qiw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xyXG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xyXG5pbXBvcnQgeyBJQWRkQmxhZGVFdmVudEFyZ3MgfSBmcm9tICcuL2lhZGQtYmxhZGUtZXZlbnQtYXJncyc7XHJcbmltcG9ydCB7IEF2YXRhck1lbnUgfSBmcm9tICcuL2F2YXRhci1tZW51JztcclxuaW1wb3J0IHsgU3RhcnRib2FyZCB9IGZyb20gJy4vc3RhcnRib2FyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFub3JhbWEgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgYXZhdGFyTWVudTogQXZhdGFyTWVudTtcclxuICAgIHN0YXJ0Ym9hcmQ6IFN0YXJ0Ym9hcmQ7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgdGl0bGU6IHN0cmluZykgeyAvLyAkc2NvcGU6IGFueSxcclxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmF2YXRhck1lbnUgPSBuZXcgQXZhdGFyTWVudSh0aGlzLnBvcnRhbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRib2FyZCA9IG5ldyBTdGFydGJvYXJkKHRoaXMucG9ydGFsU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==