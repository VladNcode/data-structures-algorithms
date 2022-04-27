function paliFromSides(s) {
	if (s.length < 2) return true;
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) return false;
	}

	return true;
}

function paliFromCenter(s) {
	if (s.length < 2) return true;
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	let i = (j = Math.floor(s.length / 2));
	if (s.length % 2 === 0) j--;

	while (i > -1 && j < s.length) {
		if (s[i] !== s[j]) return false;
		i--;
		j++;
	}

	return true;
}

function paliCompare(s) {
	if (s.length < 2) return true;
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	const revS = s.split('').reverse().join('');

	return s === revS;
}

console.log(paliCompare('abc'));
console.log(paliCompare('A man, a plan, a canal: Panama'));
console.log(paliCompare('aabaa'));
console.log(paliCompare('aabbaa'));
console.log(paliCompare('a'));
console.log(paliCompare(''));
