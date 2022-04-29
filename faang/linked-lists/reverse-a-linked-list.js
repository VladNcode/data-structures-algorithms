function reverseList(head) {
	if (!head) return head;

	let first = head;
	let second = first.next;

	while (second) {
		const temp = second.next;
		second.next = first;
		first = second;
		second = temp;
	}

	head.next = null;
	return first;
}

function revListRec(head, prev = null) {
	if (!head) return prev;

	let nextNode = head.next;
	head.next = prev;
	prev = head;

	return revListRec(nextNode, prev);
}

function printList(head) {
	if (!head.value) return [];

	const array = [];
	let currentNode = head;

	while (currentNode) {
		array.push(currentNode.value);
		currentNode = currentNode.next;
	}

	return array;
}

const ll = {
	value: 10,
	next: {
		value: 5,
		next: {
			value: 2,
			next: {
				value: 1,
				next: null,
			},
		},
	},
};

console.log(printList(revListRec(ll)));
