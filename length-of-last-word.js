/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimmed = s.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  if (lastSpaceIndex === -1) {
    return trimmed.length;
  }
  return trimmed.length - lastSpaceIndex - 1;
};
