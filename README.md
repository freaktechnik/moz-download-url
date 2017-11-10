# moz-download-url

[![Greenkeeper badge](https://badges.greenkeeper.io/freaktechnik/moz-download-url.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/freaktechnik/moz-download-url.svg?branch=master)](https://travis-ci.org/freaktechnik/moz-download-url) [![codecov](https://codecov.io/gh/freaktechnik/moz-download-url/branch/master/graph/badge.svg)](https://codecov.io/gh/freaktechnik/moz-download-url) [![Dependency Status](https://dependencyci.com/github/freaktechnik/moz-download-url/badge)](https://dependencyci.com/github/freaktechnik/moz-download-url)

Generates an URL to download Mozilla products from.

## Usage
The module exports a `build()` method to create the URL with.
It takes three arguments:

 - A string identifying the product to download (one of the product release channel constants)
 - A string identifying the OS (one of the `PLATFORMS` constants)
 - A string identifying the language (usually in the form of xx-XX)

There are constants for good values for product and OS, however there are
possible other supported values.

## Example
```js
var mdu = require("moz-download-url");

// Get the URL to download the latest English (US) Firefox release for a 64-bit
// Linux.
mdu.build(mdu.FIREFOX.LATEST, mdu.PLATFORMS.LINUX64, "en-US");
```

## Why another package for this?
Yes, there already are a plethora of packages out there to generate such links,
like [mozilla-get-url](https://www.npmjs.com/package/mozilla-get-url) and others.
However with the switch from FTP to AWS most of those solutions broke. You can't
use FTP clients anymore and you can't use the latest folders anymore. So if you
don't want to do a lot of HTML parsing you have to use the bouncer at
download.mozilla.org. Which is exactly what this package does. However
download.mozilla.org is very shallow in comparison to a file system. There are
only three relevant parameters. This package only handles those three parameters.
More "high level" packages like mozilla-get-url take more arguments and support
more products and builds. So this is just a really low-level way of making URLs
to download Firefox or Thunderbird with.

I hope the other modules will eventually catch up and hopefully even use this
module as a base for the download.mozilla.org links.

## License
This package is licensed under the [MPL v2.0](LICENSE).
