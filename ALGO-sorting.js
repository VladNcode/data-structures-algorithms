const bubleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};

console.log(bubleSort([5, 67, 3, 10, 7, 6, 1, 55, 33, 58, 2]));
