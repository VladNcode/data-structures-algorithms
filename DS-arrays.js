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

console.log(strings);
