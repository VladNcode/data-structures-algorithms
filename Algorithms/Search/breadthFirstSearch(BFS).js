function breadthFirstSearch() {
	let currentNode = this.root;
	const queue = [];
	const list = [];
	let counter = 1;

	queue.push(currentNode);

	while (queue.length > 0) {
		currentNode = queue.shift();
		list.push(currentNode.value);

		if (currentNode.left || currentNode.right) {
			counter++;
		}

		if (currentNode.left) {
			queue.push(currentNode.left);
		}

		if (currentNode.right) {
			queue.push(currentNode.right);
		}
	}

	return counter;
}

function RecursivebreadthFirstSearch(queue, list) {
	if (!queue.length) {
		return list;
	}

	let currentNode = queue.shift();
	list.push(currentNode.value);
	if (currentNode.left) {
		queue.push(currentNode.left);
	}

	if (currentNode.right) {
		queue.push(currentNode.right);
	}

	return this.RecursivebreadthFirstSearch(queue, list);
}
