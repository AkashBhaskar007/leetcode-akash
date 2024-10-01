/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  console.log(digits);
  const string = digits.toString().replace(/,/g, "");
  const newN = BigInt(string) + BigInt(1);
  console.log(newN);

  const newArray = Array.from(String(newN), Number);
  return newArray;
};
