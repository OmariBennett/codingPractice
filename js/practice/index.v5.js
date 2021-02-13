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

// ? 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

//? ====================================================================================================================================================

// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
//      Calculate multiplication of two numbers (input from user).
//      Calculate division of two numbers (input from user).
//      Get user input
//      Print result to the screen
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem.
//      Multiplication return a * b
//      Division return a / b
//      Make A Form
//      -- Get user input
//      -- Print result to the screen
//      -- Clear user input

/** Sample Form:  **/
// <form>
//   <label>
//     1st Number:
//     <input type='text'/>
//   </label>

//   <label>
//     2nd Number:
//     <input type='text'/>
//   </label>

//   <input type='button' value='Multiply'/>
//   <input type='button' value='Divide'/>
//   <input type='button' value='Clear'/>

//   <p>The Result Is:</p>
// </form>

// * 3. _Pseudocode_
let subTitle = document.querySelector('h3');
let form = document.createElement('form');

let containerDivOne = document.createElement('div'),
	containerDivTwo = document.createElement('div');

let inputLabelOne = document.createElement('label'),
	inputLabelTwo = document.createElement('label');

let inputTextOne = document.createElement('input'),
	inputTextTwo = document.createElement('input');

let resultParagraph = document.createElement('p');

let multiplicationBtn = document.createElement('input'),
	divisionBtn = document.createElement('input'),
	clearBtn = document.createElement('input');

// *todo -- C2. Print result to the screen
function printResult(fn) {
	// *todo -- C2. Print result to the scre
	return (resultParagraph.innerText = `The Result Is : ${fn}`);
}

// *todo -- -- CA. Sanitizer user input / parseInt()
// *todo A. Multiplication return a * b
function multiplication(a, b) {
	return printResult(parseInt(a) * parseInt(b));
}

// *todo B. Division return a / b
function division(a, b) {
	return printResult(parseInt(a) / parseInt(b));
}

// *todo -- C3 .Clear user input
function clearInput() {
	inputTextOne.value = '';
	inputTextTwo.value = '';
	resultParagraph.innerText = '';
	return;
}

// *todo C. Make A Form
function buildForm() {
	subTitle.after(form);
	form.append(containerDivOne);
	form.append(containerDivTwo);
	form.append(multiplicationBtn);
	form.append(divisionBtn);
	form.append(clearBtn);
	form.append(resultParagraph);
	containerDivOne.append(inputLabelOne);
	containerDivTwo.append(inputLabelTwo);
	inputLabelOne.after(inputTextOne);
	inputLabelTwo.after(inputTextTwo);
}

function initializeForm() {
	inputTextOne.type = 'text';
	inputTextTwo.type = 'text';
	multiplicationBtn.type = 'button';
	divisionBtn.type = 'button';
	clearBtn.type = 'button';
	inputLabelOne.innerText = '1st Number:';
	inputLabelTwo.innerText = '2nd Number:';
	multiplicationBtn.value = 'Multiply';
	divisionBtn.value = 'Divide';
	clearBtn.value = 'Clear';
}

function initForm() {
	buildForm();
	initializeForm();
	// *todo -- C1. Get user input
	multiplicationBtn.addEventListener('click', () =>
		multiplication(inputTextOne.value, inputTextTwo.value),
	);
	divisionBtn.addEventListener('click', () =>
		division(inputTextOne.value, inputTextTwo.value),
	);
	clearBtn.addEventListener('click', () => clearInput());
}

initForm();

//? ====================================================================================================================================================

// ? 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// ?     [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// ?     Expected Output :
// ?     60°C is 140 °F
// ?     45°F is 7.222222222222222°C

//? ====================================================================================================================================================

// Problem Solving
// If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem

// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem

// * 3. _Pseudocode_
