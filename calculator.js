// Task 3 Calculator Add Remove Multiply and Divide

const Calculator = {
  x: 6,
  y: 8,

  add() {
    return this.x + this.y;
  },

  subtract() {
    return this.x - this.y;
  },

  multiply() {
    return this.x * this.y;
  },

  divide() {
    return this.x / this.y;
  }
};

module.exports = Calculator;
