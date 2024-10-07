/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let final = false;
  console.log(n);
  if (n === 1) {
    final = true;
  }
  if (n % 4 === 0) {
    final = true;
  }
  return final;
};
