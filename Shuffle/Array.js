function shuffleArr(arr) {
  var shuffleArrLength = arr.length;

  while (shuffleArrLength > 0) {
    shuffleArrLength--;
    var indexToBeExchanged = Math.floor(Math.random() * shuffleArrLength);
    var temp = arr[shuffleArrLength];
    arr[shuffleArrLength] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }

  return arr;
}

console.log(shuffleArr([1, 2, 3, 4, 5, 6]));

//cocat two arrays
function concatArr(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(concatArr([1, 2, 3], [2, 3, 4, 5]));
