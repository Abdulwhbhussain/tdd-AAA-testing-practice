// Task 4 Capitalize A String
function capitalize(string) {
  if (string[0] == Number(string[0])) {
    throw new Error('You should Provide Alphabet As First Letter Not Number.');
  }
  string = string.split('');
  string[0] = string[0].toUpperCase();
  string = string.join('');
  return string;
}

module.exports = capitalize;
