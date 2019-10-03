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
export { UserAccount };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3VzZXItYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFDSSxzQkFBc0I7SUFFdEIscUJBQVksUUFBZ0IsRUFBRSxTQUFzQixFQUFFLFFBQXFCO1FBQTdDLDBCQUFBLEVBQUEsY0FBc0I7UUFBRSx5QkFBQSxFQUFBLGFBQXFCO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFTRCxzQkFBSSxrQ0FBUzs7OztRQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQzs7O09BSkE7SUFTRCxzQkFBSSxpQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBYSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQzs7O09BSkE7SUFTRCxzQkFBSSw2QkFBSTs7OztRQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBUyxLQUFhO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEdBQTBHLENBQUMsQ0FBQztRQUNoSSxDQUFDOzs7T0FIQTtJQVVMLGtCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQzs7Ozs7OztJQW5DRyxpQ0FBMkI7Ozs7O0lBVzNCLGdDQUEwQjs7Ozs7SUFXMUIsNEJBQXNCOztJQVN0QiwrQkFBaUI7O0lBQ2pCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyQWNjb3VudCB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWU6IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcgPSAnJywgbGFzdE5hbWU6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBmaXJzdE5hbWVcclxuXHJcbiAgICBwcml2YXRlIF9maXJzdE5hbWU6IHN0cmluZztcclxuICAgIGdldCBmaXJzdE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3ROYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IGZpcnN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9ICh0aGlzLl9maXJzdE5hbWUgfHwgJycpICsgJyAnICsgKHRoaXMuX2xhc3ROYW1lIHx8ICcnKTtcclxuICAgIH1cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIGxhc3ROYW1lXHJcbiAgICBwcml2YXRlIF9sYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgZ2V0IGxhc3ROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3ROYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSAodGhpcy5fZmlyc3ROYW1lIHx8ICcnKSArICcgJyArICh0aGlzLl9sYXN0TmFtZSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBuYW1lXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1VzZXJBY2NvdW50XSBcXCduYW1lXFwnIGlzIGEgY2FsY3VsYXRlZCB2YWx1ZSBmcm9tIFxcJ2ZpcnNOYW1lXFwnIGFuZCBcXCdsYXN0TmFtZVxcJy4gQXNzaWdubWVudCBub3QgYWxsb3dlZC4nKTtcclxuICAgIH1cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==