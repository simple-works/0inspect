# 👀 0inspect

[![NPM version](https://badge.fury.io/js/0inspect.svg)](https://npmjs.org/package/0inspect)

Simple utility for displaying a pretty eye-friendly colorful representation of an object for inspection purposes 👮.

![Screenshot](./screenshot.jpg?raw=true)

## 📥 Install

```
npm i 0inspect
```

## 🏁 Use

```js
const inspect = require("0inspect");
// or const { inspect, log } = require("0inspect");

const objString = inspect(someObj);
console.log(objString);

// or shorter
inspect.log(someObj);
```

## 📕 API

`inspect(obj?: Any, options?: Object);`

- `obj: Any`: Object to inspect.
- `options: Object`: Options object.
  - `depth: Number`: Object nesting depth. _Default: `10`_.

`inspect.log(obj?: Any, options?: Object);`

- Just a wrapper for `console.log(inspect(obj, options))`.

## 🎨 Colors

As this is using [Chalk](https://github.com/chalk) for console colors, the color support control is automatic, but you can still override it this way:

```js
const chalk = require("chalk"); // Chalk v4.1.2
chalk.level = 0; // No color
```

💡 See: [chalk # chalk.level](https://github.com/chalk/chalk#chalklevel)

## 📍 Symbols

| Symbol | Meaning          | Example (Input) | Example (Output)             |
| ------ | ---------------- | --------------- | ---------------------------- |
| ◆      | Truthy Primitive | `1n`            | `◆ BigInt → 1`               |
| ◇      | Falsy Primitive  | `NaN`           | `◇ Number → NaN`             |
| ●      | Full Object      | `{ a:"" }`      | `● Object → {1}`             |
| ○      | Empty Object     | `{}`            | `○ Object → {}`              |
| ◉      | Function         | `() => ""`      | `◉ Function → (anonymous)()` |
| Ø      | No Class         | `undefined`     | `◇ Ø → undefined`            |
| →      | Value            |

# 📃 License

[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
