"use strict";

const isStrictObject = (val) => {
  return val?.constructor === Object;
};

const contains = (obj, arg) => {
  let tmpRes = false;
  for (const value of Object.values(obj)) {
    // start recursion if the value is still an object, to
    // cut down the obj to 'value' only.
    if (isStrictObject(value)) {
      tmpRes = contains(value, arg);
    }

    // special condition, checking for NaN
    if (Number.isNaN(arg)) {
      if (Number.isNaN(value)) {
        return true;
      }
    }
    // if the 'value' matches 'arg' start returning 'true'
    if (value === arg) {
      return true;
    }
    // if 'tmpRes' is 'true' then shortcircuit the process, return 'true'
    if (tmpRes == true) {
      return true;
    }
  }
  return tmpRes;
};

// Do not edit below this line
module.exports = contains;
