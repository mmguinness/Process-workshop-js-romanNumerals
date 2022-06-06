const romanNumeralDecoder = require('./romanNumeralDecoder')

describe('romanNumeralDecoder', () => {
  it("outputs as a numeric decimal integer the value of a roman numeral", () => {
    expect(romanNumeralDecoder("I")).toBe(1);
  })

});