//══════════════════════════════════════════════════════════════════════════════
// ■ Stringify (stringify.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Build styled string from reflection object.
//══════════════════════════════════════════════════════════════════════════════
const chalk = require("chalk");
const check = require("check-types");
const { EOL } = require("os");
const reflect = require("./reflect");
const icons = require("./icons");

//──────────────────────────────────────────────────────────────────────────────
// ● Stringify
//──────────────────────────────────────────────────────────────────────────────
function stringify(obj, options = {}) {
  const { name = "", depth = 10 } = options;
  check.assert.string(name);
  check.assert.integer(depth);
  check.assert.greaterOrEqual(depth, 0);
  const { category, type, className, string, icon, color, subColor } =
    reflect(obj);
  const prefix = chalk`{${color} ${icon}}`;
  const key = chalk`{${subColor} ${name ? `${name} : ` : ""}${
    className || icons.misc.na
  }}`;
  const value = chalk`{${color} ${string}}`;
  let resultString = `${prefix} ${key} ${icons.misc.is} ${value} ${EOL}`;
  if (type === "object") {
    for (const key in obj) {
      if (depth > 0) {
        resultString += "   ";
        resultString += stringify(obj[key], { name: key, depth: depth - 1 });
      }
    }
  }
  return resultString;
}

//──────────────────────────────────────────────────────────────────────────────
// ● Str-Tag
//──────────────────────────────────────────────────────────────────────────────
global.str = function str(strings, obj, name, depth) {
  return `${strings[0]}${stringify(obj, { name, depth })}`;
};

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = stringify;