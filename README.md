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

| Color   | Meaning          |
| ------- | ---------------- |
| Green   | Truthy Primitive |
| Red     | Falsy Primitive  |
| Cyan    | Full Object      |
| Yellow  | Empty Object     |
| Magenta | Function         |

As this is using [Chalk](https://github.com/chalk) for console colors, the color support control is automatic, but you can still override it this way:

```js
const chalk = require("chalk"); // Chalk v4.1.2
chalk.level = 0; // No color
```

💡 See: [chalk # chalk.level](https://github.com/chalk/chalk#chalklevel)

## 🔣 Symbols

| Symbol | Meaning          |
| ------ | ---------------- |
| ◆      | Truthy Primitive |
| ◇      | Falsy Primitive  |
| ●      | Full Object      |
| ○      | Empty Object     |
| ◉      | Function         |
| Ø      | No Class         |
| →      | Value            |

## 💠 Examples

| Input       | Category         | Output                       | Output Color |
| ----------- | ---------------- | ---------------------------- | ------------ |
| `1n`        | Truthy Primitive | `◆ BigInt → 1`               | Green        |
| `NaN`       | Falsy Primitive  | `◇ Number → NaN`             | Red          |
| `undefined` | Falsy Primitive  | `◇ Ø → undefined`            | Red          |
| `{ a:"" }`  | Full Object      | `● Object → {1}`             | Cyan         |
| `{}`        | Empty Object     | `○ Object → {}`              | Yellow       |
| `() => ""`  | Function         | `◉ Function → (anonymous)()` | Magenta      |

# 📃 License

[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
