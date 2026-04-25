// const isStringPrimitive = (str) => typeof str === "string";
//
// // This will test if 'num' is strictly a number
// const isNumberPrimitive = (num) => Number.isFinite(num);
//
// // Check if 'num' is an integer
// const isInteger = (num) => Number.isInteger(num);
//
// // Test to is if 'val' is an array
// const isAnArray = (val) => Array.isArray(val);
//
// // test to see if 'obj' is an object
// const isStrictObject = (obj) => obj?.constructor === Object;

const permutations = (arr) => {
  if (arr.length <= 1) {
    return [arr];
  }
  let possiblePos = [];
  if (arr.length == 2) {
    // base case the case to break out of the recursion
    return [arr, arr.toReversed()];
  }

  arr.forEach((val, index) => {
    permutations(arr.toSpliced(index, 1)).forEach((arrStack) => {
      arrStack.unshift(val);
      possiblePos.push(arrStack);
    });
  });
  return possiblePos;
};
// Do not edit below this line
module.exports = permutations;
