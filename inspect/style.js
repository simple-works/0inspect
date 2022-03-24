//══════════════════════════════════════════════════════════════════════════════
// ■ Style (style.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Generate strings, icons and colors for reflection object.
//══════════════════════════════════════════════════════════════════════════════
const check = require("check-types");
const icons = require("./icons");

//──────────────────────────────────────────────────────────────────────────────
// ● Style
//──────────────────────────────────────────────────────────────────────────────
function style(reflection) {
  check.assert.object(reflection);
  const style = {
    icon: "",
    color: "",
    subColor: "",
  };
  if (reflection.type === "object") {
    style.icon = reflection.empty ? icons.object.empty : icons.object.full;
  } else if (reflection.type === "function") {
    style.icon = icons.object.special;
  } else {
    style.icon = reflection.empty
      ? icons.primitive.empty
      : icons.primitive.full;
  }
  if (reflection.empty) {
    style.color = "red";
    style.subColor = "redBright";
  } else {
    style.color = "green";
    style.subColor = "greenBright";
  }
  return { ...reflection, ...style };
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = style;
