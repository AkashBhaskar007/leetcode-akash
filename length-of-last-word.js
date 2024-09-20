/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const split = s.split("");
  for (let i = split.length - 1; i > 0; i--) {
    if (split[i] == " ") {
      return split.length - 1 - i;
    }
  }
};
