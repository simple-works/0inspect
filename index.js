///══════════════════════════════════════════════════════════════════════════════
// ■ Inspect (inspect/index.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Pretty string representation of object.
//══════════════════════════════════════════════════════════════════════════════
const stringify = require("./inspect/stringify");

//──────────────────────────────────────────────────────────────────────────────
// ● Inspect
//──────────────────────────────────────────────────────────────────────────────
function inspect(obj, depth = 10) {
  return stringify(obj, { depth });
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = inspect;
