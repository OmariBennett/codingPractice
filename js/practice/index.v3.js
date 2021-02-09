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

// ? 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
// ? If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

//? ====================================================================================================================================================
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Program guess a number 1 - 10
// User guess a number
// If( programGuess === userGuess ) "Good Work" or "Not matched"
// *todo 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// Random number Math.floor(Math.random() * 10)
// User input = ?
// Check if user input is a interger
// Check if user input is between 1 - 10
// if(userInput === randomNumber) return messsage

// *todo 3. _Pseudocode_
// * =================================================================================
// * <h3>I'm Thinking Of A Number Between 1 through 10?</h3>
// * <p>Submit a number to see if you correct</p>
// * <lable> Input your guess:
// *   <input/>
// * </lable>
// * <button>Sumbit</button>
// * =================================================================================

let question = document.createElement('h3'),
	inputQuestion = document.createElement('label'),
	subTitle = document.createElement('p'),
	lineBreak = document.createElement('br'),
	input = document.createElement('input'),
	span = document.createElement('span'),
	h3 = document.querySelector('h3');

question.innerText = `I'm Thinking Of A Number Between 1 through 10?`;
subTitle.innerText = 'Submit a number to see if you correct...';
inputQuestion.innerText = 'Input your guess:';
input.type = 'text';

h3.after(question);
question.after(subTitle);
subTitle.after(lineBreak);
lineBreak.after(inputQuestion);
inputQuestion.append(input);

function outputMessage(randomNumber) {
	span.innerText = `The correct awnser: ${randomNumber}`;
	lineBreak.before(span);
}

function resetValue(e) {
	return (e.target.value = '');
}

function handleClick(e) {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	if (randomNumber === parseInt(e.target.value)) {
		outputMessage(randomNumber);
		console.log('Good Work');
		return resetValue(e);
	} else {
		outputMessage(randomNumber);
		console.log('Not matched');
		return resetValue(e);
	}
}

inputQuestion.addEventListener('keyup', handleClick);

//? ====================================================================================================================================================

// ? 9. Write a JavaScript program to calculate days left until next Christmas.

//? ====================================================================================================================================================
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Calculate days left until NEXT Chrismas
// Get today's date
// Get Chrismas date
// Print to the console
// *todo 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// * Today's date = new Date()
// -- Get Month
// -- Get Day
// -- Get Year
// * Chrismas date = new Date(2021, 11, 25) or new Date('Decmeber 25, 2021')
// -- Set Month
// -- Set Day
// -- Set Year
// * Calculate the NEXT Chrismas date
// -- if(today >= decmeber 25 ) check for next year Chrismas date
// -- else check for this year Chrismas date
// * Print to the console
// *todo 3. _Pseudocode_
