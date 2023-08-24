function sumAll(from, to) {
  if (to < from || from === to) return;

  let sum = 0;
  for (let i = from; i <= to; i++) sum += i;

  return sum;
}

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10
