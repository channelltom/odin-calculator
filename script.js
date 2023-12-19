var oper1 = null;
var oper2 = null;
var currentOperator = null;
var sumResult = "";

const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const multiply = function (val1, val2) {
  return val1 * val2;
};

const divide = function (val1, val2) {
  return val1 / val2;
};

const operate = function (operator, value1, value2) {
  if (operator === "+") {
    return add(value1, value2);
  } else if (operator === "-") {
    return subtract(value1, value2);
  } else if (operator === "x") {
    return multiply(value1, value2);
  } else if (operator === "÷") {
    return divide(value1, value2);
  }
};

const numElements = document.querySelectorAll(".data-number");
const operatorElements = document.querySelectorAll(".data-operator");
const primaryField = document.querySelector(".input");
const secondaryField = document.querySelector(".result");
const clrBtn = document.querySelector("#clear");
const eqBtn = document.querySelector("#equals");
const backBtn = document.querySelector("#back");

var newEquation = false;

numElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    onNumPress(e);
  });
});

operatorElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentOperator = e.target.innerText;
    oper1 = primaryField.textContent;
    secondaryField.textContent = oper1 + " " + currentOperator;
    primaryField.textContent = "";
  });
});

eqBtn.addEventListener("click", () => {
  onEqBtnPress();
});

clrBtn.addEventListener("click", () => {
  primaryField.textContent = "";
  secondaryField.textContent = "";
});

backBtn.addEventListener("click", () => {
  fieldContents = primaryField.textContent.split("");
  fieldContents.pop();
  primaryField.textContent = fieldContents.join("");
});

function onEqBtnPress() {
  oper2 = primaryField.textContent;
  if (oper1 !== null && oper2 !== null && currentOperator !== null) {
    var sumResult = operate(
      currentOperator,
      parseFloat(oper1),
      parseFloat(oper2),
    );
    secondaryField.textContent += " " + oper2 + " " + "=";
    primaryField.textContent = sumResult;
    oper1 = null;
    oper2 = null;
    currentOperator = null;
    newEquation = true;
  }
}

function onNumPress(e) {
  const value = e.target.innerText;
  if (newEquation) {
    primaryField.textContent = "";
    newEquation = false;
  }
  primaryField.textContent += value;
}
