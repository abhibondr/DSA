// Implementing Quick sort in javascript

// Write a function to sort the given array nums in ascending order.

// Input: nums = [8, 3, 5, 4, 7, 6, 1, 2];
// output: [1, 2, 3, 4, 5, 6, 7, 8];

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

console.log(QuickSort([8, 3, 5, 4, 7, 6, 1, 2]));
