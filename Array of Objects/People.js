const people = [
  { name: "abhi", gender: "male" },
  { name: "yogesh", gender: "male" },
  { name: "mahi", gender: "female" },
  { name: "poornima", gender: "female" },
  { name: "ranjit", gender: "male" },
  { name: "harshada", gender: "female" },
  { name: "amit", gender: "male" },
  { name: "yash", gender: "male" },
  { name: "abc", gender: "other" },
  { name: "cdf", gender: "other" },
];

var count = 0;

people.forEach((person) => {
  if (person.gender !== "male") count++;
}); // HEre we check counts of non-male people (5)

for (var i = 0; i <= count; i++) {
  for (var j = 1; j < people.length; j++) {
    if (people[j].gender !== "male") {
      people.splice(j, 1);
    }
  }
} // here if make one loop for remove nonmale people depends  on the count

console.log(people);

// output 👇🏻

// [
//     { name: 'abhi', gender: 'male' },
//     { name: 'yogesh', gender: 'male' },
//     { name: 'ranjit', gender: 'male' },
//     { name: 'amit', gender: 'male' },
//     { name: 'yash', gender: 'male' }
// ]
