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
				if (this.data[i].length > 1) {
					this.data[i].forEach(key => keysArray.push(key[0]));
				} else {
					keysArray.push(this.data[i][0]);
				}
			}
		}
		return keysArray;
	}

	values() {
		const valuesArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				if (this.data[i].length > 1) {
					this.data[i].forEach(value => valuesArray.push(value[1]));
				} else {
					valuesArray.push(this.data[i][1]);
				}
			}
		}
		return valuesArray;
	}
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);

// console.log(myHashTable);
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
