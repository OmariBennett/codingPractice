// Problem Solving
// If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem

// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem

// * 3. _Pseudocode_
// - focus on logic, NOT syntax

// - added benefit of writing pseudocode is that you can focus naming things before your code gets filled up with a bunch of other syntax

// - goal is to write an outline for how you will implement your code

// - the idea is tha you focus onto logic of your code without having to worry about the syntax or implementiation details

// * 4. _Test-Driven Development_

// * 5. _Implement_
// - "Done is better than perfect"

// - try to get it done as quicky as possible

// - have all your test pasing abd have a working prototype in the least amount of time possible even if the code is not perfect

// - the reason for that is psychological Solving a big problem is a coloection of small staps

// * 6. _Practice_ "to become really good at anything, you have to practice and repeat, practice and repeat, until the technique becomes intuitive."

// * 7. Repeate

//? ====================================================================================================================================================

// ? 14. Write a JavaScript exercise to get the extension of a filename.

//? ====================================================================================================================================================

// Problem Solving
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// 14. Get the extension of a filename.
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// Get File name
// Get the extension of a filename. path.extname()
// Log result
// * 3. _Pseudocode_
const path = require('path');
// todo Get File name
// todo Get the extension of a filename. path.()
// todo Log result
console.log(path.basename(__filename));
console.log(path.extname(__filename));

let filename = 'system.php';
console.log(filename.split('.').pop());
filename = 'abc.js';
console.log(filename.split('.').pop());

//? ====================================================================================================================================================

// ? 15. Write a JavaScript program to get the difference between a given number and 13,
// ?     if the number is greater than 13 return double the absolute difference.

//? ====================================================================================================================================================

// Problem Solving
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Get the difference between a given number and 13
// If the number is greater than 13 return double the absolute difference.
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// Get the difference between a given number and 13
// If(the number is greater than 13) return double the absolute difference.
// Get  double the absolute difference.
// * 3. _Pseudocode_
function questionfifteen(n) {
	// todo If(the number is greater than 13) return double the absolute difference.
	// todo Get  double the absolute difference. fn = (n - 13) * 2
	// todo Get the difference between a given number and 13- 13 - n
	return n <= 13 ? console.log(13 - n) : console.log((n - 13) * 2);
}

questionfifteen(32);
questionfifteen(11);
