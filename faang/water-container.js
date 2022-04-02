function maxArea(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const height = Math.min(nums[i], nums[j]);
      const width = j - i;
      const area = height * width;
      max = Math.max(max, area);
    }
  }

  return max;
}

function maxArea2(nums) {
  let max = 0;
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    const height = Math.min(nums[p1], nums[p2]);
    const width = p2 - p1;
    const area = height * width;
    max = Math.max(max, area);

    nums[p1] < nums[p2] ? p1++ : p2--;
  }

  return max;
}

const a1 = [7, 1, 2, 3, 9];
const a2 = [6, 9, 3, 4, 5, 8];
const a3 = [4, 8, 1, 2, 3, 9];

console.log(maxArea2([5]));
