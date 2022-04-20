const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = function (arr) {
	if (arr.length === 1) return arr;

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = function (left, right) {
	const res = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			res.push(left[leftIndex]);
			leftIndex++;
		} else {
			res.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return [...res, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

console.log(mergeSort(numbers));
