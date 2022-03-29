//══════════════════════════════════════════════════════════════════════════════
// ■ Reflect (reflect.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Retrieve information about data types.
//══════════════════════════════════════════════════════════════════════════════
const { check } = require("./utils");
const style = require("./style");

//──────────────────────────────────────────────────────────────────────────────
// ● Reflect
//──────────────────────────────────────────────────────────────────────────────
function reflect(arg, options = {}) {
  check.assert.object(options);
  const { style: stylize = true } = options;
  const reflection = {
    value: undefined,
    assigned: false,
    empty: false,
    type: "",
    className: "",
    category: "",
    string: "",
  };
  reflection.value = arg;
  reflection.type = typeof arg;
  reflection.assigned = check.assigned(arg);
  if (reflection.assigned) reflection.className = arg.constructor.name;
  if (check.object(arg)) {
    reflection.category = "object";
    reflection.empty = check.emptyObject(arg);
    reflection.string = reflection.empty
      ? "{}"
      : `{${Object.getOwnPropertyNames(arg).length}}`;
  } else if (check.array(arg)) {
    reflection.category = "array";
    reflection.empty = check.emptyArray(arg);
    reflection.string = reflection.empty ? "[]" : `[${arg.length}]`;
  } else if (check.primitive(arg)) {
    reflection.category = "primitive";
    reflection.empty = !Boolean(arg);
    reflection.string = check.string(arg) ? `"${arg}"` : String(arg);
  } else if (check.function(arg)) {
    reflection.category = "function";
    reflection.string = arg.name ? `${arg.name}()` : `(anonymous)()`;
  } else {
    reflection.category = "?";
    reflection.empty = false;
    reflection.string = check.string(arg.valueOf()) ? `"${arg}"` : String(arg);
  }
  return stylize ? style(reflection) : reflection;
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = reflect;
