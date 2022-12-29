module.exports = decToRoman;

function decToRoman(number) {
  let romanNumeral = "";

  while (number >= 1000) {
    romanNumeral += "M";
    number -= 1000;
  }

  if (number >= 900) {
    romanNumeral += "CM";
    number -= 900;
  }

  if (number >= 500) {
    romanNumeral += "D";
    number -= 500;
  }

  if (number >= 400) {
    romanNumeral += "CD";
    number -= 400;
  }

  while (number >= 100) {
    romanNumeral += "C";
    number -= 100;
  }

  if (number >= 90) {
    romanNumeral += "XC";
    number -= 90;
  }

  if (number >= 50) {
    romanNumeral += "L";
    number -= 50;
  }
  
  if (number >= 40) {
    romanNumeral += "XL";
    number -= 40;
  }

  while (number >= 10) {
    romanNumeral += "X";
    number -= 10;
  }

  if (number === 9) {
    romanNumeral += "IX";
    number -= 9;
  }

  if (number >= 5) {
    romanNumeral += "V";
    number -= 5;
  }

  if (number === 4) {
    romanNumeral += "IV";
    number -= 4;
  }

  if (number < 4) {
    for (let i = 0; i < number; i++) {
      romanNumeral += "I";
    }
  }

  return romanNumeral;
}

// for 1 return I
// upto 3 return III
// 4 => IV
// 5 => V
// 6 => VI
// 7 ==> VII
// 9 => IX
// X => 10
// XI => 11
// XIV => 14
// XV => 15
// XVI => 16
//XX => 20
//XL =>40
//L =>50
//XC => 90
//C => 100
//CD => 400
//D => 500
//CM => 900
//M => 1000
//MMM => 3000
