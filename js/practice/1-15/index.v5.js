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
let form = document.createElement('section');

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
	document.querySelector('h3').after(form);
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

// ? 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// ?     [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// ?     Expected Output :
// ?     60°C is 140 °F
// ?     45°F is 7.222222222222222°C

//? ====================================================================================================================================================

// Problem Solving
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Convert Fahrenheit to Celsius
// Convert Celsius to Fahrenheit

// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// todo A. Get user input
// todo -- 1. Sanitizer user input / parseInt()
// todo B. Convert Fahrenheit to Celsius C = (F - 32) / 1.8
// todo C. Convert Celsius to Fahrenheit F = 1.8(C) + 32
// todo D. Print result to the screen
// <main>
// <label>A Temperatuer Converter:</label>
// <input type='text'/>
// <br/>
// <input type='button' value='Fahrenheit to Celsius'/>
// <input type='button' value='Celsius to Fahrenheit'/>
// <p>result</p>
// </main>
// <></>
// </>
// * 3. _Pseudocode_
// todo A. Get user input
// todo -- 1. Sanitizer user input / parseInt()

//// C. Convert Celsius to Fahrenheit F = 1.8(C) + 32
function convertCelsiusToFahrenheit(C) {
	return 1.8 * C + 32;
}
//// B. Convert Fahrenheit to Celsius C = (F - 32) / 1.8
function convertFahrenheiTtoCelsius(F) {
	return (F - 32) / 1.8;
}

function initializeTempertuerConverter() {
	const converterDocument = document.createElement('section');
	const converterLabel = document.createElement('label');
	const temperatureInput = document.createElement('input');
	const documentSpaceBreak = document.createElement('br');
	const celsiusToFahrenheitBtn = document.createElement('input');
	const fahrenheitToCelsiusBtn = document.createElement('input');
	const converterResult = document.createElement('p');

	// todo D. Print result to the screen
	function initializeDocument() {
		converterLabel.append(temperatureInput);
		converterDocument.append(converterLabel);
		converterLabel.after(documentSpaceBreak);
		documentSpaceBreak.after(converterResult);
		documentSpaceBreak.after(fahrenheitToCelsiusBtn);
		documentSpaceBreak.after(celsiusToFahrenheitBtn);
		document.querySelector('h3').after(converterDocument);
		return;
	}

	function displayConverterLabel() {
		temperatureInput.type = 'text';
		converterLabel.innerText = 'A Temperatuer Converter: ';
		return;
	}

	function displayConverterBtn() {
		celsiusToFahrenheitBtn.value = 'Celsius To Fahrenheit';
		celsiusToFahrenheitBtn.type = 'button';
		fahrenheitToCelsiusBtn.value = 'Fahrenheit to Celsius';
		fahrenheitToCelsiusBtn.type = 'button';
		return;
	}

	function displayconverterResult(option) {
		let userinput = parseInt(temperatureInput.value);
		let result = option
			? convertCelsiusToFahrenheit(userinput)
			: convertFahrenheiTtoCelsius(userinput);

		if (option) {
			clearLable();
			converterResult.innerText = `${userinput} Celsius = ${result}° Fahrenheit`;
		} else {
			clearLable();
			converterResult.innerText = `${userinput}° Fahrenheit = ${result} Celsius`;
		}
		return;
	}

	function clearLable() {
		return (temperatureInput.value = '');
	}

	displayConverterLabel();
	displayConverterBtn();
	initializeDocument();
	celsiusToFahrenheitBtn.addEventListener('click', () => {
		displayconverterResult(true);
		return;
	});
	fahrenheitToCelsiusBtn.addEventListener('click', () => {
		displayconverterResult(false);
		return;
	});
	return;
}

initializeTempertuerConverter();

//? ====================================================================================================================================================

// ? 12. Write a JavaScript program to get the website URL

//? ====================================================================================================================================================

// Problem Solving
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Get the website URL
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// todo A. Get the website URL = document.URL
// * 3. _Pseudocode_
//// A. Get the website URL = document.URL
let displayDocumentURL = document.createElement('p');
document.querySelector('h3').after(displayDocumentURL);
displayDocumentURL.innerText = `Anwser for question 11: ${document.URL}`;

//? ====================================================================================================================================================

// ? 13. Write a JavaScript exercise to create a variable using a user-defined name.

//? ====================================================================================================================================================

// Problem Solving
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// todo A.
// <></>
// </>
// * 3. _Pseudocode_
var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name]);
console.log(this);
console.log(this.abcd);

const VAR_NAME = 'myName';
const VAR_VALUE = 'myValue';

const obj = {
	[VAR_NAME]: VAR_VALUE,
};

console.log(obj);
console.log(obj[VAR_NAME]);
