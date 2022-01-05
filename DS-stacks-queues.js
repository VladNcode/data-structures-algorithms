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
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
// console.log(myStack.peek());
// myStack.isEmpty();
console.log(myStack);

// discord
// udemy
// google
