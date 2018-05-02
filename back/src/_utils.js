/* globals Logger, SpreadsheetApp */

/**
 * @typedef {Object} Range
 */

/**
 * @method Range.getValues
 * @description Returns the rectangular grid of values for this range.
 * @returns {Object[][]}
 */

/**
 * @typedef {Object} Sheet
 */

/**
 * @method Sheet.getRange
 * @description Returns the range as specified in A1 notation or R1C1 notation.
 * @param {!String} a1Notation - A string as specified in A1 notation or R1C1 notation.
 * @returns {Range} the range at the designated location.
 */

/**
 * @function
 * @description Shorthand to obtain a Sheet by name.
 * @param {!String} name - The name of the sheet to retrieve,
 * @returns {Sheet} The specified sheet.
 */
function utilsGetSheet(name) {
    if (typeof name !== 'string' || !name.length) throw new Error('[getSheet] name');
    return SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(name);
}

/**
 * @function
 * @description Convert a values matrix into a JSON-compliant object.
 * @param {!Array} keys - The property names to be used as headers of given values.
 * @param {!Object[][]} values - Values obtained from a getRange() method.
 * @returns {Object} - A key-value representation.
 */
function utilsValuesToObject(keys, values) {
    return values.reduce(function reducerRows(rows, cols) {
        const row = Object
            .keys(cols)
            .reduce(function reducerCols(obj, key, i) {
                obj[keys[i]] = cols[key] instanceof Date
                    ? cols[key].getTime()
                    : cols[key];
                return obj;
            }, {});
        // Logger.log(row);
        return rows.concat(row);
    }, []);
}

/**
 * @function
 * @description Obtain valid data from a sheet cofiguration.
 * @param {!Object} config - A Sheet configuration.
 * @param {!String} config.name - The sheet name.
 * @param {!String} config.range - A named range where to get the data.
 * @param {!Array} config.keys - The map that will be used to convert column names.
 * @returns {Object[]} The corresponding data matrix in a JSON-compatible object.
 */
function utilsGetSheetData(config) {
    const values = utilsGetSheet(config.name)
        .getRange(config.range)
        .getValues();
    return utilsValuesToObject(config.keys, values);
}
