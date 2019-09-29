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
import { AvatarMenu } from './avatar-menu';
import { Startboard } from './startboard';
var Panorama = /** @class */ (function (_super) {
    __extends(Panorama, _super);
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
export { Panorama };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub3JhbWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcGFub3JhbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDO0lBQThCLDRCQUFlO0lBU3pDLGFBQWE7SUFFYixzQkFBc0I7SUFFdEIsK0NBQStDO0lBQy9DLGtCQUFZLGFBQTRCLEVBQUUsS0FBYTtRQUF2RCxZQUNJLGtCQUFNLGFBQWEsQ0FBQyxTQU12QjtRQWpCRCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBWXRCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQztRQUVuQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFDekQsQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBeEJELENBQThCLGVBQWUsR0F3QjVDOzs7O0lBckJHLHlCQUFjOztJQUNkLDZCQUEwQjs7SUFFMUIsOEJBQXVCOztJQUN2Qiw4QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xyXG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xyXG5pbXBvcnQgeyBJQWRkQmxhZGVFdmVudEFyZ3MgfSBmcm9tICcuL2lhZGQtYmxhZGUtZXZlbnQtYXJncyc7XHJcbmltcG9ydCB7IEF2YXRhck1lbnUgfSBmcm9tICcuL2F2YXRhci1tZW51JztcclxuaW1wb3J0IHsgU3RhcnRib2FyZCB9IGZyb20gJy4vc3RhcnRib2FyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFub3JhbWEgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgYXZhdGFyTWVudTogQXZhdGFyTWVudTtcclxuICAgIHN0YXJ0Ym9hcmQ6IFN0YXJ0Ym9hcmQ7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgdGl0bGU6IHN0cmluZykgeyAvLyAkc2NvcGU6IGFueSxcclxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmF2YXRhck1lbnUgPSBuZXcgQXZhdGFyTWVudSh0aGlzLnBvcnRhbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRib2FyZCA9IG5ldyBTdGFydGJvYXJkKHRoaXMucG9ydGFsU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==