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
