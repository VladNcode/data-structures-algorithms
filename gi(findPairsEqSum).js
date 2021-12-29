const hasPairsEqSum = function (arr, sum) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;

    set.add(sum - arr[i]);
  }
  return false;
};

console.log(hasPairsEqSum([5, 2, 9, 9, 9], 8));

const hasPairsEqSumDummy = function (arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
};

console.log(hasPairsEqSumDummy([3, 3, 3, 4, 3], 4));
