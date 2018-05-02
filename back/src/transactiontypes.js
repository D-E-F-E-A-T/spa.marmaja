/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function TransactionTypes() {
    this.name = 'TransactionTypes';
    this.range = 'A:C';
    this.keys = [
        'id',
        'name',
        'description',
    ];

    /**
     * @typedef {Object} TransactionType
     * @property {String} id - An unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {String} description - A text describing the transaction type.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {TransactionType[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function transactiontypesGet
 * @description Returns the AccountTypes dataset.
 * @returns {TransactionType[]} The collection of available account types.
 */
function transactiontypesGet() {
    const config = new TransactionTypes();
    return config.data();
}
