// * Problem Solving
// ** If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." -Albert Einstein

// * Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem

// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem

// * 3. _Pseudocode_
// * - focus on logic, NOT syntax

// * - added benefit of writing pseudocode is that you can focus naming things before your code gets filled up with a bunch of other syntax

// * - goal is to write an outline for how you will implement your code

// * - the idea is tha you focus onto logic of your code without having to worry about the syntax or implementiation details

// * 4. _Test-Driven Development_

// * 5. _Implement_
// * - "Done is better than perfect"

// * - try to get it done as quicky as possible

// * - have all your test pasing abd have a working prototype in the least amount of time possible even if the code is not perfect

// * - the reason for that is psychological Solving a big problem is a coloection of small staps

// * 6. _Practice_ "to become really good at anything, you have to practice and repeat, practice and repeat, until the technique becomes intuitive."

// * 7. Repeate

//? ====================================================================================================================================================

// ? 16. Write a JavaScript program to compute the sum of the two given integers.
// ?     If the two values are same, then returns triple their sum.

//? ====================================================================================================================================================

// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// Compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.

// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// Compute the sum of the two given integers.  fn() = return a + b
// If the two values are same, then returns triple their sum. If( a === b ) return triple fn()
// Triple fn() = ( number ) => return number * 3

// * 3. _Pseudocode_
//<section>
//	<label>
//		<input type='text' />
//	</label>
//	<label>
//		<input type='text' />
//	</label>
//	<input type='button' />
//	<p>Anwser Is:</p>
//</section>
const startHere = document.querySelector('h3');
// todo Compute the sum of the two given integers.  fn() = return a + b
const addNumbers = (a, b) => a + b;
// todo Triple fn() = ( number ) => return number * 3\
const getTriple = (a) => a * 3;
// todo If the two values are same, then returns triple their sum. If( a === b ) return triple fn()
function questionSixteenAnwser(a, b) {
	let numberA = parseInt(a),
		numberB = parseInt(b);
	if (numberA === numberB) {
		return getTriple(addNumbers(numberA, numberB));
	}
	return addNumbers(numberA, numberB);
}

function questionSixteen() {
	const questionSixteenWrapper = document.createElement('section');
	const inputLableOne = document.createElement('label');
	const inputLableTwo = document.createElement('label');
	const userInputOne = document.createElement('input');
	const userInputTwo = document.createElement('input');
	const submitBtn = document.createElement('input');
	const wrapperBreakOne = document.createElement('br');
	const wrapperBreakTwo = document.createElement('br');
	const printResult = document.createElement('p');
	const question = document.createElement('p');

	function hanldeClick() {
		submitBtn.after(printResult);
		printResult.innerText = `Anwser Is: ${questionSixteenAnwser(
			userInputOne.value,
			userInputTwo.value,
		)}`;
		return resetInput();
	}

	function resetInput() {
		userInputOne.value = '';
		userInputTwo.value = '';
	}

	// Create Question Sixteen Section
	startHere.after(questionSixteenWrapper);
	questionSixteenWrapper.append(question);
	questionSixteenWrapper.append(inputLableOne);
	questionSixteenWrapper.append(inputLableTwo);

	// Create & append the user input type='text
	question.innerText =
		'16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.';
	userInputOne.type = 'text';
	userInputTwo.type = 'text';
	inputLableOne.innerText = 'Enter The First Number: ';
	inputLableTwo.innerText = 'Enter The Second Number: ';
	inputLableTwo.append(userInputTwo);
	inputLableOne.append(userInputOne);

	// Adds a Page break
	inputLableOne.after(wrapperBreakOne);
	inputLableTwo.after(wrapperBreakTwo);

	submitBtn.type = 'button';
	submitBtn.value = 'Submit';

	wrapperBreakTwo.after(submitBtn);
	return submitBtn.addEventListener('click', hanldeClick);
}

//? ====================================================================================================================================================

// ? 17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// ? 		 Returns triple their absolute difference if the specified number is greater than 19.

