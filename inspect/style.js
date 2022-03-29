//══════════════════════════════════════════════════════════════════════════════
// ■ Style (style.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Generate strings, icons and colors for reflection object.
//══════════════════════════════════════════════════════════════════════════════
const { check } = require("./utils");
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
  if (reflection.category === "object" || reflection.category === "array") {
    if (reflection.empty) {
      style.icon = icons.object.empty;
      style.color = "yellow";
      style.subColor = "yellowBright";
    } else {
      style.icon = icons.object.full;
      style.color = "cyan";
      style.subColor = "cyanBright";
    }
  } else if (reflection.category === "function") {
    style.icon = icons.object.special;
    style.color = "magenta";
    style.subColor = "magentaBright";
  } else {
    if (reflection.empty) {
      style.icon = icons.primitive.empty;
      style.color = "red";
      style.subColor = "redBright";
    } else {
      style.icon = icons.primitive.full;
      style.color = "green";
      style.subColor = "greenBright";
    }

  }
  return { ...reflection, ...style };
}

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = style;
