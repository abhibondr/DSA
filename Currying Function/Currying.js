// Function Currying

// Currying is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument, and returning another function that takes the next argument, and so on, until the final result is obtained.

// currying might not be suitable for all situations. It's most effective when working with functions that naturally take a sequence of arguments that can be separated into stages or logical groups.

// Usage: It helps you avoid passing same variables multiple time

const sum = (a, b, c) => {
  return a + b + c;
};

console.log(sum(10, 20, 30));

const curryingSum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(curryingSum(1)(2)(3));
