//? ====================================================================================================================================================

// ? 2. Write a JavaScript program to print the contents of the 'current window'

//? ====================================================================================================================================================
// *todo 1. _Identify_ - the first step is to identify and understand the nature of the problem
// <p>Click the button to print window content.</p>
// <button>Click Me!</button>
// *todo 2.  _Research & Refine_
// Create dom node element
// Append element to the window
// f() window.print()
// *todo 3. _Pseudocode_
let p = document.createElement('p'),
	button = document.createElement('button'),
	h3 = document.querySelector('h3');
function printWindow() {
	window.print();
	return;
}

p.innerText = 'Click the button to print window content.';
button.innerText = 'Click Me!';

h3.after(p);
p.after(button);

button.addEventListener('click', printWindow);
