function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = 0;
let secondeNumber = 0;
let operator = "+";

function operate(operator, firstNumber, secondeNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondeNumber);
      break;
    case "-":
      subtract(firstNumber, secondeNumber);
      break;
    case "*":
      multiply(firstNumber, secondeNumber);
      break;
    case "/":
      divide(firstNumber, secondeNumber);
      break;
    default:
      add(firstNumber, secondeNumber);
      break;
  }
}
