const decToRoman = require("./convert_roman_numbers");

test("Coverts number 1 roman numeral I", () => {
  expect(decToRoman(1)).toBe("I");
});

test("Coverts number 2 roman numeral II", () => {
    expect(decToRoman(2)).toBe("II");
  });

  test("Coverts number 3 roman numeral III", () => {
    expect(decToRoman(3)).toBe("III");
  });
