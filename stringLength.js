// Task 1 Return String Length
function stringLength(string) {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error('The String Length is Not Between 1 to 10 including');
}

module.exports = stringLength;
