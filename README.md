# lerp-css-string

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Interpolates the values between two CSS strings, returning a new string.

```js
var lerp = require('lerp-css-string')

lerp('10px', '0px', 0.5)                     // -> '5px'
lerp('100%', '50%', 0.5)                     // -> '75%'
lerp('100px 25%', '50px 20%', 0.5)           // -> '75px 22.5%'
lerp('360, 50%, 25%', '200, 100%, 50%', 0.5) // -> '280 75% 37.5%'
```

## Usage

[![NPM](https://nodei.co/npm/lerp-css-string.png)](https://nodei.co/npm/lerp-css-string/)

#### `lerp(str1, str2, alpha)`

Lerps between `str1` and `str2` based on the given `alpha` (typically 0.0 to 1.0), returning a new string with interpolated values and their units. Numbers and units are expected to be tightly packed (e.g. `50px`).

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/lerp-css-string/blob/master/LICENSE.md) for details.
