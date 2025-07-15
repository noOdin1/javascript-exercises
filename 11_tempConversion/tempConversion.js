const convertToCelsius = function (value) {
  return parseFloat((Math.round((value - 32) * (5 / 9) * 10) / 10).toFixed(1));
};

const convertToFahrenheit = function (value) {
  return parseFloat((Math.round((value * (9 / 5) + 32) * 10) / 10).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
