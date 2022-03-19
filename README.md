# 👀 0inspect

[![NPM version](https://badge.fury.io/js/0inspect.svg)](https://npmjs.org/package/0inspect)

Simple utility for displaying a pretty eye-friendly colorful representation of an object for inspection purposes.

![Screenshot](./screenshot.jpg?raw=true)

# 📥 Install

```
npm i 0inspect
```

# 🏁 Use

```js
const $inspect = require("0inspect");

$inspect(someObj);
```

# 📕 API

`$inspect(obj?: Any, options?: Object);`
- `obj: Any`: Object to inspect.
- `options: Object` Options object.
  - `color: Boolean`: If true, colorful output. Default: `true`.

# 📃 License

[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
