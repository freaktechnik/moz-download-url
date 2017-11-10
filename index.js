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
 * @enum {string}
 * @readonly
 */
exports.PRODUCTS = {
    THUNDERBIRD: "thunderbird",
    FIREFOX: "firefox",
    FIREFOX_FOR_ANDROID: "fennec"
};

/**
 * Available platforms.
 * @enum {string}
 * @readonly
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
 * @enum {string}
 * @readonly
 */
exports.FIREFOX = {
    LATEST: "firefox-latest-ssl",
    LATEST_STUB: "firefox-stub",
    LATEST_ESR: "firefox-esr-latest-ssl",
    LATEST_BETA: "firefox-beta-latest-ssl",
    LATEST_BETA_STUB: "firefox-beta-stub",
    LATEST_DEVEDITION: "firefox-devedition-latest-ssl",
    LATEST_DEVEDITION_STUB: "firefox-devedition-stub",
    LATEST_NIGHTLY: "firefox-nightly-latest-l10n-ssl",
    LATEST_NIGHTLY_STUB: "firefox-nightly-stub"
};

/**
 * Available latest versions for Firefox for Android. Only supports the Android
 * platforms.
 * @enum {string}
 * @readonly
 */
exports.FIREFOX_FOR_ANDROID = {
    LATEST: "fennec-latest",
    LATEST_BETA: "fennec-beta-latest"
};

/**
 * Available Thunderbird latest versions. Doesn't support the Android platforms.
 * @enum {string}
 * @readonly
 */
exports.THUNDERBIRD = {
    LATEST: "thunderbird-latest",
    LATEST_BETA: "thunderbird-beta-latest"
};

/**
 * Returns a product identifier for a specific version.
 *
 * @param {string} product - A product value from {@link module:moz-download-url.PRODUCTS}.
 * @param {string} version - A Firefox version string. Typically only supports
 *                              release and beta versions (example: 49.0b1).
 * @returns {string} A product identifier.
 */
exports.getProductVersion = function(product, version) {
    return `${product}-${version}-SSL`;
};

/**
 * Create an URL to download a mozilla product from.
 *
 * @param {string} product - A product identifier from one of the product enums.
 * @param {string} os - An OS indentifier from {@link module:moz-download-url.PLATFORMS}.
 * @param {string} lang - Language code for the product to download. Android
 *                           also supports "multi".
 * @returns {string} URL to download the product from.
 */
exports.build = function(product, os, lang) {
    return `https://download.mozilla.org/?product=${product}&os=${os}&lang=${lang}`;
};
