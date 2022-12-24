const decToRoman = require("./convert_roman_numbers");

test("Coverts number 1 roman numeral I", () => {
  expect(decToRoman(1)).toBe("I");
});

