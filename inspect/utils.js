//══════════════════════════════════════════════════════════════════════════════
// ■ Utilities (utils.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Common utilities.
//══════════════════════════════════════════════════════════════════════════════
const check = require("check-types");
const chalk = require("chalk");
const { EOL } = require("os");

//──────────────────────────────────────────────────────────────────────────────
// ● Check-Primitive (Monkey-Patch)
//──────────────────────────────────────────────────────────────────────────────
check.primitive = (function (checkPrimitive) {
  return function primitive(data) {
    return checkPrimitive.apply(check, arguments) || typeof data === "bigint";
  };
})(check.primitive);

//──────────────────────────────────────────────────────────────────────────────
// ● Check-Accessor (Extension)
//──────────────────────────────────────────────────────────────────────────────
check.accessor = function accessor(obj, key) {
  const propDesc = Object.getOwnPropertyDescriptor(obj, key);
  return {
    both: Boolean(propDesc && !("value" in propDesc)),
    getter: Boolean(propDesc && propDesc.get),
    setter: Boolean(propDesc && propDesc.set)
  }
};

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = { check, chalk, EOL };
