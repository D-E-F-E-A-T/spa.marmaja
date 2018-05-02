/* globals utilsGetSheet, utilsGetSheetData, Utilities */

/** @class */
function Transactions() {
    this.name = 'Transactions';
    this.range = 'A:J';
    this.keys = [
        'id',
        'date',
        'from',
        'to',
        'currency',
        'amount',
        'description',
        'type',
        'category',
        'envelope',
    ];

    /**
     * @typedef {Object} Transaction
     * @property {String} id - An unique identifier.
     * @property {Number} date - The date when the transaction was made.
     * @property {String} from - The id for the account originating the transaction.
     * @property {String} to - The id for the destination account of the transaction.
     * @property {String} currency - The id of the currency used for the transaction.
     * @property {Number} amount - The amount of money transactioned.
     * @property {String} description - A text describing the transaction type.
     * @property {String} type - The id of the type of the transaction.
     * @property {String} category - The id of the category of the transaction.
     * @property {String} envelope - The id of the envelope of the transaction.
     */

    /** @returns {Sheet} The corresponding sheet instance. */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {Transaction[]}  Returns a JSON-compatible data object */
    this.data = function data() { return utilsGetSheetData(this); };
}


/**
 * @function transactionsGet
 * @description Returns the transactions dataset.
 * @returns {Transaction[]} The collection of available accounts.
 */
function transactionsGet() {
    const config = new Transactions();
    return config.data();
}

/**
 * @function transactionPost
 * @description Creates new transactions.
 * @param {!Transaction[]} transactions - An array of transaction objects.
 * @returns {Boolean} - Whether the transaction succeded or not.
 */
function transactionsPost(transactions) {
    const config = new Transactions();
    // const transactions = [{
    //     amount: 222,
    //     category: 'service',
    //     currency: 'MXN',
    //     envelope: 'entertainment',
    //     from: 'mx.bank.bbva.auto',
    //     to: 'mx.bank.bbva.nomina',
    //     date: 1525143960000,
    //     description: 'aaaa',
    //     type: 'transfer',
    // }];
    const rows = transactions.map(function transactionMapper(transaction) {
        const row = [Utilities.getUuid()];
        config.keys
            .slice(1) // Skip the id
            .forEach(function keyIterator(key) {
                const value = key === 'date'
                    ? new Date(transaction[key])
                    : transaction[key];
                row.push(value);
            });
        config.sheet().appendRow(row);
        return row;
    });
    // Logger.log(rows);
    return rows.length;
}
