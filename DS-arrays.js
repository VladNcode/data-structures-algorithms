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

const reverse = function (str) {
  return str.split('').reverse().join('');
};

const reverse2 = function (str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Input is not a string, or is just 1 character, or there is no input';
  }

  let reversedString = '';
  for (let i = str.length - 1; i > -1; i--) {
    reversedString += str[i];
  }

  return reversedString;
};

const reverse3 = function (str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Input is not a string, or is just 1 character, or there is no input';
  }

  let reversedString = [];
  for (let i = str.length - 1; i > -1; i--) {
    reversedString.push(str[i]);
  }

  return reversedString.join(''); // toString() or String()
};

const reverse4 = str => str.split('').reverse().join('');
const reverse5 = str => [...str].reverse().join('');

// console.log(reverse('Hi My name is Andrei'));
// console.log(reverse2('Hi My name is Andrei'));
// console.log(reverse3('Hi My name is Andrei'));

const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

// const mergeSortedArrays2 = function (arr1, arr2) {
//   const mergedArray = [];
//   let arr1Item = arr1[0];
//   let arr2Item = arr2[0];
//   i = 1;
//   j = 1;

//   //check input
//   if (arr1.length === 0) return arr2;
//   if (arr2.length === 0) return arr1;

//   while (arr1Item || arr2Item) {
//     if (!arr2Item || arr1Item < arr2Item) {
//       mergedArray.push(arr1Item);
//       arr1Item = arr1[i];
//       i++;
//     } else {
//       mergedArray.push(arr2Item);
//       arr1Item = arr1[j];
//       j++;
//     }
//   }

//   return mergedArray;
// };

function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

const mergeSortedArrays3 = function (arr1, arr2) {
  if (arr1.length === 1) return arr2;
  if (arr2.length === 1) return arr1;

  const final = [];
  let i = 0;
  let j = 0;

  while (final.length !== arr1.length + arr2.length) {
    console.log(arr1[i], arr2[j]);
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }

  return final;
};

const mergeSortedArrays4 = function (arr1, arr2) {
  // If arr1 or arr2 is empty return other array
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // If arr1 last item < arr2 first item or vice verca = just concat the arrays
  if (arr1[arr1.length - 1] < arr2[0]) return [...arr1, ...arr2];
  if (arr2[arr2.length - 1] < arr1[0]) return [...arr2, ...arr1];

  const totalLength = arr1.length + arr2.length;
  const final = [];

  for (let i = 0, j = 0; final.length < totalLength; null) {
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }

  return final;
};

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrays3([0, 3, 4, 31], [4, 6, 30, 32, 33]));
// console.log(mergeSortedArrays4([0, 3, 4, 5, 7, 31], [4, 6, 7, 8, 15, 17, 25, 26, 29, 30, 32, 33]));
console.log(mergeSortedArrays4([5, 6, 7, 8], [1, 2, 3, 4]));
