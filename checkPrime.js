const getPrimeUpto = prompt("Enter a value upto which you want prime numbers");

for (let i = 2; i <= getPrimeUpto; i++) {
  let prime = true;
  // Divisibility only needs to be checked upto half of the number itself
  for (let j = 2; j <= parseInt(i / 2); j++) {
    if (i % j === 0) prime = false;
  }

  if (prime) console.log(i);
}
