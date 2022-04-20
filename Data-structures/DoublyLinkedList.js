//! DOUBLY LINKED LIST

class DoublyLinkedList {
	constructor(value) {
		this.head = { value, prev: null, next: null };
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	goToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			counter++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	insert(index, value) {
		if (index < 0) {
			return console.log('Index is incorrect');
		}

		if (index >= this.length) {
			this.append(value);
			return this.printList();
		}

		if (index === 0) {
			this.prepend(value);
			return this.printList();
		}
		const newNode = new Node(value);
		const leader = this.goToIndex(index - 1);
		const finisher = this.goToIndex(index);
		leader.next = newNode;
		newNode.next = finisher;
		finisher.prev = newNode;
		newNode.prev = leader;
		this.length++;
		return this.printList();
	}

	remove(index) {
		if (index < -1 || index > this.length - 1) {
			return console.log('Index is incorrect');
		}

		if (index === 0) {
			this.head = this.goToIndex(1);
			this.head.prev = null;
			this.length--;
			return this.printList();
		}

		if (index === this.length - 1 || index === -1) {
			this.tail = this.goToIndex(this.length - 2);
			this.tail.prev = this.goToIndex(this.length - 3);
			this.tail.next = null;
			this.length--;
			return this.printList();
		}

		const leader = this.goToIndex(index - 1);
		const finisher = this.goToIndex(index + 1);
		leader.next = finisher;
		finisher.prev = leader;
		this.length--;

		return this.printList();
	}
}
