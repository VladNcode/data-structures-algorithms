const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = function (arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   let min = i;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] < arr[min]) {
  //       min = j;
  //     }
  //   }
  //   [arr[i], arr[min]] = [arr[min], arr[i]];
  // }

  arr.forEach((_el, i) =>
    arr.forEach((el2, j) => {
      let min = i;
      if (el2 < arr[min]) min = j;
      [arr[j], arr[min]] = [arr[min], arr[j]];
    })
  );

  return arr;
};

// console.log(selectionSort(numbers));
