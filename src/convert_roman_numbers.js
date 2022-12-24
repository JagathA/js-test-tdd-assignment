module.exports = decToRoman;

function decToRoman(number) {
  let romanNumeral = "";

  if (number === 5) {
    romanNumeral = "V";
  } else if (number === 4) {
    romanNumeral = "IV";
  } else {
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
