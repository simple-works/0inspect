//══════════════════════════════════════════════════════════════════════════════
// ■ Stringify (stringify.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Build styled string from reflection object.
//══════════════════════════════════════════════════════════════════════════════
const { check, chalk, EOL } = require("./utils");
const reflect = require("./reflect");
const icons = require("./icons");

//──────────────────────────────────────────────────────────────────────────────
// ● Stringify
//──────────────────────────────────────────────────────────────────────────────
function stringify(obj, options = {}) {
  const { name = "", tag = "", depth = 10, tab = {} } = options;
  check.assert.string(name);
  check.assert.integer(depth);
  check.assert.greaterOrEqual(depth, 0);
  check.assert.object(tab);
  if (check.not.integer(tab.char)) tab.char = "   ";
  if (check.not.integer(tab.length)) tab.length = 1;
  const { category, type, className, string, icon, color, subColor } =
    reflect(obj);
  const prefix = chalk`{${color} ${icon}}`;
  const key = chalk`{${subColor} ${tag ? `[${tag}] ` : ""}${name ? `${name} : ` : ""}${
    className || icons.misc.na
  }}`;
  const value = chalk`{${color} ${string}}`;
  let resultString = `${prefix} ${key} ${icons.misc.is} ${value}`;
  if (depth > 0 && type === "object") {
    for (const key in obj) {
      resultString += `${EOL}${tab.char.repeat(tab.length)}`;
      resultString += stringify(obj[key], {
        name: key,
        tag: check.accessor(obj, key),
        depth: depth - 1,
        tab: {
          length: tab.length + 1,
        },
      });
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
