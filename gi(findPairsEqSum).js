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

const twoItemsEqSumIndexes2 = function (arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [i, j];
    }
  }
};

// console.log(twoItemsEqSumIndexes2([1, 2, 3, 4, 5, 6, 15, 23], 24));

const maxSubArray = function (nums) {
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(nums[i], nums[i] + temp);
    // console.log(temp);
    max = temp > max ? temp : max;
    console.log(max);
  }
  return max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// const moveZeroes = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(arr.indexOf(arr[i]), 1);
//       arr.push(0);
//     }
//   }
// };

const moveZeroes = nums => {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = 0;
      nums[j] = temp;
      j++;
    }
    i++;
  }
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// const containsDuplicate = function (nums) {
//   const obj = {};
//   nums.forEach(num => (obj[num] = ++obj[num] || 1));
//   for (val in obj) {
//     if (obj[val] > 1) return true;
//   }

//   return false;
// };

const containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

const containsDuplicate = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) return true;
    obj[nums[i]] = i;
  }

  return false;
};

const containsDuplicate = function (nums) {
  let obj = {};

  for (let num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false;
};

const containsDuplicate = nums => [...new Set(nums)].length !== nums.length;

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([1, 2, 3, 4, 5]));
