const isAnArray = (val) => Array.isArray(val);
const isStrictObject = (obj) => obj?.constructor === Object;
const isNumberPrimitive = (num) => Number.isFinite(num);
const numberIsInteger = (num) => Number.isInteger(num);

const totalIntegers = (arr, count = 0) => {
  // Filter for all non-array and non-objects
  // Executed before any recursive calls
  if (!isAnArray(arr) && !isStrictObject(arr)) {
    return undefined;
  }

  // code block to handle arrays
  if (isAnArray(arr)) {
    arr.forEach((item) => {
      // filter for strict integers only
      if (isNumberPrimitive(item) && numberIsInteger(item)) {
        count++;
      }

      // recursive calls if another object/array is found
      if (isAnArray(item) || isStrictObject(item)) {
        count = totalIntegers(item, count);
      }
    });
  }

  // code block to handle objects
  if (isStrictObject(arr)) {
    for (const value of Object.values(arr)) {
      // filter for strict integers only
      if (isNumberPrimitive(value) && numberIsInteger(value)) {
        count++;
      }

      // recursive calls if another object/array is found
      if (isAnArray(value) || isStrictObject(value)) {
        count = totalIntegers(value, count);
      }
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
