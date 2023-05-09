const Calculator = require('./calculator');

// Task 3 Tests
describe('Calculator Add Function', () => {
  test('should return 5', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });
  test('should return 100', () => {
    expect(Calculator.add(48, 52)).toBe(100);
  });
  test('should return 32', () => {
    expect(Calculator.add(12, 10)).not.toBe(5);
  });
});

describe('Calculator Subtract Function', () => {
  test('should return 5', () => {
    expect(Calculator.subtract(6, 1)).toBe(5);
  });
  test('should return 100', () => {
    expect(Calculator.subtract(480, 380)).toBe(100);
  });
  test('should return 32', () => {
    expect(Calculator.subtract(50, 18)).toBe(32);
  });
});

describe('Calculator Multiply Function', () => {
  test('should return 6', () => {
    expect(Calculator.multiply(6, 1)).toBe(6);
  });
  test('should return 120', () => {
    expect(Calculator.multiply(40, 3)).toBe(120);
  });
  test('should return 24', () => {
    expect(Calculator.multiply(4, 6)).toBe(24);
  });
});

describe('Calculator Divide Function', () => {
  test('should return 2', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });
  test('should return 4', () => {
    expect(Calculator.divide(40, 10)).toBe(4);
  });
  test('should return 3', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });
});
