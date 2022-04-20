class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;

		if (this.length === 0) {
			this.bottom = this.top;
		}

		this.length++;
		return this;
	}

	peek(index = 0) {
		if (index <= 0) {
			return this.top.value;
		}
		if (index >= this.length) {
			return this.bottom.value;
		}

		let currentNode = this.top;
		let counter = 0;

		while (counter !== index) {
			counter++;
			currentNode = currentNode.next;
		}

		return currentNode.value;
	}

	pop() {
		if (!this.top) {
			return null;
		}

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		this.top = this.top.next;
		this.length--;

		return this;
	}

	isEmpty() {
		return this.length === 0 ? console.log('Stack is empty') : console.log('Stack is not empty');
	}
}

const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());
// myStack.isEmpty();
// console.log(myStack);

// discord
// udemy
// google

class StackArray {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.array = [];
	}

	push(value) {
		const newNode = new Node(value);
		if (this.array.length !== 0) {
			newNode.next = this.array[this.array.length - 1];
		} else {
			this.bottom = newNode;
		}
		this.array.push(newNode);
		this.top = newNode;
		return this.array;
	}

	pop() {
		this.top = this.array[this.array.length - 1].next;
		this.array.pop();
		if (this.array.length === 0) {
			this.bottom = null;
		}
		return this.array;
	}

	peek() {
		return this.array[this.array.length - 1];
	}
}

// const myStackArray = new StackArray();
// myStackArray.push('google');
// myStackArray.push('udemy');
// myStackArray.push('discord');
// myStackArray.pop();
// // myStackArray.pop();

// console.log(myStackArray);
// console.log(myStackArray.peek());

class StackArray2 {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
		return this.array;
	}

	pop() {
		this.array.pop();
		return this.array;
	}
}

const myStackArray2 = new StackArray2();
// myStackArray2.push('google');
// myStackArray2.push('udemy');
// myStackArray2.push('discord');
// myStackArray2.pop();
// console.log(myStackArray2.peek());
// console.log(myStackArray2);

////////////////////////////////////////////////////////////////

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue() {
		if (!this.first) {
			return 'Queue is empty';
		}

		this.first = this.first.next;
		this.length--;
		if (this.length === 0) {
			this.last = null;
		}
		return this;
	}
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
