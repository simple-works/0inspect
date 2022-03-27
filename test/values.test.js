///══════════════════════════════════════════════════════════════════════════════
// ■ Test-Values (values.test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Test values from all data types.
//══════════════════════════════════════════════════════════════════════════════
const { rectInstObj, rectLittObj } = require("./objects.test");

//──────────────────────────────────────────────────────────────────────────────
// ► Void
//──────────────────────────────────────────────────────────────────────────────
exports.void = [undefined];

//──────────────────────────────────────────────────────────────────────────────
// ► Booleans
//──────────────────────────────────────────────────────────────────────────────
exports.booleans = [
  false,
  true,
  Boolean(false),
  Boolean(true),
  new Boolean(false),
  new Boolean(true),
];

//──────────────────────────────────────────────────────────────────────────────
// ► Numbers
//──────────────────────────────────────────────────────────────────────────────
exports.numbers = [
  0,
  1_000_000,
  Number(0),
  Number(1_000_000),
  new Number(0),
  new Number(1_000_000),
  Infinity,
  NaN,
];

//──────────────────────────────────────────────────────────────────────────────
// ► BigInts
//──────────────────────────────────────────────────────────────────────────────
exports.bigints = [0n, 1_000_000n, BigInt(0), BigInt(1_000_000)];

//──────────────────────────────────────────────────────────────────────────────
// ► Strings
//──────────────────────────────────────────────────────────────────────────────
exports.strings = [
  "",
  "Peace be upon You!",
  String(""),
  String("Peace be upon You!"),
  new String(),
  new String("Peace be upon You!"),
];

//──────────────────────────────────────────────────────────────────────────────
// ► Symbols
//──────────────────────────────────────────────────────────────────────────────
exports.symbols = [Symbol(), Symbol("Symbol of Peace")];

//──────────────────────────────────────────────────────────────────────────────
// ► Objects
//──────────────────────────────────────────────────────────────────────────────
exports.objects = [
  null,
  {},
  rectLittObj,
  rectInstObj,
  Object(),
  Object(rectLittObj),
  Object(rectInstObj),
  new Object(rectLittObj),
  new Object(rectInstObj),
];

//──────────────────────────────────────────────────────────────────────────────
// ► Arrays
//──────────────────────────────────────────────────────────────────────────────
exports.arrays = [
  [],
  [undefined, undefined, undefined],
  [null, null, null],
  [{}, {}, {}],
  [undefined, null, {}],
  [
    undefined,
    null,
    {},
    rectLittObj,
    rectInstObj,
  ],
];

//──────────────────────────────────────────────────────────────────────────────
// ► Functions
//──────────────────────────────────────────────────────────────────────────────
exports.functions = [
  () => {},
  () => "Returned by a peaceful anonymous arrow function",
  function () {},
  function () { return "Returned by a peaceful anonymous normal function"; },
  function emptyFn() {},
  function fn() {
    return "Returned by a peaceful named normal function";
  },
];
