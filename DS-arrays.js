const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

// ACCESS
strings[2]; // O(1)

// PUSH
strings.push('e'); // O(1)

// POP
strings.pop(); // O(1)
strings.pop(); // O(1)

// UNSHIFT
strings.unshift('x'); // O(n)

// SPLICE
strings.splice(2, 0, 'alien'); // O(n/2) but it's gonna be O(n) (WORST CASE)

// console.log(strings);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    // this.pop();
  }
}

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(0);
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(1);

// console.log(newArray);
