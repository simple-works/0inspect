///══════════════════════════════════════════════════════════════════════════════
// ■ Test-Values (values.test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     This file is for test purposes only.
//══════════════════════════════════════════════════════════════════════════════

///──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = {
  void: [undefined],
  booleans: [false, true, new Boolean(), new Boolean("Peace")],
  numbers: [0, 7_000_000_000, new Number(), new Number(7), Infinity, NaN],
  strings: ["", "Peace upon You!", new String(), new String("Peace")],
  symbols: [Symbol(), Symbol("Be in Peace :)")],
  objects: [
    null,
    {},
    {
      a: "A",
      b: "B",
      c: {
        x: "X",
        z() {
          return "Z";
        },
      },
      o() {
        return "O";
      },
    },
    new Object(),
    new Object({ a: "A", b: "B" }),
  ],
  arrays: [
    [],
    [undefined, undefined, undefined],
    [null, null, null],
    [{}, {}, {}],
    [undefined, null, {}],
    [
      {
        a: "A",
        b: "B",
        c: {
          x: "X",
          z() {
            return "Z";
          },
        },
        o() {
          return "O";
        },
      },
      null,
      {
        a: "A",
        b: "B",
      },
    ],
  ],
  functions: [
    () => {},
    () => "Peaceful arrow function",
    function () {},
    function fn() {},
    function fn() {
      return "Peaceful function";
    },
  ],
};
