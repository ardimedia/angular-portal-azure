/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class UserAccount {
    // #region Constructor
    /**
     * @param {?} username
     * @param {?=} firstName
     * @param {?=} lastName
     */
    constructor(username, firstName = '', lastName = '') {
        this.userName = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**
     * @return {?}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set firstName(value) {
        this._firstName = value;
        this._name = (this._firstName || '') + ' ' + (this._lastName || '');
    }
    /**
     * @return {?}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set lastName(value) {
        this._lastName = value;
        this._name = (this._firstName || '') + ' ' + (this._lastName || '');
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        throw new Error('[UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY2NvdW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3VzZXItYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFHcEIsWUFBWSxRQUFnQixFQUFFLFlBQW9CLEVBQUUsRUFBRSxXQUFtQixFQUFFO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFTRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUtELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBS0QsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDBHQUEwRyxDQUFDLENBQUM7SUFDaEksQ0FBQztDQU9KOzs7Ozs7SUFuQ0csaUNBQTJCOzs7OztJQVczQixnQ0FBMEI7Ozs7O0lBVzFCLDRCQUFzQjs7SUFTdEIsK0JBQWlCOztJQUNqQixtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlckFjY291bnQge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nID0gJycsIGxhc3ROYW1lOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIC8vICNyZWdpb24gZmlyc3ROYW1lXHJcblxyXG4gICAgcHJpdmF0ZSBfZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBnZXQgZmlyc3ROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0TmFtZTtcclxuICAgIH1cclxuICAgIHNldCBmaXJzdE5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSAodGhpcy5fZmlyc3ROYW1lIHx8ICcnKSArICcgJyArICh0aGlzLl9sYXN0TmFtZSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBsYXN0TmFtZVxyXG4gICAgcHJpdmF0ZSBfbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGdldCBsYXN0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcclxuICAgIH1cclxuICAgIHNldCBsYXN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbGFzdE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gKHRoaXMuX2ZpcnN0TmFtZSB8fCAnJykgKyAnICcgKyAodGhpcy5fbGFzdE5hbWUgfHwgJycpO1xyXG4gICAgfVxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gbmFtZVxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tVc2VyQWNjb3VudF0gXFwnbmFtZVxcJyBpcyBhIGNhbGN1bGF0ZWQgdmFsdWUgZnJvbSBcXCdmaXJzTmFtZVxcJyBhbmQgXFwnbGFzdE5hbWVcXCcuIEFzc2lnbm1lbnQgbm90IGFsbG93ZWQuJyk7XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=