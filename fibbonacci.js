/**
 * In a fibbonacci sequence next number is sum of previous two
 * 1, 1, 2, 3, 5, 8, 13, 21, 34...
 *
 * For this function it is assumed that fibbonacci starts from 1 instead of 0
 */

function fibbonacci(term = 1) {
  if (term === 1 || term === 2 || isNaN(term)) return 1;

  let a = 1,
    b = 1,
    next,
    askedTerm;

  // i starts from three as first two terms are declared manually
  for (let i = 3; i <= term; i++) {
    next = a + b;
    askedTerm = next;

    a = b;
    b = next;
  }

  return askedTerm;
}

// fibbonacci(4); // 3
// fibbonacci(6); // 8
