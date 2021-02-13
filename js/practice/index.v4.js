// * Problem Solving
// ** If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// * Problem Solving Steps:
// * - focus on logic, NOT syntayear

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

// ? 9. Write a JavaScript program to calculate days left until next Christmas.

//? ====================================================================================================================================================
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Calculate days left until NEXT Christmas
// Get today's date
// Get Christmas date
// Print to the console
// *todo 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// * Today's date = new Date()
// -- Get this month
// -- Get this day
// * Christmas date = new Date(2021, 11, 25) or new Date('Decmeber 25, 2021')
// -- Set this month
// -- Set this day
// * Calculate the NEXT Christmas date
// -- this month & day - Dec, 25
// ?  Months with 30 days
//     April 3
//     June 5
//     September 8
//     November 10
// ? Months with 31 days
//     January 0
//     March 2
//     May 4
//     July 6
//     August 7
//     October 9
//     December 11
// ? Months with 28 to 29 days
//     February 1
// The next leap year is Thursday 29th February 2024
// * Print to the console
// *todo 3. _Pseudocode_

let today = new Date(),
	currentMonth = today.getMonth(),
	currentYear = today.getFullYear(),
	currentDay = today.getDate(),
	untilNextChristmas = 0,
	christmas = 25 - currentDay - 1;

function leapyear(year) {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function calculateThirtyDayMonths(i) {
	// Calculate months with 30 days
	if (i === 3 || i === 5 || i === 8 || i === 10) {
		untilNextChristmas += 30;
	}
}

function calculateThirtyOneDayMonths(i) {
	// Calculate  months with 31 days
	if (i === 0 || i === 2 || i === 4 || i === 6 || i === 7 || i === 9) {
		untilNextChristmas += 31;
	}
}

function calculateFebruary(i) {
	// Calculate for month of February
	if (i === 1) {
		leapyear(currentYear)
			? (untilNextChristmas += 29)
			: (untilNextChristmas += 28);
	}
}

// Calculate for the days in
function calculateDecember(i) {
	if (i === 11) {
		untilNextChristmas += christmas;
	}
}

function calculateNextChristmas() {
	// Calculate days
	if (currentMonth === 11 && currentDay >= 26) {
		leapyear(currentYear + 1)
			? (untilNextChristmas = currentDay + 366)
			: (untilNextChristmas = currentDay + 365);
		return console.log({ untilNextChristmas });
	}
	for (let i = currentMonth; i <= 11; i++) {
		calculateThirtyDayMonths(i);
		calculateThirtyOneDayMonths(i);
		calculateFebruary(i);
	}
	console.log({ untilNextChristmas });
}

calculateNextChristmas();
