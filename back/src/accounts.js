/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function Accounts() {
    this.name = 'Accounts';
    this.range = 'A:K';
    this.keys = [
        'id',
        'name',
        'owner',
        'type',
        'currency',
        'balanceInit',
        'balanceCredit',
        'balance',
        'description',
        'dateCreated',
        'enabled',
    ];

    /**
     * @typedef {Object} Account
     * @property {String} id - A unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {String} owner - An account owner identifier.
     * @property {String} type - An account type identifier.
     * @property {String} currency - The currency ID for the account balance.
     * @property {Number} balance - The amount this account holds.
     * @property {Number} balanceInit - The initial balance when created.
     * @property {Number} balanceCredit - Amount of the balance that is credit.
     * @property {String} description - A text describing the account.
     * @property {Number} dateCreated - The date when the account was created.
     * @property {Boolean} enabled - Whether the account is enabled or not.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {Account[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function accountsGet
 * @description Returns the Accounts dataset.
 * @returns {Account[]} The collection of available accounts.
 */
function accountsGet() {
    const config = new Accounts();
    return config.data();
}
