const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = function (arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //     }
  //   }
  // }

  arr.forEach(_n => {
    arr.forEach((_n2, i) => {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    });
  });

  return arr;
};

console.log(bubbleSort(numbers));
