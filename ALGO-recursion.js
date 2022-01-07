let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done';
  }

  counter++;
  return inception();
}

// console.log(inception());

/*
1) Indentify the base case
2) Indentify the recursive case
3) Get closer and closer to base case and return when needed (Ususally you have 2 returns)
*/

function findFactorialRecursive(number) {
  if (number === 0) return 1;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = number;
  for (let i = number - 1; i > 1; i--) {
    answer = answer * i;
  }
  return answer;
}

// console.log(findFactorialIterative(1));
console.log(findFactorialRecursive(0));