//? ====================================================================================================================================================
// * Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
//  		Compute the absolute difference between a specified number and 19
//			Returns triple their absolute difference
// 			If the specified number is greater than 19
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// todo	Compute the absolute difference between a specified number and 19
//// result = 19 - number
// todo	If the specified number is greater than 19
//// if( specified number > 19 ) return triple( absolute difference )
// todo	Returns triple their absolute difference
//// triple( absolute difference ) = (number - 19) * 3

// * 3. _Pseudocode_
function questionSeventeen() {
	const sectionTag = document.createElement('section');
	const label = document.createElement('label');
	const input = document.createElement('input');
	const inputButton = document.createElement('input');
	const result = document.createElement('p');
	const question = document.createElement('p');

	function questionSeventeenAnwser(number) {
		const triple = (number) => (number - 19) * 3;

		inputButton.after(result);

		if (number <= 19) {
			return (result.innerText = `Difference between a ${number} and 19 = ${
				19 - number
			}`);
		} else {
			return (result.innerText = `Since ${number} is greater than 19, therefore (19 - ${number}) * 3 = ${triple(
				number,
			)}`);
		}
	}

	question.innerText = `17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.`;
	label.innerText = 'Submit a number: ';
	input.type = 'text';
	inputButton.type = 'button';
	inputButton.value = 'Submit';

	startHere.after(sectionTag);
	sectionTag.append(question);
	sectionTag.append(label);
	label.append(input);
	label.after(inputButton);

	return inputButton.addEventListener('click', () =>
		questionSeventeenAnwser(input.value),
	);
}

//? ====================================================================================================================================================
// ? 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50
// ?		 or if their sum is 50.
//? ====================================================================================================================================================
// * Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
//			Check two given numbers and RETURN TRUE if one of the number is 50
//			Or if their sum is 50
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// todo  Check two given numbers and RETURN TRUE if one of the number is 50
// if( num1 === 50 || num2 === 50 ) return true
// todo  Or if their sum is 50
// if( sum === 50 ) return true
// * 3. _Pseudocode_

function questionEightteen() {
	const sectionTag = document.createElement('section');
	const question = document.createElement('p');
	const labelOne = document.createElement('label');
	const inputOne = document.createElement('input');
	const labelTwo = document.createElement('label');
	const inputTwo = document.createElement('input');
	const inputButton = document.createElement('input');
	const result = document.createElement('p');
	const brTag = document.createElement('br');
	const breakTag = document.createElement('br');

	function questionEightteenAnwser(inputOne, inputTwo) {
		const numberOne = parseInt(inputOne),
			numberTwo = parseInt(inputTwo),
			sum = numberOne + numberTwo;

		if (numberOne === 50 || numberTwo === 50 || sum === 50) {
			breakTag.after(result);
			return (result.innerText = true);
		} else {
			return result.remove();
		}
	}

	question.innerText =
		'18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.';

	labelOne.innerText = 'Enter The First Number: ';
	inputOne.type = 'text';
	labelTwo.innerText = 'Enter The Second Number: ';
	inputTwo.type = 'text';

	inputButton.type = 'button';
	inputButton.value = 'Submit';

	startHere.after(sectionTag);
	sectionTag.append(question);
	question.after(labelOne);
	labelOne.append(inputOne);
	labelOne.after(brTag);
	brTag.after(labelTwo);
	labelTwo.append(inputTwo);
	labelTwo.after(breakTag);
	breakTag.after(inputButton);
	return inputButton.addEventListener('click', () => {
		questionEightteenAnwser(inputOne.value, inputTwo.value);
	});
}

//? ====================================================================================================================================================
// ? 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
//? ====================================================================================================================================================
// * Problem Solving Steps:
// * 1. _Identify_ - the first step is to identify and understand the nature of the problem
// * 2.  _Research & Refine_ - at this step you should have a main problem broken down into a few subproblem
// * 3. _Pseudocode_

questionEightteen();
questionSeventeen();
questionSixteen();
