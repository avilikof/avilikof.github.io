let HELLO_WOLRD = 'Hello World!!!';
let ALERT = 'ALERT';

alert(ALERT);
let userAnswer = prompt('Type your name');
let result;
result = confirm(`Is your name ${userAnswer}?`);

if (result) {
    document.write(`Hello ${userAnswer}`)
} else {
    document.write(HELLO_WOLRD)
}

// document.write(HELLO_WOLRD + ' From var');
