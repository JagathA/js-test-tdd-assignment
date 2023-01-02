const {decToRoman, romanToDec} = require("./convert_roman_numbers.js");
//const romanToDec = require("./convert_roman_numbers.js");

describe("Decimal to Roman", () => {
  test("Coverts number 1 to roman numeral I", () => {
    expect(decToRoman(1)).toBe("I");
  });

  test("Coverts number 2 to roman numeral II", () => {
    expect(decToRoman(2)).toBe("II");
  });

  test("Coverts number 3 to roman numeral III", () => {
    expect(decToRoman(3)).toBe("III");
  });

  test("Coverts number 4 to roman numeral IV", () => {
    expect(decToRoman(4)).toBe("IV");
  });

  test("Coverts number 5 to roman numeral V", () => {
    expect(decToRoman(5)).toBe("V");
  });

  test("Coverts number 6 to roman numeral VI", () => {
    expect(decToRoman(6)).toBe("VI");
  });

  test("Coverts number 7 to roman numeral VI", () => {
    expect(decToRoman(7)).toBe("VII");
  });

  test("Coverts number 8 to roman numeral VIII", () => {
    expect(decToRoman(8)).toBe("VIII");
  });

  test("Coverts number 9 to roman numeral IX", () => {
    expect(decToRoman(9)).toBe("IX");
  });

  test("Coverts number 10 to roman numeral X", () => {
    expect(decToRoman(10)).toBe("X");
  });

  test("Coverts number 11 to roman numeral XI", () => {
    expect(decToRoman(11)).toBe("XI");
  });

  test("Coverts number 14 to roman numeral XIV", () => {
    expect(decToRoman(14)).toBe("XIV");
  });

  test("Coverts number 19 to roman numeral XIX", () => {
    expect(decToRoman(19)).toBe("XIX");
  });

  test("Coverts number 20 to roman numeral XX", () => {
    expect(decToRoman(20)).toBe("XX");
  });

  test("Coverts number 21 roman numeral XXI", () => {
    expect(decToRoman(21)).toBe("XXI");
  });

  test("Coverts number 25 to roman numeral XXV", () => {
    expect(decToRoman(25)).toBe("XXV");
  });

  test("Coverts number 29 to roman numeral XXIX", () => {
    expect(decToRoman(29)).toBe("XXIX");
  });

  test("Coverts number 30 to roman numeral XXX", () => {
    expect(decToRoman(30)).toBe("XXX");
  });
  test("Coverts number 39 to roman numeral XXXIX", () => {
    expect(decToRoman(39)).toBe("XXXIX");
  });

  test("Coverts number 40 to roman numeral XL", () => {
    expect(decToRoman(40)).toBe("XL");
  });

  test("Coverts number 49 to roman numeral XLIX", () => {
    expect(decToRoman(49)).toBe("XLIX");
  });

  test("Coverts number 50 roman numeral XLIX", () => {
    expect(decToRoman(50)).toBe("L");
  });

  test("Coverts number 99 to roman numeral XCIX", () => {
    expect(decToRoman(99)).toBe("XCIX");
  });

  test("Coverts number 100 to roman numeral C", () => {
    expect(decToRoman(100)).toBe("C");
  });

  test("Coverts number 214 roman numeral C", () => {
    expect(decToRoman(214)).toBe("CCXIV");
  });

  test("Coverts number 400 roman numeral C", () => {
    expect(decToRoman(400)).toBe("CD");
  });

  test("Coverts number 494 to roman numeral CDXCIV", () => {
    expect(decToRoman(494)).toBe("CDXCIV");
  });

  test("Coverts number 500 to roman numeral D", () => {
    expect(decToRoman(500)).toBe("D");
  });

  test("Coverts number 959 to roman numeral CM", () => {
    expect(decToRoman(959)).toBe("CMLIX");
  });

  test("Coverts number 1000 roman numeral CM", () => {
    expect(decToRoman(1000)).toBe("M");
  });

  test("Coverts number 2496 to roman numeral CM", () => {
    expect(decToRoman(2496)).toBe("MMCDXCVI");
  });

  test("Coverts number 3000 to roman numeral CM", () => {
    expect(decToRoman(3000)).toBe("MMM");
  });
});

describe("Roman to Decimal", () => {
   test("Coverts roman numeral I to decimal number 1", () => {
    expect(romanToDec("I")).toBe(1);
  });

  test("Coverts roman numeral III to decimal number 3", () => {
    expect(romanToDec("III")).toBe(3);
  });

  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("IV")).toBe(4);
  });

  test("Coverts roman numeral V to decimal number 5", () => {
    expect(romanToDec("V")).toBe(5);
  });

  test("Coverts roman numeral VIII to decimal number 8", () => {
    expect(romanToDec("VIII")).toBe(8);
  });

  test("Coverts roman numeral IX to number 9", () => {
    expect(romanToDec("IX")).toBe(9);
  });

  test("Coverts roman numeral XV to number 15", () => {
    expect(romanToDec("XV")).toBe(15);
  });

  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("XX")).toBe(20);
  });
  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("XL")).toBe(40);
  });
  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("L")).toBe(50);
  });
  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("C")).toBe(100);
  });
  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("M")).toBe(1000);
  });

  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("MMCDXCVI")).toBe(2496);
  });

  test("Coverts roman numeral IV to decimal number 4", () => {
    expect(romanToDec("MMM")).toBe(3000);
  });



});
 
