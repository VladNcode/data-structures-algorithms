//          9
//     4        20
//   1   6   15   170

// InOrder = [1, 4, 6, 9, 15, 20, 170]
// PreOrder = [9, 4, 1, 6, 20, 15, 170]
// PostOrder = [1, 6, 4, 15, 170, 20, 9]

const traverseInOrder = function (node, list) {
	// console.log(node.value);
	if (node.left) {
		traverseInOrder(node.left, list);
	}

	list.push(node.value);

	if (node.right) {
		traverseInOrder(node.right, list);
	}

	return list;
};

const traversePreOrder = function (node, list) {
	// console.log(node.value);
	list.push(node.value);

	if (node.left) {
		traversePreOrder(node.left, list);
	}

	if (node.right) {
		traversePreOrder(node.right, list);
	}

	return list;
};

const traversePostOrder = function (node, list) {
	// console.log(node.value);

	if (node.left) {
		traversePostOrder(node.left, list);
	}

	if (node.right) {
		traversePostOrder(node.right, list);
	}

	list.push(node.value);

	return list;
};
