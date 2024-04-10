/**
 * Download.mozilla.org URL builder.
 *
 * @module moz-download-url
 * @license MPL-2.0
 * @author Martin Giger
 * @todo Check if platform is available for the given product.
 */

/**
 * Available products.
 *
 * @readonly
 * @enum {string}
 */
export const PRODUCTS = {
    THUNDERBIRD: "thunderbird",
    FIREFOX: "firefox",
};

/**
 * Available platforms.
 *
 * @readonly
 * @enum {string}
 */
export const PLATFORMS = {
    WIN32: "win",
    WIN64: "win64",
    WIN64_AARCH64: "win64-aarch64",
    LINUX32: "linux",
    LINUX64: "linux64",
    MACOSX: "osx",
};

/**
 * Available Firefox latest versions. Doesn't support the Android platforms.
 *
 * @readonly
 * @enum {string}
 */
export const FIREFOX = {
    LATEST: "firefox-latest-ssl",
    LATEST_STUB: "firefox-stub",
    LATEST_MSI: "firefox-msi-latest-ssl",
    LATEST_PKG: "firefox-pkg-latest-ssl",
    LATEST_ESR: "firefox-esr-latest-ssl",
    LATEST_ESR_MSI: "firefox-esr-msi-latest-ssl",
    LATEST_ESR_MSIX: "firefox-esr-msix-latest-ssl",
    LATEST_ESR_PKG: "firefox-esr-pkg-latest-ssl",
    LATEST_BETA: "firefox-beta-latest-ssl",
    LATEST_BETA_STUB: "firefox-beta-stub",
    LATEST_BETA_MSI: "firefox-beta-msi-latest-ssl",
    LATEST_BETA_MSIX: "firefox-beta-msix-latest-ssl",
    LATEST_BETA_PKG: "firefox-beta-pkg-latest-ssl",
    LATEST_DEVEDITION: "firefox-devedition-latest-ssl",
    LATEST_DEVEDITION_STUB: "firefox-devedition-stub",
    LATEST_DEVEDITION_MSI: "firefox-devedition-msi-latest-ssl",
    LATEST_DEVEDITION_MSIX: "firefox-devedition-msix-latest-ssl",
    LATEST_NIGHTLY: "firefox-nightly-latest-l10n-ssl",
    LATEST_NIGHTLY_STUB: "firefox-nightly-stub",
    LATEST_NIGHTLY_MSI: "firefox-nightly-msi-latest-l10n-ssl",
    LATEST_NIGHTLY_PKG: "firefox-nightly-pkg-latest-l10n-ssl",
};

/**
 * Available Thunderbird latest versions. Doesn't support the Android platforms.
 *
 * @readonly
 * @enum {string}
 */
export const THUNDERBIRD = {
    LATEST: "thunderbird-latest",
    LATEST_MSIX: "thunderbird-msix-latest-ssl",
    LATEST_BETA: "thunderbird-beta-latest",
    LATEST_BETA_MSIX: "thunderbird-beta-msix-latest-ssl",
    LATEST_DAILY: "thunderbird-nightly-latest",
};

/**
 * Returns a product identifier for a specific version.
 *
 * @param {string} product - A product value from {@link module:moz-download-url.PRODUCTS}.
 * @param {string} version - A Firefox version string. Typically only supports
 *                              release and beta versions (example: 49.0b1).
 * @returns {string} A product identifier.
 */
export const getProductVersion = (product, version) => `${product}-${version}-SSL`;

/**
 * Create an URL to download a mozilla product from.
 *
 * @param {string} product - A product identifier from one of the product enums.
 * @param {string} os - An OS indentifier from {@link module:moz-download-url.PLATFORMS}.
 * @param {string} lang - Language code for the product to download. Android
 *                           also supports "multi".
 * @returns {string} URL to download the product from.
 */
export const build = (product, os, lang) => `https://download.mozilla.org/?product=${product}&os=${os}&lang=${lang}`;
