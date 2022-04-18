function slidingWindow(str) {
	if (str.length < 2) return str.length;

	let seen = {};
	let max = 0;
	let left = 0;
	let right = 0;

	while (right < str.length) {
		const currChar = str[right];
		const prevChar = seen[currChar];

		if (prevChar >= left) {
			left = prevChar + 1;
		}

		seen[currChar] = right;
		max = Math.max(max, right - left + 1);
		right++;
	}

	return max;
}

console.log(slidingWindow('pwwkew'));
console.log(slidingWindow('cbdacab'));
console.log(slidingWindow('cbda'));
console.log(slidingWindow('ccccccccc'));
console.log(slidingWindow('abcbda'));
console.log(slidingWindow('abcccbb'));
console.log(slidingWindow('abbbbkliopxbbbbcae'));
console.log(slidingWindow('aaaaaaaaahjkl'));
