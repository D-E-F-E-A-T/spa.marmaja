/* global Accounts, Transactions */
/* eslint-disable jsdoc/check-tag-names */

// NOTE: In every formula as the second parameter pass the range
//       you want to be monitored for changes and trigger an update.

/**
 * @customfunction
 * @description Obtains the current balance for given account id.
 *              Taking into consideration the initial balance.
 * @param {!String} id - The account identifier.
 * @returns {Number} The account balance.
 */
function formulasAccountBalance(id) {
    const accounts = new Accounts()
        .data()
        .filter(function accountFilter(account) {
            return account.id === id;
        });
    if (!accounts.length) throw new Error('The account does not exist.');
    const account = accounts[0];
    const transactions = new Transactions().data();

    const additions = transactions
        .filter(function additionFilter(data) {
            return data.to === id;
        })
        .reduce(function additionReducer(acc, transaction) {
            acc += transaction.amount;
            return acc;
        }, 0);

    const deductions = transactions
        .filter(function deductionFilter(data) {
            return data.from === id;
        })
        .reduce(function deductionReducer(acc, transaction) {
            acc -= transaction.amount;
            return acc;
        }, 0);

    return (account.balanceInit || 0) + deductions + additions;
}
/* eslint-enable jsdoc/check-tag-names */
