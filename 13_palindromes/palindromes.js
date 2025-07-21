const palindromes = function (str) {
  str = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  // str = str.replace(/\s/g, "");
  str = str.toLowerCase();
  let tmpStr = str.split("").reverse().join("");
  return tmpStr == str;
};

// Do not edit below this line
module.exports = palindromes;
