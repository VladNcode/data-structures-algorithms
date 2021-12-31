// let user = {
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream() {
//     console.log('aahhhhhhh!');
//   },
// };

// user.age; // O(1)
// user.spell = 'abra kadabra'; // O(1)
// user.scream(); // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1)

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  } // O(1) if no collision

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          valuesArray.push(this.data[i][j][1]);
        }
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);

// console.log(myHashTable);
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
