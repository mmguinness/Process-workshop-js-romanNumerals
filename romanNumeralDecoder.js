function romanNumeralDecoder(romanNumeral) {
  const tens = ["ignore", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  
  return tens.indexOf(romanNumeral);

}

module.exports = romanNumeralDecoder;
