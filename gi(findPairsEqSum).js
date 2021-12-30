const hasPairsEqSum = function (arr, sum) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;

    set.add(sum - arr[i]);
  }
  return false;
};

console.log(hasPairsEqSum([1, -2, 3, 0, -3], 0));

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
