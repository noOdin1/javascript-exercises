const removeFromArray = function (list, ...toRemove) {
  let toRemoveLength = toRemove.length;
  let joinedList = toRemove.concat(list);

  retList = joinedList.filter(
    (elem, index) => joinedList.indexOf(elem) === index,
  );

  retList.splice(0, toRemoveLength);
  return retList;
};

// Do not edit below this line
module.exports = removeFromArray;
