const tests = require("./index");
const capitalize = tests.capitalize;
const reverseString = tests.reverseString;
const calculator = tests.calculator;
const caesarCipher = tests.caesarCipher;

test("capitalize", () => {
  expect(capitalize("yes")).toBe("Yes");
});

test("reverse string", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.multiply(3, 6)).toBe(18);
});

test("caesar cipher", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
