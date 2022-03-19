///══════════════════════════════════════════════════════════════════════════════
// ■ Test (test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     This file is for test purposes only.
//══════════════════════════════════════════════════════════════════════════════
const inspect = require("./index");
const values = require("./values.test");

//──────────────────────────────────────────────────────────────────────────────
// ● Test
//──────────────────────────────────────────────────────────────────────────────
function test() {
  for (const key in values) {
    console.log("─".repeat(80));
    console.log("■", key, ":");
    console.log("-".repeat(80));
    for (const value of values[key]) {
      inspect(value);
    }
    console.log();
  }
}

//──────────────────────────────────────────────────────────────────────────────
// ► Execute
//──────────────────────────────────────────────────────────────────────────────
process.stdout.write("\x1Bc");
test();
