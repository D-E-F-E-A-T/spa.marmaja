/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function TransactionCategories() {
    this.name = 'TransactionCategories';
    this.range = 'A:D';
    this.keys = [
        'id',
        'name',
        'balance',
        'description',
    ];

    /**
     * @typedef {Object} TransactionCategory
     * @property {String} id - An unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {Number} balance - The amount of money this envelope has.
     * @property {String} description - A text describing the transaction category.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {TransactionCategory[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function transactioncategoriesGet
 * @description Returns the AccountTypes dataset.
 * @returns {TransactionCategory[]} The collection of available account types.
 */
function transactioncategoriesGet() {
    const config = new TransactionCategories();
    return config.data();
}
