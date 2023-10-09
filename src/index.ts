// Get Elements
const numberElements = document?.getElementsByClassName(
  "btn-number"
) as HTMLCollectionOf<HTMLButtonElement>;
const operatorElements = document?.getElementsByClassName(
  "btn-operator"
) as HTMLCollectionOf<HTMLButtonElement>;
const calculateElement = document?.getElementById(
  "calculate"
) as HTMLButtonElement;
const numberInputElement = document?.getElementById(
  "number-input"
) as HTMLInputElement;
const currentOperatorElement = document?.getElementById(
  "current-operator"
) as HTMLInputElement;
const clearElement = document?.getElementById("clear") as HTMLInputElement;

// Default input to 0
numberInputElement.value = "0";

// Set variables to hold the current operator and the display element
let numberOne = "";
let numberTwo = "";

// Add event listeners to all number buttons
for (let i = 0; i < numberElements.length; i++) {
  numberElements[i].addEventListener("click", function () {
    if (numberInputElement.value === "0") numberInputElement.value = "";
    numberInputElement.value += numberElements[i].innerHTML;
  });
}

// Add event listeners to all operator buttons
for (let i = 0; i < operatorElements.length; i++) {
  operatorElements[i].addEventListener("click", function () {
    currentOperatorElement.innerHTML = operatorElements[i].innerHTML;
    numberOne = numberInputElement.value;
    numberInputElement.value = "0";
    numberTwo = "";
  });
}

// Add event listener to the clear button that clears the display
clearElement.addEventListener("click", function () {
  numberInputElement.value = "0";
  numberOne = "";
  numberTwo = "";
  currentOperatorElement.innerHTML = "";
});

// Add event listener to the calculate button that console logs the current number
calculateElement.addEventListener("click", function () {
  const currentOperator = currentOperatorElement.innerHTML;

  let tempNumberOne = 0;
  let tempNumberTwo = 0;

  if (numberTwo === "") {
    tempNumberOne = Number(numberOne);
    tempNumberTwo = Number(numberInputElement.value);
    numberTwo = numberInputElement.value;
  } else {
    tempNumberOne = Number(numberInputElement.value);
    tempNumberTwo = Number(numberTwo);
  }

  // TODO: Add logic to calculate the total based on the current operator
  const total = 0;

  numberInputElement.value = total.toString();
});
