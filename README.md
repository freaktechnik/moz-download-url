# moz-download-url
Generates an URL to download Mozilla products from.

## Usage
The module exports a `build()` method to create the URL with.
It takes three arguments:

 - A string identifying the product to download
 - A string identifying the OS
 - A string identifying the language

There are constants for good values for product and OS, however there are
possible other supported values.

## Example
```js
var mdu = require("moz-download-url");

// Get the URL to download the latest english (US) Firefox release for a 64-bit
// Linux.
mdu.build(mdu.FIREFOX.LATEST, mdu.PLATFORMS.LINUX64, "en-US");
```
