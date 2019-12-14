[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-marquee.svg)](https://github.com/vanillawc/wc-marquee/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-marquee)](https://www.npmjs.com/package/@vanillawc/wc-marquee)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-marquee)](https://www.npmjs.com/package/@vanillawc/wc-marquee)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-marquee/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-marquee)
[![Latest Status](https://github.com/vanillawc/wc-marquee/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-marquee/actions)
[![Release Status](https://github.com/vanillawc/wc-marquee/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-marquee/actions)

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