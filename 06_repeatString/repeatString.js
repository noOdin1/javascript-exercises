const repeatString = function (word, num) {
  // var inc = "";
  var inc = num > 0 ? "" : "ERROR";
  if (num == 0) return "";
  for (var i = 0; i < num; i++) {
    inc += word;
  }
  return inc;
};

// Do not edit below this line
module.exports = repeatString;
