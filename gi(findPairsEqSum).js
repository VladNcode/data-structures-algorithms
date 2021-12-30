const hasPairsEqSum = function (arr, sum) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;

    set.add(sum - arr[i]);
  }
  return false;
};

// console.log(hasPairsEqSum([1, -2, 3, 0, -3], 0));

const hasPairsEqSumObj = function (arr, sum) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return true;
    }
    obj[sum - arr[i]] = arr[i];
  }
  return false;
};

// console.log(hasPairsEqSumObj([1, 2, 3, 4, 5], 9));

const hasPairsEqSumDummy = function (arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
};

// console.log(hasPairsEqSumDummy([1, -2, 3, 0, 5], 0));

// const findSmg = function (arr, sum) {
//   const final = [];
//   const set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) final.push(i);

//     set.add(sum - arr[i]);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[final[0]] + arr[i] === sum) {
//       final.push(i);
//       return final;
//     }
//   }
// };

// console.log(findSmg([3, 2, 3], 6));

const twoItemsEqSumIndexes = function (arr, sum) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let comp = sum - arr[i];
    if (comp in obj) return [i, obj[comp]];
    obj[arr[i]] = i;
  }
};

console.log(twoItemsEqSumIndexes([3, 2, 3], 6));
