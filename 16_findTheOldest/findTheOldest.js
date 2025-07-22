const findTheOldest = function (persons) {
  let oldestPerson = "";
  let oldestAge = 0;
  persons.forEach((person) => {
    let age =
      (person.yearOfDeath === undefined
        ? new Date().getFullYear()
        : person.yearOfDeath) - person.yearOfBirth;
    if (oldestAge < age) {
      oldestAge = age;
      oldestPerson = person;
    }
  });
  // let rightPerson = persons.filter((person) =>
  //     person.name == oldestPerson,
  //   );
  // };
  // console.log("rightPerson name: " + rightPerson.name);
  // return rightPerson;
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
