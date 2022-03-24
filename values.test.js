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
      attrA: "A",
      attrB: "B",
      attrC: {
        cAttrX: "X",
        cFuncZ() {
          return "Z";
        },
      },
      set sttrA(val) {
        this.a = val;
      },
      get gttrA() {
        return this.a;
      },
      funcO() {
        return "O";
      },
    },
    new Object(),
    new Object({ attrA: "A", attrB: "B" }),
  ],
  arrays: [
    [],
    [undefined, undefined, undefined],
    [null, null, null],
    [{}, {}, {}],
    [undefined, null, {}],
    [
      {
        attrA: "A",
        attrB: "B",
        attrC: {
          cAttrX: "X",
          cFuncZ() {
            return "Z";
          },
        },
        get gttrX() {
          return "X";
        },
        funcO() {
          return "O";
        },
      },
      null,
      {
        attrM: "M",
        attrN: "N",
      },
    ],
  ],
  functions: [
    () => {},
    () => "Peaceful arrow function",
    function () {},
    function emptyFn() {},
    function fn() {
      return "Peaceful function";
    },
  ],
};
