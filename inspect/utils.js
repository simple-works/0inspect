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
  const hasGetter = Boolean(propDesc && propDesc.get);
  const hasSetter = Boolean(propDesc && propDesc.set);
  if (hasGetter && hasSetter) return "get/set";
  else if (hasGetter) return "get";
  else if (hasSetter) return "set";
  else return "";
};

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = { check, chalk, EOL };
