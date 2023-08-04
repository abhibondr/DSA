// Ques 4:- Valid Anagram

// An Anagram is a word or phrase formed by rearranging the letters of
// a diffrent word or phrase, using all the original letters exactly once.

//Input: (a:"mat"),(b: "tam") Output: true
//Input: (a:"dog"),(b: "dot") Output: false

// first Approach:-

// const isAnagram = function (x, y) {
//   x = x.split("").sort().join("");
//   y = y.split("").sort().join("");

//   return x === y;
// };

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("dog", "dot"));

// second Approach

const isAnagram = (x, y) => {
  if (x.length != y.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < x.length; i++) {
    obj1[x[i]] = (obj1[x[i]] || 0) + 1;
    obj2[y[i]] = (obj2[y[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] != obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));

// Its looks like this
// Example:
// {
//     "a":3,
//     "n":1.
//     "g":1,
//     "r":1,
//     "m":1
// }

// {
//     "n":1,
//     "a":3,
//     "g":1,
//     "r":1,
//     "m":1
// }
