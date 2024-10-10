const {
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
} = require("./functions");

test("Capitalize", () => {
  expect(capitalize("daniel")).toEqual("Daniel");
});

test("Reverse String", () => {
  expect(reverseString("Hello World!!!")).toEqual("!!!dlroW olleH");
});

test("Calculator Operations", () => {
  expect(calculator.add(4, 5)).toBe(9);
  expect(calculator.subtract(5, 13)).toBe(-8);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.multiply(10, 4)).toBe(40);
});

test("Ceaser Cipher", () => {
  expect(ceaserCipher("Hello World", 3)).toBe("Khoor Zruog");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
