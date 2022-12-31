module.exports = decToRoman;

const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const  roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

function decToRoman(number) {
  let romanNumeral = "";

  for (const i in decimal) {
    while (number >= decimal[i]) {
      romanNumeral += roman[i];
      number -=  decimal[i];
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
