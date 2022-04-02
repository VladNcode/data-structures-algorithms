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

const walls = [7, 1, 2, 3, 9];
const notSoObs = [6, 9, 3, 4, 5, 8];

console.log(maxArea(notSoObs));
