let HELLO_WOLRD = 'Hello World!!!';
let ALERT = 'ALERT';

const myPar = document.querySelector('p');
const myHeading = document.querySelector('h1');

let userAnswer = prompt('Type your name');
let result;
result = confirm(`Is your name ${userAnswer}?`);

myHeading.textContent = HELLO_WOLRD;

if (result) {
    myPar.textContent = `Hello ${userAnswer}`;
} else {
    myPar.textContent = 'I don\' know you.';
}

// document.write(HELLO_WOLRD + ' From var');
