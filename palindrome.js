/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const number = x.toString();
  const reverse = number.split("").reverse().join("");
  if (number == reverse) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(123));
