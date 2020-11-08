let HELLO_WOLRD = 'Hello World!!!';
let ALERT = 'ALERT';

const myPar = document.querySelector('p');
const myHeading = document.querySelector('h1');

myHeading.textContent = HELLO_WOLRD;

function getName() {
    let userAnswer;
    if (!localStorage.getItem('name')) {
        userAnswer = prompt('Provide your name');
        if (userAnswer === null) {
            alert('Name cannot be blank!');
            getName();
        } else {
            localStorage.setItem('name', userAnswer);
            confirmName(localStorage.getItem('name'));
        }
    } else {
        confirmName(localStorage.getItem('name'));
    }
}

function confirmName(userName) {
    if (confirm(`Is your name really is ${userName} ?`)) {
        myPar.textContent = `Hi ${localStorage.getItem('name')}`;
    } else {
        alert('Hello STRANGER!');
        alert('Let\'s get know each other!');
        localStorage.removeItem('name');
        getName();
    }
}

getName();
if (localStorage.getItem('name') === null) {
    localStorage.removeItem('name');
}