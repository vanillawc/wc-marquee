[![GitHub release](https://img.shields.io/github/v/release/vanillawc/wc-marquee.svg)](https://github.com/vanillawc/wc-marquee/releases)
[![npm](https://badgen.net/npm/v/@vanillawc/wc-marquee)](https://www.npmjs.com/package/@vanillawc/wc-marquee)
[![downloads](https://badgen.net/npm/dt/@vanillawc/wc-marquee)](https://www.npmjs.com/package/@vanillawc/wc-marquee)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-marquee/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-marquee)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-marquee/master/LICENSE)
[![Actions Status](https://github.com/vanillawc/wc-marquee/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-marquee/actions)

A Vanilla Web Component to ressurect our dearly beloved and sorely missed `<marquee>` element

 <!-- TODO: Add video graphic here -->

-----

## Installation

```sh
npm i @vanillawc/wc-marquee
```

Then import the `index.js` file at the root of the package.

-----

## Usage

### Add some content to the body of the marquee

```html
<wc-marquee>
This text will marquee across the screen
</wc-marquee>
```

***Demo: [WC-Marquee - Demo][]***

### Enable party mode

```html
<wc-marquee party>
This will demonstrate the resplendent joy of HTML in its prime
</wc-marquee>
```

***Demo: [WC-Marquee - 'party'][]***

### Styling

Stying can be done using standard css attributes.

```html
<wc-marquee style="font-family: sans-serif;">
This will demonstrate the resplendent joy of HTML in its prime
</wc-marquee>
```

[WC-Marquee - Demo]: https://vanillawc.github.io/wc-marquee/demo/basic-usage.html
[WC-Marquee - 'party']: https://vanillawc.github.io/wc-marquee/demo/party-attribute.html