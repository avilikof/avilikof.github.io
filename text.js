let HELLO_WOLRD = 'Hello World!!!';
let ALERT = 'ALERT';

const myPar = document.querySelector('p');
const myHeading = document.querySelector('h1');

myHeading.textContent = HELLO_WOLRD;

function getName() {
    let userAnswer = prompt('Type your name');
    if (userAnswer) {
        // User must confirm that his name is correct;
    } else {
        alert('This filed cannot be blank !!!');
        getName();
    }
}

function confirmName(userName) {
    let confirmName = confirm(`Is your name correct? ${userName}`);
    if (confirmName) {
        myPar.textContent = `Hi ${userName}`;
    } else {
        myPar.textContent = 'Hello STRANGER!';
    }
}

getName();
