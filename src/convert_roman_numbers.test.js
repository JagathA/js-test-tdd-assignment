const {decToRoman, romanToDec} = require("./convert_roman_numbers.js");
//const romanToDec = require("./convert_roman_numbers.js");

describe("Decimal to Roman", () => {
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

  test("Coverts number 10 roman numeral X", () => {
    expect(decToRoman(10)).toBe("X");
  });

  test("Coverts number 11 roman numeral XI", () => {
    expect(decToRoman(11)).toBe("XI");
  });

  test("Coverts number 14 roman numeral XIV", () => {
    expect(decToRoman(14)).toBe("XIV");
  });

  test("Coverts number 19 roman numeral XIX", () => {
    expect(decToRoman(19)).toBe("XIX");
  });

  test("Coverts number 20 roman numeral XX", () => {
    expect(decToRoman(20)).toBe("XX");
  });

  test("Coverts number 21 roman numeral XXI", () => {
    expect(decToRoman(21)).toBe("XXI");
  });

  test("Coverts number 25 roman numeral XXV", () => {
    expect(decToRoman(25)).toBe("XXV");
  });

  test("Coverts number 29 roman numeral XXIX", () => {
    expect(decToRoman(29)).toBe("XXIX");
  });

  test("Coverts number 30 roman numeral XXX", () => {
    expect(decToRoman(30)).toBe("XXX");
  });
  test("Coverts number 39 roman numeral XXIX", () => {
    expect(decToRoman(39)).toBe("XXXIX");
  });

  test("Coverts number 40 roman numeral XL", () => {
    expect(decToRoman(40)).toBe("XL");
  });

  test("Coverts number 49 roman numeral XLIX", () => {
    expect(decToRoman(49)).toBe("XLIX");
  });

  test("Coverts number 50 roman numeral XLIX", () => {
    expect(decToRoman(50)).toBe("L");
  });

  test("Coverts number 99 roman numeral XLIX", () => {
    expect(decToRoman(90)).toBe("XC");
  });

  test("Coverts number 100 roman numeral C", () => {
    expect(decToRoman(100)).toBe("C");
  });

  test("Coverts number 214 roman numeral C", () => {
    expect(decToRoman(214)).toBe("CCXIV");
  });

  test("Coverts number 400 roman numeral C", () => {
    expect(decToRoman(400)).toBe("CD");
  });

  test("Coverts number 494 roman numeral CDXCIV", () => {
    expect(decToRoman(494)).toBe("CDXCIV");
  });

  test("Coverts number 500 roman numeral D", () => {
    expect(decToRoman(500)).toBe("D");
  });

  test("Coverts number 959 roman numeral CM", () => {
    expect(decToRoman(959)).toBe("CMLIX");
  });

  test("Coverts number 1000 roman numeral CM", () => {
    expect(decToRoman(1000)).toBe("M");
  });

  test("Coverts number 2496 roman numeral CM", () => {
    expect(decToRoman(2496)).toBe("MMCDXCVI");
  });

  test("Coverts number 3000 roman numeral CM", () => {
    expect(decToRoman(3000)).toBe("MMM");
  });
});

describe("Roman to Decimal", () => {
   test("Coverts roman numeral I number 1", () => {
    expect(romanToDec("I")).toBe(1);
  });

  test("Coverts roman numeral III number 3", () => {
    expect(romanToDec("III")).toBe(3);
  });

  test("Coverts roman numeral IV number 4", () => {
    expect(romanToDec("IV")).toBe(4);
  });
});
 
