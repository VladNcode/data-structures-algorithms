const fib = function () {
	let cache = {};
	return function betterFib(n) {
		if (n < 2) return n;
		if (cache[n]) return cache[n];

		cache[n] = betterFib(n - 1) + betterFib(n - 2);
		return cache[n];
	};
};

const test = fib();

// console.log(test(50));

const factorial = function (n) {
	if (n < 2) return 1;
	return n * factorial(n - 1);
};

// console.log(factorial(5));

const reverseString = function (s) {
	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		[s[i], s[j]] = [s[j], s[i]];
	}
	return s;
};

// console.log(reverseString(['f', 'o', 'o', 't', 'b', 'a', 'l', 'l']));

let str = 'hello 123 123';
str = str.replace(/\W/g, '');
// console.log(str);
// console.log(str.charAt(0));
// console.log(str.substring(1));

const strrr = 'hello';
console.log(strrr.substring(1) + strrr.charAt(0));
console.log(strrr.substring(2) + strrr.charAt(0));
console.log(strrr.substring(3) + strrr.charAt(0));

// const revStr = function (s) {
//   let res = '';
//   for (let i = s.length - 1; i >= 0; i--) {
//     res += s[i];
//   }
//   return res;
// };

// const revStr = function (s) {
//   let arr = s.split('');
//   let counter = 0;
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     counter++;
//   }

//   console.log(counter);
//   return arr.join('');
// };

const revStr = function (s) {
	debugger;
	if (s === '') return '';

	return revStr(s.substring(1)) + s.charAt(0);
};

// console.log(revStr('hello'));
