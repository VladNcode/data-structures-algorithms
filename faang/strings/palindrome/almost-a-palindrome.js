function validSubPalindrome(s, i, j) {
	for (; i < j; i++, j--) {
		if (s[i] !== s[j]) return false;
	}

	return true;
}

function validPalindrome(s) {
	if (s.length < 3) return true;
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return validSubPalindrome(s, i + 1, j) || validSubPalindrome(s, i, j - 1);
		}
	}

	return true;
}

console.log(validPalindrome('raceacar'));
console.log(validPalindrome('abccccccdba'));
console.log(validPalindrome('abcdefdba'));
console.log(validPalindrome(''));
console.log(validPalindrome('a'));
console.log(validPalindrome('ab'));
