/*

[] 0
[3] 0
[3,4,3] 0

*/

function findWater(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = 0;
    let leftP = i;
    let rightP = i;

    while (leftP >= 0) {
      left = Math.max(left, nums[leftP]);
      leftP--;
    }

    while (rightP < nums.length) {
      right = Math.max(right, nums[rightP]);
      rightP++;
    }

    const currWater = Math.min(left, right) - nums[i];
    if (currWater >= 0) total += currWater;
  }

  return total;
}

function findWater2(blocks) {
  let total = 0;
  let maxLeft = blocks[0];
  let maxRight = blocks[blocks.length - 1];
  let p1 = 0;
  let p2 = blocks.length - 1;

  while (p1 < p2) {
    maxLeft <= maxRight ? p1++ : p2--; // Find out which pointer to move
    maxLeft = Math.max(maxLeft, blocks[p1]); // Check if we need to update max left
    total += blocks[p1] < maxLeft ? maxLeft - blocks[p1] : 0; // Check if we need to update total
    maxRight = Math.max(maxRight, blocks[p2]); // Check if we need to update max right
    total += blocks[p2] < maxRight ? maxRight - blocks[p2] : 0; // Check if we need to update total
  }

  return total;
}

const a1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const a2 = [3, 0, 0, 0, 3];

console.log(findWater2(a1));
console.log(findWater2(a2));
