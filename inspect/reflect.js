//══════════════════════════════════════════════════════════════════════════════
// ■ Reflect (reflect.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Retrieve information about data types.
//══════════════════════════════════════════════════════════════════════════════
const check = require("check-types");
const style = require("./style");

//──────────────────────────────────────────────────────────────────────────────
// ● Reflect
//──────────────────────────────────────────────────────────────────────────────
function reflect(arg, options = {}) {
  check.assert.object(options);
  const { style: stylize = true } = options;
  const reflection = {
    value: undefined,
    type: "",
    assigned: false,
    className: "",
    category: "",
    empty: "",
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
    reflection.category = "object";
    reflection.empty = false;
    reflection.string = check.string(arg.valueOf()) ? `"${arg}"` : String(arg);
  }
  return stylize ? style(reflection) : reflection;
}

//──────────────────────────────────────────────────────────────────────────────
// ● Check-Accessors
//──────────────────────────────────────────────────────────────────────────────
function checkAccessors(obj, key) {
  const propDesc = Object.getOwnPropertyDescriptor(obj, key);
  return {
    all: !("value" in propDesc),
    getter: ("get" in propDesc) && propDesc.get,
    setter: ("set" in propDesc) && propDesc.set
  }
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = reflect;
