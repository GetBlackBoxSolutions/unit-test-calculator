export function sum(numOne: number, numTwo: number) {
  return numOne + numTwo;
}

export function subtract(numOne: number, numTwo: number) {
  return numOne - numTwo;
}

export function multiply(numOne: number, numTwo: number) {
  return numOne * numTwo;
}

export function divide(numOne: number, numTwo: number) {
  if (numTwo === 0) return "Can not divide by 0";

  return numOne / numTwo;
}

export default function calculate(
  numOne: number,
  numTwo: number,
  operator: string
) {
  if (isNaN(numOne) || isNaN(numTwo)) return "Error";

  switch (operator) {
    case "+":
<<<<<<< Updated upstream
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "*":
      return numOne * numTwo;
    case "/":
      if (numTwo === 0) return "Can not divide by 0";
      return numOne / numTwo;
=======
      return sum(numOne, numTwo);
    case "-":
      return subtract(numOne, numTwo);
    case "*":
      return multiply(numOne, numTwo);
    case "/":
      return divide(numOne, numTwo);
>>>>>>> Stashed changes
    default:
      return "Invalid operator";
  }
}
