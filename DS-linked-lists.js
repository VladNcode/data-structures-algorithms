// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    // const newNode = {
    //   value,
    //   next: null,
    // };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    // const newNode = {
    //   value,
    //   next: null,
    // };
    const curr = this.head;
    this.head = newNode;
    this.head.next = curr;
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

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const finisher = this.traverseToIndex(index);
    newNode.next = finisher;
    leader.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index > this.length - 1) {
      return console.log('There is no item with this index');
    }

    if (index === this.length - 1 || index === -1) {
      this.tail = this.traverseToIndex(this.length - 2);
      this.tail.next = null;
      this.length--;
      return this.printList();
    }
    if (index === 0) {
      this.head = this.traverseToIndex(1);
      this.length--;
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const finisher = this.traverseToIndex(index + 1);
    leader.next = finisher;
    this.length--;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(32);
myLinkedList.prepend(55);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.remove(0);
myLinkedList.remove(-1);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
