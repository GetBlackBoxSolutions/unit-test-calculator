import { expect } from "@jest/globals";
import calculate, { sum, subtract, multiply, divide } from "./calculator";

<<<<<<< Updated upstream
describe("my calculator", () => {
  test("should sum two numbers", () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
  });

  test("should subtract two numbers", () => {
    const result = subtract(10, 8);

    expect(result).toBe(2);
  });

  test("should subtract two numbers and return a negative number", () => {
    const result = subtract(10, 15);

    expect(result).toBe(-5);
  });

  test("should multiply two numbers", () => {
    const result = multiply(10, 10);

    expect(result).toBe(100);
  });

  test("should divid numbers", () => {
    const result = divide(16, 2);

    expect(result).toBe(8);
  });

  test("should return a message if you try to divide by 0", () => {
    const result = divide(16, 0);

    expect(result).toBe("Can not divide by 0");
  });
=======
test("should sum two numbers", () => {
  // Arrange
  const numOne = 2;
  const numTwo = 3;

  // Act
  const result = sum(numOne, numTwo);

  // Assert
  expect(result).toBe(5);
});

test("should subtract two numbers", () => {
  const result = subtract(10, 8);
  expect(result).toBe(2);
});

test("should subtract two numbers and return a negative number", () => {
  const result = subtract(10, 15);

  expect(result).toBe(-5);
});

test("should multiply two numbers", () => {
  const result = multiply(10, 10);

  expect(result).toBe(100);
});

test("should divid numbers", () => {
  const result = divide(16, 2);

  expect(result).toBe(8);
});

test("should return a message if you try to divide by 0", () => {
  const result = divide(16, 0);

  expect(result).toBe("Can not divide by 0");
>>>>>>> Stashed changes
});

describe("my calculator", () => {
  test("should sum two numbers when a '+' sign is given", () => {
    // Arrange
    const operator = "+";
    const numOne = 5;
    const numTwo = 5;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe(10);
  });

  test("should subtract two numbers when a '-' sign is given", () => {
    // Arrange
    const operator = "-";
    const numOne = 10;
    const numTwo = 8;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe(2);
  });

  test("should multiply two numbers when a '*' sign is given", () => {
    // Arrange
    const operator = "*";
    const numOne = 2;
    const numTwo = 8;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe(16);
  });

  test("should divide two numbers when a '/' sign is given", () => {
    // Arrange
    const operator = "/";
    const numOne = 16;
    const numTwo = 2;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe(8);
  });

  test("should not be able to divide by 0", () => {
    // Arrange
    const operator = "/";
    const numOne = 16;
    const numTwo = 0;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe("Can not divide by 0");
  });

  test("should return an message if an invalid operator is used", () => {
    // Arrange
    const operator = "!";
    const numOne = 0;
    const numTwo = 0;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe("Invalid operator");
  });

  test("should return 'ERROR' if NaN is passed in", () => {
    // Arrange
    const operator = "*";
    const numOne = NaN;
    const numTwo = 0;

    // Arrange
    const result = calculate(numOne, numTwo, operator);

    // Assert
    expect(result).toBe("Error");
  });
});
