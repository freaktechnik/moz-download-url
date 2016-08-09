import test from 'ava';
import mdu from '../';


function checkConstName(t, constName) {
    t.is(constName, constName.toUpperCase());
    t.false(constName.includes("-"));
}
checkConstName.title = (providedTitle, constName) => `Checking for correct naming of constant ${providedTitle}.${constName}`;

for(let c in mdu.PLATFORMS) {
    test("PLATFORMS", checkConstName, c);
}

for(let c in mdu.FIREFOX) {
    test("FIREFOX", checkConstName, c);
}

for(let c in mdu.FIREFOX_FOR_ANDROID) {
    test("FIREFOX_FOR_ANDROID", checkConstName, c);
}

for(let c in mdu.THUNDERBIRD) {
    test("THUNDERBIRD", checkConstName, c);
}

for(let c in mdu.PRODUCTS) {
    test("PRODUCTS", checkConstName, c);
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