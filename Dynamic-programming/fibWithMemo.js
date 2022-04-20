// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

let calculations = 0;

// O(2^n)
function fib(n) {
	calculations++;
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
}

// O(n) with increased space complexity
function fibMaster() {
	let cache = {};
	return function fib(n) {
		calculations++;
		// if (cache[n]) {
		//   return cache[n];
		// } else {
		//   if (n < 2) {
		//     return n;
		//   } else {
		//     cache[n] = fib(n - 1) + fib(n - 2);
		//     return cache[n];
		//   }
		// }

		if (cache[n]) return cache[n];
		if (n < 2) return n;

		cache[n] = fib(n - 1) + fib(n - 2);
		return cache[n];
	};
}

function fibMaster2(n) {
	let answer = [0, 1];
	for (let i = 2; i <= n; i++) {
		answer.push(answer[i - 2] + answer[i - 1]);
	}
	return answer.pop();
}

function fibMaster3(n) {
	let a = 0;
	let b = 1;
	let c = a + b;

	for (let i = 2; i < n; i++) {
		calculations++;
		a = b;
		b = c;
		c = a + b;
	}
	return c;
}

const fasterFib = fibMaster();

// console.log(fib(20));
// console.log(fasterFib(1000));
console.log(fibMaster3(1000));
console.log('We did ' + calculations + ' calculations');
