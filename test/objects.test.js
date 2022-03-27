///══════════════════════════════════════════════════════════════════════════════
// ■ Test-Objects (objects.test.js)
//┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//     Test objects.
//══════════════════════════════════════════════════════════════════════════════

//──────────────────────────────────────────────────────────────────────────────
// ● Rectangle-Class
//──────────────────────────────────────────────────────────────────────────────
class Rectangle {
  _width = 0;
  _height = 0;
  _position = { x: 0, y: 0 };
  _childs = [];
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(value) {
    if (typeof value === "number" && value >= 0) {
      this._width = value;
    }
  }
  get width() {
    return this._width;
  }
  set height(value) {
    if (typeof value === "number" && value >= 0) {
      this._height = value;
    }
  }
  get height() {
    return this._height;
  }
  get area() {
    return this.width * this.height;
  }
  get perimeter() {
    return 2 * (this.width + this.height);
  }
  get diagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
  log() {
    console.log(this);
  }
  toString() {
    return `Rectangle ${this.width}x${this.height} with an area of ${this.area}, a perimeter of ${this.perimeter}, and a diagonal of ${this.diagonal}.`;
  }
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.area;
    if (hint === "string") return `${this.width}x${this.height}`;
    return `Rectangle`;
  }
}
exports.Rectangle = Rectangle;

//──────────────────────────────────────────────────────────────────────────────
// ● Rectangle-Class-Instance
//──────────────────────────────────────────────────────────────────────────────
exports.instObj = new Rectangle(128, 32);
exports.instObj._childs = [
  new Rectangle(1, 1),
  new Rectangle(2, 2),
  new Rectangle(4, 4),
  new Rectangle(8, 8),
  new Rectangle(16, 16),
];

//──────────────────────────────────────────────────────────────────────────────
// ● Rectangle-Litteral-Object
//──────────────────────────────────────────────────────────────────────────────
exports.littObj = {
  _width: 64,
  _height: 16,
  _position: { x: 0, y: 0 },
  _childs: [new Rectangle(), new Rectangle(), new Rectangle()],
  set width(value) {
    if (typeof value === "number" && value >= 0) {
      this._width = value;
    }
  },
  get width() {
    return this._width;
  },
  set height(value) {
    if (typeof value === "number" && value >= 0) {
      this._height = value;
    }
  },
  get height() {
    return this._height;
  },
  get area() {
    return this.width * this.height;
  },
  get perimeter() {
    return 2 * (this.width + this.height);
  },
  get diagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  },
  log() {
    console.log(this);
  },
  toString() {
    return `Rectangle ${this.width}x${this.height} with an area of ${this.area}, a perimeter of ${this.perimeter}, and a diagonal of ${this.diagonal}.`;
  },
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.area;
    if (hint === "string") return `${this.width}x${this.height}`;
    return "Rectangle";
  },
};
