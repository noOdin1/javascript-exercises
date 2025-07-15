const sumAll = function (a, b) {
  if (typeof a != "number" || typeof b != "number") return "ERROR";
  if (a < 0 || b < 0 || a % 1 != 0 || b % 1 != 0) return "ERROR";
  if (b < a) {
    [a, b] = [b, a]; // alt: b = [a, a = b][0];
  }

  // src:
  //  https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step,
    );

  return arrayRange(a, b, 1).reduce((a, b) => a + b, 0);
};

// Do not edit below this line
module.exports = sumAll;
