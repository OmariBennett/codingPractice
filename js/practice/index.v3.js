// * Problem Solving
// ** If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// * Problem Solving Steps:
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem

// *todo 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem

// *todo 3. _Pseudocode_
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
// Random number Math. floor(Math.random() * 10)
// User input = ?
// Check if user input is a interger
//check if user input is between 1 - 10
// if(userInput === randomNumber) return messsage

// *todo 3. _Pseudocode_
// * =================================================================================
// * <h3>I'm Thinking Of A Number Between 1 through 10?</h3>
// * <p>Submit a number to see if you correct</p>
// *   <lable> Input your guess:
// *     <input/>
// *   </lable>
// *     <button>Sumbit</button>
// * =================================================================================

let question = document.createElement('h3');
let inputQuestion = document.createElement('label');
let subTitle = document.createElement('p');
let lineBreak = document.createElement('br');
let input = document.createElement('input');
let span = document.createElement('span');
let h3 = document.querySelector('h3');

question.innerText = `I'm Thinking Of A Number Between 1 through 10?`;
subTitle.innerText = 'Submit a number to see if you correct...';
inputQuestion.innerText = 'Input your guess:';

input.type = 'text';

h3.after(question);
question.after(subTitle);
subTitle.after(lineBreak);
lineBreak.after(inputQuestion);
inputQuestion.append(input);

function handleClick(e) {
	let randomNumber = Math.floor(Math.random() * 10) + 1;

	let useInput = e.target.value;
	if (randomNumber === parseInt(useInput)) {
		span.innerText = `The correct awnser: ${randomNumber}`;
		lineBreak.before(span);
		console.log('Good Work');
		return (e.target.value = '');
	} else {
		span.innerText = `The correct awnser: ${randomNumber}`;
		lineBreak.before(span);
		console.log('Not matched');
		return (e.target.value = '');
	}
}

inputQuestion.addEventListener('keyup', handleClick);
