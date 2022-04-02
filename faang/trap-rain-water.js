/*

[] 0
[3] 0
[3,4,3] 0

*/

function findWater(nums) {
  let total = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let p1 = i - 1, p2 = i + 1; p1 !== nums[0] && p2 !== nums[nums.length - 1]; p1--, p2++) {
      if (nums[p1] > 0) left = Math.max(left, nums[p1]);
      if (nums[p2] > 0) right = Math.max(right, nums[p2]);
    }

    const currHeght = nums[i];
    const currWater = Math.min(left, right) - currHeght;
    if (currWater > 0) total += currWater;
    left = 0;
    right = 0;
  }

  return total;
}

const a1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(findWater(a1));
