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

  test("Coverts number 4 roman numeral IV", () => {
    expect(decToRoman(4)).toBe("IV");
  });

  test("Coverts number 5 roman numeral V", () => {
    expect(decToRoman(5)).toBe("V");
  });


  test("Coverts number 6 roman numeral VI", () => {
    expect(decToRoman(6)).toBe("VI");
  });

  test("Coverts number 7 roman numeral VI", () => {
    expect(decToRoman(7)).toBe("VII");
  });

  test("Coverts number 8 roman numeral VIII", () => {
    expect(decToRoman(8)).toBe("VIII");
  });

  test("Coverts number 9 roman numeral IX", () => {
    expect(decToRoman(9)).toBe("IX");
  });
