"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            throw new Error('[UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
        },
        enumerable: true,
        configurable: true
    });
    return UserAccount;
}());
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map