const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

const array3 = ['a', 'b', 'c', 'x', 'c', 'c'];
const array4 = ['z', 'y', 'x'];

const array5 = [];
const array6 = [];

const arr1 = ['a', 'b', 'c', 'e'];
const arr2 = ['d', 'e', 'f', 'j'];

//O(a*b)
//O(1) - Space Complexity
// function containsCommonItem(arr1, arr2) {
//   for (let i=0; i < arr1.length; i++) {
//     for ( let j=0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false
// }

// const findCommonItems = (array1, array2) => {
//   const filteredArray = [...new Set([...array1, ...array2])];
//   const obj = {};

//   filteredArray.forEach(el => (obj[el] = ++obj[el] || 1));

//   for (v in obj) {
//     if (obj[v] > 1) {
//       return true;
//     }
//   }

//   return false;
// };

//O(a + b) Time Complexity
//O(a) Space Complexity

const findCommonItems = (arr1, arr2) => {
  const obj = {};
  arr1.forEach(el => (obj[el] = true));
  return arr2.find(el => obj[el] === true) ? true : false;
};

const findCommonItems2 = (arr1, arr2) => {
  const obj = {};
  arr1.forEach(el => (obj[el] = true));
  return arr2.some(el => obj[el] === true);
};

const findCommonItems3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
};
