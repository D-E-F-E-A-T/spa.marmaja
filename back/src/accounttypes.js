/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function AccountTypes() {
    this.name = 'AccountTypes';
    this.range = 'A:C';
    this.keys = [
        'id',
        'name',
        'description',
    ];

    /**
     * @typedef {Object} AccountType
     * @property {String} id - An unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {String} description - A text describing the account type.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {AccountType[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function accounttypesGet
 * @description Returns the AccountTypes dataset.
 * @returns {AccountType[]} The collection of available account types.
 */
function accounttypesGet() { // eslint-disable-line no-unused-vars
    const config = new AccountTypes();
    return config.data();
}
