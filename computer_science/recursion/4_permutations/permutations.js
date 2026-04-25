const isStringPrimitive = (str) => typeof str === "string";

// This will test if 'num' is strictly a number
const isNumberPrimitive = (num) => Number.isFinite(num);

// Check if 'num' is an integer
const isInteger = (num) => Number.isInteger(num);

// Test to is if 'val' is an array
const isAnArray = (val) => Array.isArray(val);

// test to see if 'obj' is an object
const isStrictObject = (obj) => obj?.constructor === Object;

const swapPos = (arr) => {
  return [arr[1], arr[0]];
};

const addItemToArray = (item, arr) => {
  let tmpItem = [item];
  arr.forEach((val) => {
    tmpItem.push(val);
  });
  return tmpItem;
};

const permutations = (arr) => {
  // if (!isAnArray(arr)) {
  //   return undefined;
  // }
  if (arr.length <= 1) {
    return [arr];
  }
  let possiblePos = [];
  if (arr.length == 2) {
    // base case the case to break out of the recursion
    let [a, b] = [swapPos(arr)];
    return [arr, swapPos(arr)];
  }

  arr.forEach((val, index) => {
    let tmpArr = permutations(arr.toSpliced(index, 1));

    tmpArr.forEach((arrStack) => {
      possiblePos.push(addItemToArray(val, arrStack));
    });
  });
  return possiblePos;
};

// Do not edit below this line
module.exports = permutations;
