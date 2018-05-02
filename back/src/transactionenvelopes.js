/* globals utilsGetSheet, utilsGetSheetData */

/** @class */
function TransactionEnvelopes() {
    this.name = 'TransactionEnvelopes';
    this.range = 'A:D';
    this.keys = [
        'id',
        'name',
        'balance',
        'description',
    ];

    /**
     * @typedef {Object} TransactionEnvelope
     * @property {String} id - An unique identifier.
     * @property {String} name - A human readable identifier.
     * @property {Number} balance - The amount of money this envelope has.
     * @property {String} description - A text describing the transaction type.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {TransactionEnvelope[]}  Returns a JSON-compatible data object. */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function transactionenvelopesGet
 * @description Returns the AccountTypes dataset.
 * @returns {TransactionEnvelope[]} The collection of available account types.
 */
function transactionenvelopesGet() {
    const config = new TransactionEnvelopes();
    return config.data();
}

