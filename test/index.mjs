import test from 'ava';
import * as mdu from '../index.js';

const EXPECTED_PROPERTIES = {
        "PLATFORMS": "object",
        "FIREFOX": "object",
        "THUNDERBIRD": "object",
        "build": "function",
        "PRODUCTS": "object",
        "getProductVersion": "function"
    },
    TOP_LEVEL_CONSTS = Object.keys(EXPECTED_PROPERTIES).filter((k) => EXPECTED_PROPERTIES[k] == "object");

function checkConstName(t, constName) {
    t.regex(constName, /^[\dA-Z_]+$/);
}
checkConstName.title = (providedTitle, constName) => `Checking for correct naming of constant ${providedTitle}.${constName}`;

function checkConstValue(t, constValue) {
    t.is(typeof constValue, "string");
    t.regex(constValue, /^[\da-z-]+$/);
}
checkConstValue.title = (providedTitle) => `Checking value of constant ${providedTitle}`;

for(const enumName of TOP_LEVEL_CONSTS) {
    test("mdu", checkConstName, enumName);
    for(const key in mdu[enumName]) {
        test(enumName, checkConstName, key);
        test(`${enumName}.${key}`, checkConstValue, mdu[enumName][key]);
    }
}

test("Check basic module anatomy", (t) => {
    for(const property in EXPECTED_PROPERTIES) {
        t.is(typeof mdu[property], EXPECTED_PROPERTIES[property], `type of ${property}`);
    }
});

test("All const names in PRODUCTS should also be top-level consts", (t) => {
    for(const name in mdu.PRODUCTS) {
        t.true(name in mdu);
        t.not(name, "PRODUCTS");
        t.not(name, "PLATFORMS");
    }
});

test("Products should at least include LATEST and LATEST_BETA", (t) => {
    for(const key in mdu.PRODUCTS) {
        t.true("LATEST" in mdu[key]);
        t.true("LATEST_BETA" in mdu[key]);
    }
});

test("Build URL with empty strings", (t) => {
    t.is(mdu.build("", "", ""), "https://download.mozilla.org/?product=&os=&lang=");
});

test("Build URL", (t) => {
    t.is(mdu.build("te-st", "foo", "ba-rz"), "https://download.mozilla.org/?product=te-st&os=foo&lang=ba-rz");
});

test("Build version identifier beta", (t) => {
    t.is(mdu.getProductVersion("test", "49.0b1"), "test-49.0b1-SSL");
});

test("Build version identifier release", (t) => {
    t.is(mdu.getProductVersion("test", "48.0"), "test-48.0-SSL");
});
