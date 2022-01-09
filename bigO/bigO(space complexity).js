//! Space complexity O(1) only one variable asset

const boooo = input => {
  for (let i = 0; i < input.length; i++) {
    console.log('boooo');
  }
};

boooo([1, 2, 3, 4, 5]);

//! Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6);
