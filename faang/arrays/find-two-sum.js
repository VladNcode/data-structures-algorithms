// function findTwoSum(nums, target) {
//   if (nums.length < 2) return null;
//   if (nums.length === 2) return [0, 1];

//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(target - nums[i])) {
//       return [nums.indexOf(target - nums[i]), i];
//     }

//     set.add(nums[i]);
//   }

//   return null;
// }

function findTwoSum(nums, target) {
  const hm = {};

  for (let i = 0; i < nums.length; i++) {
    if (hm[nums[i]] !== undefined) return [hm[nums[i]], i];
    hm[target - nums[i]] = i;
  }

  return null;
}

console.log(undefined < 1);

// function findTwoSum(nums, target) {
//   if (nums.length < 2) return null;
//   if (nums.length === 2) return [0, 1];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }

//   return null;
// }

const numbers = [9, 3, 7, 1, 2, 5];

console.log(findTwoSum([5], 11));
