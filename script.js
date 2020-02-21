class Calculator {
    constructor(previousOutputText, currentOutputText) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.clear();
    }

    clear() {
        this.currentOutput = '';
        this.previousOutput = '';
        this.operation = undefined;
    }

    delete() {

    }

    replaceNumber(number) {
        this.currentOutput = number;
    }

    chooseOperation(operation) {

    }

    calculate() {

    }

    updateDisplay() {
        this.currentOutputText.innerText = this.currentOutput;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOutputText = document.querySelector('[data-previous-output]');
const currentOutputText = document.querySelector('[data-current-output]');

const calculator = new Calculator(previousOutputText, currentOutputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.replaceNumber(button.innerText)
        calculator.updateDisplay()
    })
})



