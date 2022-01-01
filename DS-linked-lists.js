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

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    const curr = this.head;
    this.head = newNode;
    this.head.next = curr;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(32);
myLinkedList.prepend(55);
console.log(myLinkedList);
