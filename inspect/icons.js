//══════════════════════════════════════════════════════════════════════════════
// ■ Icons (icons.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     UTF-8 special characters used as icons.
//══════════════════════════════════════════════════════════════════════════════

//──────────────────────────────────────────────────────────────────────────────
// ● Icons
//──────────────────────────────────────────────────────────────────────────────
const icons = {
  primitive: {
    full: "◆", // Black Diamond
    empty: "◇", // WhiteDiamond
  },
  object: {
    full: "●", // Black Circle
    empty: "○", // White Circle
    special: "◉", // Fisheye
  },
  misc: {
    yes: "✓", // Check Mark
    no: "✕", // Multiplication X
    na: "Ø", //  Ballot Box With X
    is: "→" // Rightwards Arrow
  },
};

//──────────────────────────────────────────────────────────────────────────────
// ► Exports
//──────────────────────────────────────────────────────────────────────────────
module.exports = icons;
