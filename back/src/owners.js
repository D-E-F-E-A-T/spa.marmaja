/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function Owners() {
    this.name = 'Owners';
    this.range = 'A:E';
    this.keys = [
        'id',
        'name',
        'dateCreated',
        'balance',
        'description',
    ];

    /**
     * @typedef {Object} Owner
     * @property {String} id - A unique identifier. (descriptive for the spreadsheet)
     * @property {String} name - A human readable identifier.
     * @property {Number} dateCreated - The creation date of this account. [UTC]
     * @property {Number} balance - The net worth of this account.
     * @property {String} description - a text description for the owner.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {Owner[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function ownersGet
 * @description Returns the owners dataset.
 * @returns {Owner[]} The collection of available owners.
 */
function ownersGet() { // eslint-disable-line no-unused-vars
    const config = new Owners();
    return config.data();
}
