/*
!#Big O Cheat Sheet:

!-Big Os

O(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

!-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

!-Rule BookRule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

!-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations
*/

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
const itemsTwo = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5'];

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(1)

const showFirstItem = items => {
	console.log(items[0]);
};

const showFirstTwoItems = items => {
	console.log(items[0]);
	console.log(items[1]);
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(n)

const showAllItems = items => {
	for (let i = 0; i < items.length; i++) {
		console.log(items[i]);
	}
};

const showAllItems2 = items => {
	items.forEach(item => console.log(item));
};

const showAllItemsAndReverseItems = items => {
	for (let i = 0; i < items.length; i++) {
		console.log(items[i]);
	}

	for (let j = items.length - 1; j > -1; j--) {
		console.log(items[j]);
	}
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(a+b)

const showAllItemsFromTwoInputs = (items, itemsTwo) => {
	items.forEach(item => console.log(item));
	itemsTwo.forEach(item => console.log(item));
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(n^2)

const showAllItemsPairs = items => {
	for (let i = 0; i < items.length; i++) {
		for (let j = 0; j < items.length; j++) {
			console.log(items[i], items[j]);
		}
	}
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//! O(a * b)

const showAllItemsPairsTwoInputs = (items, itemsTwo) => {
	items.forEach(firstItem => items.forEach(secondItem => console.log(firstItem + secondItem)));

	itemsTwo.forEach(firstItem =>
		itemsTwo.forEach(secondItem => console.log(firstItem + secondItem)),
	);
};

showAllItemsPairsTwoInputs(items, itemsTwo);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(n^3)

const o3 = items => {
	for (let i = 0; i < items.length; i++) {
		for (let j = 0; j < items.length; j++) {
			for (let x = 0; x < items.length; x++) {
				console.log('Nested loop with 3 levels');
			}
		}
	}
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//! O(n!)

function breakMyBrowser(n) {
	for (let i = 0; i < n; i++) {
		breakMyBrowser(n - 1);
	}
}
