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
