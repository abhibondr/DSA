// Que2 - Palindrome Number

// An integer is a palindrome when its reads same forward and backward

// Input: x = 212; Output: true
// Input: x = 801; Output: false

// sol:- 1

const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
// console.log(isPalindrome(801));

// sol:- 2

// const isPalindrome = function (x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// };

// console.log(isPalindrome(121));
// console.log(isPalindrome(801));
