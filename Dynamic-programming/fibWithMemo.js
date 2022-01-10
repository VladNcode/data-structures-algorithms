// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

let calculations = 0;

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(7));

function fibMaster() {
  let cache = {};
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibMaster();

console.log(fasterFib(6));
