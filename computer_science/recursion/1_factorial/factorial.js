// Using recursion
const isFloat = (num) =>
  typeof num === "number" && !Number.isInteger(num) && !isNaN(num);
const factorial = (num) => {
  if (Array.isArray(num)) {
    return undefined;
  }
  if (isFloat(num)) {
    return undefined;
  }
  if (typeof num === "string") {
    return undefined;
  }
  if (num < 0) {
    return undefined;
  }
  if (num == 0 || num == "0" || num == 1 || num == "1") {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = factorial;
