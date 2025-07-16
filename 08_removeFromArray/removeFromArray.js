const removeFromArray = function (list, ...toRemove) {
  let toRemoveLength = toRemove.length;
  let joinedList = toRemove.concat(list);

  // This method has a drawback. If the original array have duplicates but
  // the items removed are not the part of the arrays' duplicate, then
  // the duplicates in the array will be removed except for one.
  retList = joinedList.filter(
    (elem, index) => joinedList.indexOf(elem) === index,
  );

  retList.splice(0, toRemoveLength); // This cannot be:
  //   return retList.splice(0, toRemoveLength);
  // Because this would 'return' would give us the 'spliced' items
  // retList has been modified through the 'spliced' so,
  // we return retList
  return retList;
};

// Do not edit below this line
module.exports = removeFromArray;
