function capitalize(string) {
  const uppercase = string[0].toUpperCase();
  return uppercase + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(string, shiftValue) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const codedStringArray = [];
  const stringArray = string.split("");
  stringArray.forEach((letter) => {
    if (letter == " ") {
      codedStringArray.push(letter);
      return;
    }
    let index = alphabet.indexOf(letter) + shiftValue;
    const newLetter = alphabet[index];
    codedStringArray.push(newLetter);
  });
  return codedStringArray.join("");
}

function analyzeArray(array) {
  array.sort((a, b) => a - b);
  const min = array[0];
  const max = array[array.length - 1];
  const length = array.length;
  const average = Math.floor(
    array.reduce((total, current) => total + current, array[0]) / array.length
  );
  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
