/**
 * Calculator utility with basic mathematical operations
 */

/**
 * Adds two or more numbers
 * @param {...number} numbers - Numbers to add
 * @returns {number} Sum of all numbers
 */
function add(...numbers) {
  if (numbers.length === 0) {
    throw new Error("At least one number is required");
  }

  return numbers.reduce((sum, num) => {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("All arguments must be valid numbers");
    }
    return sum + num;
  }, 0);
}

/**
 * Subtracts numbers (first number minus all others)
 * @param {number} firstNumber - The number to subtract from
 * @param {...number} numbers - Numbers to subtract
 * @returns {number} Result of subtraction
 */
function subtract(firstNumber, ...numbers) {
  if (typeof firstNumber !== "number" || isNaN(firstNumber)) {
    throw new Error("First argument must be a valid number");
  }

  if (numbers.length === 0) {
    return firstNumber;
  }

  const sumOfOthers = numbers.reduce((sum, num) => {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("All arguments must be valid numbers");
    }
    return sum + num;
  }, 0);

  return firstNumber - sumOfOthers;
}

/**
 * Multiplies two or more numbers
 * @param {...number} numbers - Numbers to multiply
 * @returns {number} Product of all numbers
 */
function multiply(...numbers) {
  if (numbers.length === 0) {
    throw new Error("At least one number is required");
  }

  return numbers.reduce((product, num) => {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("All arguments must be valid numbers");
    }
    return product * num;
  }, 1);
}

/**
 * Divides numbers (first number divided by all others)
 * @param {number} dividend - The number to divide
 * @param {...number} divisors - Numbers to divide by
 * @returns {number} Result of division
 */
function divide(dividend, ...divisors) {
  if (typeof dividend !== "number" || isNaN(dividend)) {
    throw new Error("Dividend must be a valid number");
  }

  if (divisors.length === 0) {
    throw new Error("At least one divisor is required");
  }

  return divisors.reduce((result, divisor) => {
    if (typeof divisor !== "number" || isNaN(divisor)) {
      throw new Error("All divisors must be valid numbers");
    }
    if (divisor === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return result / divisor;
  }, dividend);
}

/**
 * Calculates the remainder of division (modulo)
 * @param {number} dividend - The number to divide
 * @param {number} divisor - The number to divide by
 * @returns {number} Remainder of division
 */
function modulo(dividend, divisor) {
  if (
    typeof dividend !== "number" ||
    typeof divisor !== "number" ||
    isNaN(dividend) ||
    isNaN(divisor)
  ) {
    throw new Error("Both arguments must be valid numbers");
  }
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return dividend % divisor;
}

/**
 * Calculates the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of base raised to the power of exponent
 */
function power(base, exponent) {
  if (
    typeof base !== "number" ||
    typeof exponent !== "number" ||
    isNaN(base) ||
    isNaN(exponent)
  ) {
    throw new Error("Both arguments must be valid numbers");
  }
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} number - The number
 * @returns {number} Square root of the number
 */
function squareRoot(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Argument must be a valid number");
  }
  if (number < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(number);
}

/**
 * Calculates the absolute value of a number
 * @param {number} number - The number
 * @returns {number} Absolute value of the number
 */
function absolute(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Argument must be a valid number");
  }
  return Math.abs(number);
}

/**
 * Rounds a number to the nearest integer
 * @param {number} number - The number to round
 * @returns {number} Rounded number
 */
function round(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Argument must be a valid number");
  }
  return Math.round(number);
}

/**
 * Rounds a number up to the nearest integer
 * @param {number} number - The number to round up
 * @returns {number} Rounded up number
 */
function roundUp(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Argument must be a valid number");
  }
  return Math.ceil(number);
}

/**
 * Rounds a number down to the nearest integer
 * @param {number} number - The number to round down
 * @returns {number} Rounded down number
 */
function roundDown(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Argument must be a valid number");
  }
  return Math.floor(number);
}

// Example usage
console.log("HC Change: === Calculator Examples ===\n");

console.log("HC Change: Addition:");
console.log("HC Change: add(5, 3, 2) =", add(5, 3, 2)); // 10
console.log("HC Change: add(10, 20, 30, 40) =", add(10, 20, 30, 40)); // 100

console.log("HC Change: \nSubtraction:");
console.log("HC Change: subtract(10, 3, 2) =", subtract(10, 3, 2)); // 5
console.log("HC Change: subtract(100, 20, 10) =", subtract(100, 20, 10)); // 70

console.log("HC Change: \nMultiplication:");
console.log("HC Change: multiply(5, 3, 2) =", multiply(5, 3, 2)); // 30
console.log("HC Change: multiply(2, 4, 5) =", multiply(2, 4, 5)); // 40

console.log("HC Change: \nDivision:");
console.log("HC Change: divide(100, 5, 2) =", divide(100, 5, 2)); // 10
console.log("HC Change: divide(144, 12) =", divide(144, 12)); // 12

console.log("\nModulo:");
console.log("modulo(17, 5) =", modulo(17, 5)); // 2
console.log("modulo(20, 6) =", modulo(20, 6)); // 2

console.log("\nPower:");
console.log("power(2, 8) =", power(2, 8)); // 256
console.log("power(5, 3) =", power(5, 3)); // 125

console.log("\nSquare Root:");
console.log("squareRoot(16) =", squareRoot(16)); // 4
console.log("squareRoot(144) =", squareRoot(144)); // 12

console.log("\nAbsolute Value:");
console.log("absolute(-15) =", absolute(-15)); // 15
console.log("absolute(15) =", absolute(15)); // 15

console.log("\nRounding:");
console.log("round(4.7) =", round(4.7)); // 5
console.log("roundUp(4.2) =", roundUp(4.2)); // 5
console.log("roundDown(4.9) =", roundDown(4.9)); // 4

// Export all functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  absolute,
  round,
  roundUp,
  roundDown,
};
