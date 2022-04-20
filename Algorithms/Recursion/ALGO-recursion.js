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
	if (number <= 1) return 1;
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	if (number <= 1) return 1;

	for (let i = number - 1; i > 1; i--) {
		number *= i;
	}

	return number;
}

// console.log(findFactorialIterative(5));
// console.log(findFactorialRecursive(0));

function fibonacciIterative(n) {
	let a = 0;
	let b = 1;
	let c = a + b;

	for (let i = 2; i < n; i++) {
		a = b;
		b = c;
		c = a + b;
	}

	return c;
}

function fibonacciRecursive(n) {
	debugger;
	if (n <= 1) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciIterative(4));
// console.log(fibonacciRecursive(4));

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233

/*
                            5
                          fib(5)
                    3               2
                  fib(4)    +     fib(3)
                2        1      1        1
             fib(3) + fib(2)  fib(2) + fib(1)        
           1     1    1    0   1   0
          f(2)+f(1) f(1)+f(0) f(1)+f(0)
        1   0
      f(1)+f(0)
*/

//Implement a function that reverses a string using iteration...and then recursion!

function reverseStringRecursion(str) {
	if (str === '') {
		return '';
	} else {
		return reverseStringRecursion(str.substring(1)) + str.charAt(0);
	}
}

console.log(reverseStringRecursion('yoyo mastery'));
//should return: 'yretsam oyoy'

// function revStr(str) {
//   let fin = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     fin += str[i];
//   }
//   return fin;
// }

function revStr(str) {
	let fin = '';
	for (let i = 0; i < str.length; i++) {
		// fin = str.charAt(i) + fin;
		fin = str[i] + fin;
	}
	return fin;
}

console.log(revStr('yoyo mastery'));
