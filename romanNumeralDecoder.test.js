const romanNumeralDecoder = require('./romanNumeralDecoder')

describe('romanNumeralDecoder', () => {
  it("outputs as a numeric decimal integer the value of a roman numeral", () => {
    expect(romanNumeralDecoder("I")).toBe(1);
  })

  it("outputs as a numeric decimal integer the value of a roman numeral", () => {
    expect(romanNumeralDecoder("V")).toBe(5);
  });

  it("outputs as a numeric decimal integer the value of a roman numeral", () => {
    expect(romanNumeralDecoder("X")).toBe(10);
  });

  it("outputs as a numeric decimal integer the value of a roman numeral", () => {
    expect(romanNumeralDecoder("XI")).toBe(11);
  });

});