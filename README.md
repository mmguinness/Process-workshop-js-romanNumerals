# js-process-workshop

## Roman Numerals Decoder

[Codewars challenge](https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript)

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.


### Requirements

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
II         2
III        3
IV         4
V          5
VI         6
VII        7
VIII       8
IX         9
X          10
XXI        21
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org

### My Process

INPUT     |  OUTPUT
'I'       |  1
'IV'      |  4
'XXI'     |  21
"MCMXC"   |  1990         1000 = M, 900 = CM, 90 = XC
'MMVIII'  |  2008         1000 = M, 900 = CM, 90 = XC 
'MDCLXVI' |  1666         1000 = M, 600 = DC, 60 = LX, 60 = VI  