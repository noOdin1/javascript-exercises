const getTheTitles = function (obj) {
  let retArray = [];
  obj.forEach((item) => {
    for (let key in item) {
      console.log(`[objectLoop] key: ` + key + `, item[${key}]: ` + item[key]);
      if (key == "title") {
        retArray.push(item[key]);
      }
    }
  });
  return retArray;
};

// Do not edit below this line
module.exports = getTheTitles;
