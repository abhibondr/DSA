//Fibonacci Number

// Fibonacci Series:- 0,1,1,2,3,5,8,13

// Input: n = 3
// output:2

// Solution 1:-

var fib = function (num) {
  const arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

console.log(fib(8));

// Solution2:- Recursion method

// const fib = function (n) {
//   if (n <= 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(3));
