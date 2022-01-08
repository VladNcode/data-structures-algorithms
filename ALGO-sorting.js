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

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(bubbleSort(numbers));
// console.log(bubbleSort([5, 67, 3, 10, 7, 6, 1, 55, 33, 58, 2]));

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

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
};

// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 0; i < length; i++) {
// 		if (array[i] < array[0]) {
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
//             array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }

// console.log(insertionSort(numbers));

const mergeSort = function (arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = function (left, right) {
  const fin = [];
  let leftInd = 0;
  let rightInd = 0;

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] < right[rightInd]) {
      fin.push(left[leftInd]);
      leftInd++;
    } else {
      fin.push(right[rightInd]);
      rightInd++;
    }
  }

  return [...fin, ...left.slice(leftInd), ...right.slice(rightInd)];
};

console.log(mergeSort(numbers));
