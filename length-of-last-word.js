/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trim = s.trim();
  const split = trim.split("");
  for (let i = split.length - 1; i > 0; i--) {
    if (split[i] == " " && i < split.length - 1) {
      return split.length - 1 - i;
    }
  }
};
