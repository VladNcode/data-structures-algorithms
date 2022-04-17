const findLongSub = function (str) {
	if (str.length < 2) return str.length;

	let set = new Set();
	let max = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.length - i < max) return max;

		max = Math.max(max, set.size);
		set = new Set([str[i]]);

		for (let j = i + 1; j < str.length; j++) {
			if (set.has(str[j])) {
				break;
			} else {
				set.add(str[j]);
			}
		}
	}

	return max;

	// let set = new Set(str[0]);
	// let max = 0;
	// let i = 0;
	// let j = 1;

	// while (i < str.length) {
	// 	if (set.has(str[j]) || str[j] === undefined) {
	// 		i++;
	// 		j = i + 1;
	// 		max = Math.max(max, set.size);
	// 		set = new Set(str[i]);
	// 		continue;
	// 	} else {
	// 		set.add(str[j]);
	// 		j++;
	// 	}
	// }

	// return max;
};

console.log(findLongSub('"pwwkew"'));
// console.log(findLongSub('cbdacab'));
// console.log(findLongSub('cbda'));
// console.log(findLongSub('ccccccccc'));
// console.log(findLongSub('abcbda'));
// console.log(findLongSub('abcccbb'));
// console.log(findLongSub('abbbbkliopxbbbbcae'));
// console.log(findLongSub('aaaaaaaaahjkl'));

// function mutation(arr) {
// 	let regexStr = `\\w*`;

// 	for (let ltr of arr[1]) {
// 		regexStr += `(?=\\w*${ltr})`;
// 	}

// 	regexStr += `\\w*`;

// 	const reg = new RegExp(regexStr);
// 	console.log(reg);

// 	return reg.test(arr[0]);
// }

// console.log(mutation(['ntesto', 'no']));
// console.log(mutation(['otestn', 'no']));
// console.log(mutation(['xotestnx', 'no']));
// console.log(mutation(['otesto', 'no']));
// console.log(mutation(['ntestn', 'no']));
