const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sumArray) {
  if (sumArray.length == 0) {
    return 0;
  }
  if (sumArray.length == 1) return sumArray[0];
  return sumArray.reduce((acc, currVal) => (acc += currVal), 0);
};

const multiply = function (mulArray) {
  return mulArray.reduce((acc, currVal) => (acc *= currVal), 1);
};

const power = function (num, exp) {
  let res = 1;
  for (let i = 0; i < exp; i++) {
    res *= num;
  }
  return res;
};

const factorial = function (num) {
  let fact = 1;
  if (num != 1 || num != 0) {
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
