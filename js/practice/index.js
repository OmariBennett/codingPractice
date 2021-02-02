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

// ? 1. Write a JavaScript program to display the current day and time in the following format.
// ? Sample Output : Today is : Tuesday.
// ? Current time is : 10 PM : 30 : 38

//? ====================================================================================================================================================
// *todo 1. _Identify_
let currentDate = new Date();
let currentDay = currentDate.getDay();
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();
let meridiem = currentHour > 12 ? 'PM' : 'AM';
let twentyFourHourTime = currentHour > 12 ? currentHour - 12 : currentHour;
let daysOfTheWeek = [
	'Sun',
	'Mon',
	'Tuesday',
	'Wednes',
	'Thurs',
	'Fri',
	'Satur',
];

// *todo 2.  _Research & Refine_
// Days of the week 0 - 6 === Sun - Sat new Date().getDay()
// Get hour new Date().getHours() - 12
// Get mintues new Date().getMinutes()
// Get seconds new Date().getSeconds()
// `Today is : ${daysOfTheWeek[currentDay]}day.${'\n'}Current time is : ${
// 	currentHour - 12
// } ${meridiem} : ${currentMinutes}: ${currentSeconds}`;

// *todo 3. _Pseudocode_
console.log(`Today is : ${daysOfTheWeek[currentDay]}day.`);
console.log(
	`Current time is : ${twentyFourHourTime} ${meridiem} : ${currentMinutes}: ${currentSeconds}`,
);
