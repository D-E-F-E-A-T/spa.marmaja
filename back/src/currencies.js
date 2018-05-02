/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function Currencies() {
    this.name = 'Currencies';
    this.range = 'A:C';
    this.keys = [
        'id',
        'name',
        'value',
    ];

    /**
     * @typedef {Object} Currency
     * @property {String} id - An unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {Number} value - The value for the currency (relative to default one)
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {Currency[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function currenciesGet
 * @description Returns the AccountTypes dataset.
 * @returns {Currency[]} The collection of available account types.
 */
function currenciesGet() { // eslint-disable-line no-unused-vars
    const config = new Currencies();
    return config.data();
}
