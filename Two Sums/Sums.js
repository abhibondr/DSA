// Ques:-Two Sums

// Given an array of integers nums and integer target
//return indices of the two numbers such that they add up to target

//Input: nums = [2,7,11,15]
// target = 9
//output:[0,1]

//Input: nums=[5,2,6]
// target = 8
// output:[1,2]

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
