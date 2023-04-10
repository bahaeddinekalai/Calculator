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

let grid = document.querySelector(".main-buttons");
const size = 4;
for (let i = 0; i < size; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < size; j++) {
    let column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }
  grid.appendChild(row);
}
let cells = document.querySelectorAll(".column");

const content = [7, 4, 1, ".", 8, 5, 2, 0, 9, 6, 3, "=", "÷", "×", "-", "+"];

for (let i = 0; i < cells.length; i++) {
  cells[i].innerHTML = `${content[i]}`;
}
