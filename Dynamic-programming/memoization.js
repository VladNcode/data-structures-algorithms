const addTo80 = function (n) {
	console.log('long time');
	return n + 80;
};

// let cache = {};
// function memoizedAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log('long time');
//     cache[n] = n + 80;
//     return cache[n];
//   }
// }

function memoizedAddTo80Closures(n) {
	let cache = {};
	return function (n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log('long time');
			cache[n] = n + 80;
			return cache[n];
		}
	};
}

const memoized = memoizedAddTo80Closures();

// addTo80(5);
// addTo80(5);
// addTo80(5);

// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(5));
// console.log('3', memoizedAddTo80(5));

console.log('1', memoized(5));
console.log('2', memoized(5));
console.log('3', memoized(5));
