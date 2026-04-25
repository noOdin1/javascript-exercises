const pascal = function (arg, res = []) {
  if (arg === 1) {
    return [1];
  }
  if (arg === 2) {
    return [1, 1];
  }

  arg = pascal(arg - 1);
  arg.forEach((val, idx) => {
    if (idx + 1 == arg.length) return;
    res.push(arg[idx] + arg[idx + 1]);
  });
  res.unshift(1);
  res.push(1);
  return res;
};

// Do not edit below this line
module.exports = pascal;
