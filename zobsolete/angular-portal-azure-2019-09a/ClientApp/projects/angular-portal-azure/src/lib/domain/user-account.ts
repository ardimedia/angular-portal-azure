export class UserAccount {
    // #region Constructor

    constructor(username: string, firstName: string = '', lastName: string = '') {
        this.userName = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // #endregion

    // #region Properties

    // #region firstName

    private _firstName: string;
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
        this._name = (this._firstName || '') + ' ' + (this._lastName || '');
    }
    // #endregion

    // #region lastName
    private _lastName: string;
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
        this._name = (this._firstName || '') + ' ' + (this._lastName || '');
    }
    // #endregion

    // #region name
    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        throw new Error('[UserAccount] \'name\' is a calculated value from \'firsName\' and \'lastName\'. Assignment not allowed.');
    }
    // #endregion

    userName: string;
    emailAddress: string;

    // #endregion
}
