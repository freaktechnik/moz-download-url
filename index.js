/**
 * download.mozilla.org URL builder
 * @author Martin Giger
 * @license MPL-2.0
 * @module moz-download-url
 * @todo Check if platform is available for the given product.
 */
"use strict";

/**
 * Available products
 */
exports.PRODUCTS = {
    THUNDERBIRD: "thunderbird",
    FIREFOX: "firefox",
    FIREFOX_FOR_ANDROID: "fennec"
};

/**
 * Available platforms.
 */
exports.PLATFORMS = {
    WIN32: "win",
    WIN64: "win64",
    LINUX32: "linux",
    LINUX64: "linux64",
    MACOSX: "osx",
    ANDROID: "android",
    ANDROID_X86: "android-x86",
    ANDROID_API9: "android-api-9"
};

/**
 * Available Firefox latest versions. Doesn't support the Android platforms.
 */
exports.FIREFOX = {
    LATEST: "firefox-latest",
    LATEST_ESR: "firefox-esr-latest",
    LATEST_BETA: "firefox-beta-latest",
    LATEST_AURORA: "firefox-aurora-latest",
    LATEST_NIGHTLY: "firefox-nightly-latest"
};

/**
 * Available latest versions for Firefox for Android. Only supports the Android
 * platforms.
 */
exports.FIREFOX_FOR_ANDROID = {
    LATEST: "fennec-latest",
    LATEST_BETA: "fennec-beta-latest"
};

/**
 * Available Thunderbird latest versions. Doesn't support the Android platforms.
 */
exports.THUNDERBIRD = {
    LATEST: "thunderbird-latest",
    LATEST_BETA: "thunderbird-beta-latest"
};

/**
 * Returns a product identifier for a specific version.
 *
 * @param {string} product - A product constant from the PRODUCTS enum.
 * @param {string} version - A Firefox version string. Typically only supports
 *                              release and beta versions (example: 49.0b1).
 * @returns {string} A product identifier.
 */
exports.getProductVersion = function(product, version) {
    return product + "-" + version;
};

/**
 * Create an URL to download a mozilla product from.
 *
 * @param {string} product - A product identifier. Use the constants for help.
 * @param {string} os - An OS indentifier. Use the constants for help.
 * @param {string} lang - Language code for the product to download. Android
 *                           also supports "multi".
 * @returns {string} URL to download the product from.
 */
exports.build = function(product, os, lang) {
    return "https://download.mozilla.org/?product="+product+"&os="+os+"&lang="+lang;
};
