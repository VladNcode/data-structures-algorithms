const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

const array3 = ['a', 'b', 'c', 'x', 'c', 'c'];
const array4 = ['z', 'y', 'x'];

const array5 = [];
const array6 = [];

const findCommonItems = (array1, array2) => {
  const filteredArray = [...new Set([...array1, ...array2])];
  const obj = {};

  filteredArray.forEach(el => (obj[el] = ++obj[el] || 1));

  for (v in obj) {
    if (obj[v] > 1) {
      return true;
    }
  }

  return false;
};

console.log(findCommonItems(array5, array6));
