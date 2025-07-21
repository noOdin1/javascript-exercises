const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0 || num == "0") return 0;
  if (num == 1 || num == "1") return 1;
  if (num == 2 || num == "2") return 1;
  fibArray = [0, 1];
  for (let i = 2; i <= num; i++) {
    let sum = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(sum);
  }
  return fibArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
