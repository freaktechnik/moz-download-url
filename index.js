/**
 * download.mozilla.org URL builder
 * @author Martin Giger
 * @license MPL-2.0
 * @module moz-download-url
 */
"use strict";

/**
 * Available platforms.
 */
exports.PLATFORMS = {
    WIN32: "win",
    WIN64: "win64",
    LINUX32: "linux",
    LINUX64: "linux64",
    MACOSX: "osx"
};

/**
 * Available Firefox latest versions.
 */
exports.FIREFOX = {
    LATEST: "firefox-latest",
    LATEST_ESR: "firefox-esr-latest",
    LATEST_BETA: "firefox-beta-latest",
    LATEST_AURORA: "firefox-aurora-latest",
    LATEST_NIGHTLY: "firefox-nightly-latest"
};

/**
 * Available Thunderbird latest versions.
 */
exports.THUNDERBIRD = {
    LATEST: "thunderbird-latest",
    LATEST_BETA: "thunderbird-beta-latest"
};

/**
 * Create an URL to download a mozilla product from.
 * @argument {string} product - A product identifier. Use the constants for help.
 * @argument {string} os - An OS indentifier. Use the constants for help.
 * @argument {string} lang - Language code for the product to download.
 * @return {string} URL to download the product from.
 */
exports.build = function(product, os, lang) {
    return "https://download.mozilla.org/?product="+product+"&os="+os+"&lang="+lang;
};
