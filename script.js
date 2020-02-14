let outputMessage = document.querySelector('.output-display');
let numbersButton = document.querySelector('.numbers-container');
let clear = document.querySelector('.clear')
clear.addEventListener('click', () => output.textContent = "");
const defaultMessage = 0;
let previousNum = defaultMessage;
let currentNum = defaultMessage;

outputMessage.textContent = defaultMessage;

numbersButton.addEventListener('click', e => {
    if(e.target.matches('button')) {
        console.log(this.id)
    }
})

let add = (num1, num2) => {
    a+b;
}
let subtract = (num1, num2) => {
    num1 - num2;
}

function printValue() {
    console.log(this.id);
}

// HAVE A FUNCTION CALL OTHER FUNCTIONS BASED ON THE CLASS NAME


