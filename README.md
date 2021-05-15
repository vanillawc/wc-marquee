<h1 align="center">&lt;wc-marquee&gt; The Marquee Tag as a Web Component</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-marquee/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-marquee" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-marquee"><img src="https://badgen.net/npm/v/@vanillawc/wc-marquee" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-marquee"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-marquee" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillawc/wc-marquee/actions"><img src="https://github.com/vanillawc/wc-marquee/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-marquee/actions"><img src="https://github.com/vanillawc/wc-marquee/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-marquee"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-marquee
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-marquee/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-marquee@1/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/xHimVOHvwKeM64huCe18?sv=1&pm=1)

## Usage

**Attributes**

- `party` - enable party mode

### Basic Usage

```html
<wc-marquee>
This text will marquee across the screen
</wc-marquee>
```

### Party Mode

```html
<wc-marquee party>
This will demonstrate the resplendent joy of HTML in its prime
</wc-marquee>
```

### Styling

Styling can be done using standard css attributes.

```html
<wc-marquee style="font-family: sans-serif;">
This will demonstrate the resplendent joy of HTML in its prime
</wc-marquee>
```

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
