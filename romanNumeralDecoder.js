function romanNumeralDecoder(romanNumeral) {
  const tens = ["ignore", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  if (tens.includes(romanNumeral)) {
    return tens.indexOf(romanNumeral);  
  } else {
  let number = romanNumeral.split("");
  let sum = 0
    number.map(function (roman) {
      sum = tens.indexOf(roman) + sum;
    })
    return sum;
  }
  

}

module.exports = romanNumeralDecoder;
