/* globals utilsGetSheet, utilsGetSheetData, configsGet, utilsValuesToObject */

/** @class */
function Settings() {
    this.name = 'Settings';
    this.range = 'A:C';
    this.keys = [
        'id',
        'value',
        'description',
    ];

    /**
     * @typedef {Object} Setting
     * @property {String} id - An unique identifier.
     * @property {any} value - The setting value.
     * @property {String} description - A text describing the setting.
     */

    /** @returns {Sheet} The corresponding sheet instance */
    this.sheet = function sheet() { return utilsGetSheet(this.name); };

    /** @returns {Setting} Returns a JSON-compatible settings object */
    this.data = function data() { return utilsGetSheetData(this); };
}

/**
 * @function settingsGet
 * @description Returns given setting name's value
 * @returns {Setting} - The settings array.
 */
function settingsGet() {
    const config = new Settings();
    return config
        .data()
        .reduce(function reducer(acc, setting) {
            acc[setting.id] = setting.value;
            return acc;
        }, {});
}
