const memoAddition = () => {
  let cache = {};

  return function (value) {
    if (value in cache) {
      console.log("retrive from cache");
      return cache[value];
    } else {
      console.log("Calculating result");
      let result = value + 10;
      cache[value] = result;
      return result;
    }
  };
};

const memoizFunction = memoAddition();
console.log(memoizFunction(10));
console.log(memoizFunction(10));
console.log(memoizFunction(20));
console.log(memoizFunction(20));
console.log(memoizFunction(10));

// Memoization concept used when you need to call function woth same arguments
// so instaed of calling from server side you can store that function in cache itself in key value based format
// so next time you call with same arguments its retrive from cache for faster and optimize way
