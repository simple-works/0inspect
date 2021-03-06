///══════════════════════════════════════════════════════════════════════════════
// ■ Test (test/index.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Test entry point.
//══════════════════════════════════════════════════════════════════════════════
const inspect = require("../index");
const values = require("./values.test");

//──────────────────────────────────────────────────────────────────────────────
// ● Test
//──────────────────────────────────────────────────────────────────────────────
function test() {
  for (const key in values) {
    // if (key !== "objects") continue;
    console.log("─".repeat(80));
    console.log("■", key, ":");
    console.log("-".repeat(80));
    for (const value of values[key]) {
      inspect.log(value);
    }
    console.log();
  }
}

//──────────────────────────────────────────────────────────────────────────────
// ► Execute
//──────────────────────────────────────────────────────────────────────────────
process.stdout.write("\x1Bc");
test();
