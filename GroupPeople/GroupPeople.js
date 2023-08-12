const people = [
  { name: "John", age: 21 },
  { name: "Max", age: 20 },
  { name: "Alexa", age: 21 },
  { name: "Abhi", age: 22 },
  { name: "sam", age: 20 },
];

const groupPeople = (array) => {
  let result = {};

  array.forEach((person) => {
    if (!result[person.age]) {
      result[person.age] = [person];
    } else {
      result[person.age].push(person);
    }
  });

  return result;
};

console.log(groupPeople(people));

// Output Should be like this way:-

// {
//     '20': [ { name: 'Max', age: 20 }, { name: 'sam', age: 20 } ],
//     '21': [ { name: 'John', age: 21 }, { name: 'Alexa', age: 21 } ],
//     '22': [ { name: 'Abhi', age: 22 } ]
// }
