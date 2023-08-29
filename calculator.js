/**
 * Create a calculator which
 * 1. Adds
 * 2. Subtracts
 * 3. Sums up n number of values
 * 4. Multiplies n number of values
 * 5. Gets the power
 * 6. Finds the factortial
 */

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  sum: ([...n]) => n.reduce((a, b) => a + b, 0),
  multiply: ([...n]) => n.reduce((a, b) => a * b, 1),
  power: (a, b) => a ** b,
  factorial: (n) => {
    if (n === 0 || n === 1) return 1;
    let factorial = 1;
    for (let i = n; i >= 1; i--) factorial *= i;
    return factorial;
  },
};

// calculator.add(2, 6); // 8
// calculator.add(2, 2); // 4
// calculator.subtract(10, 4); // 6
// calculator.sum([]); // 0
// calculator.sum([7]); // 7
// calculator.sum([7, 11]); // 18
// calculator.sum([1, 3, 5, 7, 9]); // 25
// calculator.multiply([2, 4]); // 8
// calculator.multiply([2, 4, 6, 8, 10, 12, 14]); // 645120
// calculator.power(4, 3); // 64
// calculator.factorial(0); // 1
// calculator.factorial(1); // 1
// calculator.factorial(2); // 2
// calculator.factorial(5); // 120
// calculator.factorial(10); // 3628800
