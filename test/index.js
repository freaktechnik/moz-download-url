import test from 'ava';
import mdu from '../';


function checkConstName(t, constName) {
    t.is(constName, constName.toUpperCase());
    t.false(constName.includes("-"));
}
checkConstName.title = (providedTitle, constName) => `Checking for correct naming of constant ${providedTitle}.${constName}`;

for(let c in mdu.PLATFORMS) {
    test(checkConstName, c);
}

for(let c in mdu.FIREFOX) {
    test(checkConstName, c);
}

for(let c in mdu.FIREFOX_FOR_ANDROID) {
    test(checkConstName, c);
}

for(let c in mdu.THUNDERBIRD) {
    test(checkConstName, c);
}

test("Check basic module anatomy", (t) => {
    const expectedProperties = {
        "PLATFORMS": "object",
        "FIREFOX": "object",
        "FIREFOX_FOR_ANDROID": "object",
        "THUNDERBIRD": "object",
        "build": "function"
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
