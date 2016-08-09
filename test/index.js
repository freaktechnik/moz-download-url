import test from 'ava';
import mdu from '../';

const TOP_LEVEL_CONSTS = [ "PLATFORMS", "FIREFOX", "FIREFOX_FOR_ANDROID", "THUNDERBIRD", "PRODUCTS" ];

function checkConstName(t, constName) {
    t.regex(constName, /^[A-Z0-9_]+$/);
}
checkConstName.title = (providedTitle, constName) => `Checking for correct naming of constant ${providedTitle}.${constName}`;

function checkConstValue(t, constValue) {
    t.is(typeof constValue, "string");
}
checkConstValue.title = (providedTitle) => `Checking value of constant ${providedTitle}`;

for(const n of TOP_LEVEL_CONSTS) {
    test(checkConstName, n);
    for(const c in mdu[n]) {
        test(n, checkConstName, c);
        test(`${n}.${c}`, checkConstValue, mdu[n][c]);
    }
}

test("Check basic module anatomy", (t) => {
    const expectedProperties = {
        "PLATFORMS": "object",
        "FIREFOX": "object",
        "FIREFOX_FOR_ANDROID": "object",
        "THUNDERBIRD": "object",
        "build": "function",
        "PRODUCTS": "object",
        "getProductVersion": "function"
    };

    for(let p in expectedProperties) {
        t.is(typeof mdu[p], expectedProperties[p]);
    }
});

test("All const names in PRODUCTS should also be top-level consts", (t) => {
    for(const c in mdu.PRODUCTS) {
        t.true(c in mdu);
    }
});

test("Products should at least include LATEST and LATEST_BETA", (t) => {
    for(const c in mdu.PRODUCTS) {
        t.true("LATEST" in mdu[c]);
        t.true("LATEST_BETA" in mdu[c]);
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
