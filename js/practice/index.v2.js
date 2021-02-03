// * Problem Solving
// ** If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// * Problem Solving Steps:
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem

// *todo 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem

// *todo 3. _Pseudocode_
// * - focus on logic, NOT syntax

// * - added benefit of writing pseudocode is that you can focus naming things before your code gets filled up with a bunch of other syntax

// * - goal is to write an outline for how you will implement your code

// * - the idea is tha you focus onto logic of your code without having to worry about the syntax or implementiation details

// *todo 4. _Test-Driven Development_

// *todo 5. _Implement_
// * - "Done is better than perfect"

// * - try to get it done as quicky as possible

// * - have all your test pasing abd have a working prototype in the least amount of time possible even if the code is not perfect

// * - the reason for that is psychological Solving a big problem is a coloection of small staps

// *todo 6. _Practice_ "to become really good at anything, you have to practice and repeat, practice and repeat, until the technique becomes intuitive."

// *todo 7. Repeate

//? ====================================================================================================================================================

// ? 3. Write a JavaScript program to get the current date.
// ? Expected Output :
// ? mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//? ====================================================================================================================================================

// *todo 1. _Identify_
// Display mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// *todo 2.  _Research & Refine_
// Get Month 0 - 11 (Jan - Dec) .getMonth()
// Get Month 0 - 11 (Jan - Dec) .getDay()
// Get Year ####  .getFullYear()

// *todo 3. _Pseudocode_
let date = new Date(),
	month = date.getMonth() + 10,
	currentMonth = month <= 9 ? `0${month}` : month,
	day = date.getDay(),
	currenDay = day <= 9 ? `0${day}` : day,
	year = date.getFullYear();

console.log(`Output option mm/dd/yyyy: ${currentMonth}/${currenDay}/${year}`);
// console.log(`Output option mm-dd-yyyy: ${currentMonth}-${currenDay}-${year}`);
// console.log(`Output option dd-mm-yyyy: ${currenDay}-${currentMonth}-${year}`);
// console.log(`Output option dd/mm/yyyy: ${currenDay}/${currentMonth}/${year}`);

//? ====================================================================================================================================================

// ? 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

//? ====================================================================================================================================================

// *todo 1. _Identify_
// Area of a triangle: Area = 1/2 b * h
// Using heron's formula to find the area of a triangle
// Math.sqrt()

// *todo 2.  _Research & Refine_
function areaOfATriangle(a, b, c) {
	return (a + b + c) / 2;
}
function heronFormula(a, b, c) {
	let s = areaOfATriangle(a, b, c);
	return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

console.log(heronFormula(10, 5, 7));
// *todo 3. _Pseudocode_
