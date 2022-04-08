function buildString(str) {
	const res = [];
	for (let i = 0; i < str.length; i++) {
		str[i] === '#' ? res.pop() : res.push(str[i]);
	}

	return res.join('');
}

function equal(s, t) {
	return buildString(s) === buildString(t);
}

////////////////

function move(string, pointer) {
	let backcount = 2;
	while (backcount > 0) {
		pointer--;
		backcount--;
		if (string[pointer] === '#') {
			backcount = backcount + 2;
		}
	}

	return pointer;
}

function eq2(s, t) {
	let p1 = s.length - 1;
	let p2 = t.length - 1;

	while (p1 >= 0 || p2 >= 0) {
		if (s[p1] === '#' || t[p2] === '#') {
			if (s[p1] === '#') p1 = move(s, p1);
			if (t[p2] === '#') p2 = move(t, p2);
		} else {
			if (s[p1] !== t[p2]) {
				return false;
			} else {
				p1--;
				p2--;
			}
		}
	}

	return true;
}

const s1 = 'a#b#c#a';
const s2 = 'abcd###';
const s3 = 'a##b';
const s4 = 'b';
const s5 = '###a';
const s6 = '#s#s#s#';

// console.log(equal(s1, s2));
// console.log(equal(s3, s4));
// console.log(equal(s5, s6));
console.log(eq2(s1, s2));
console.log(eq2(s3, s4));
console.log(eq2(s5, s6));
console.log(eq2('##d###################################ab', '####dd##############ab'));
