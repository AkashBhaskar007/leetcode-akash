/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  const sum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  return addDigits(sum);
};
