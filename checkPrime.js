const getPrimeUpto = prompt("Enter a value upto which you want prime numbers");

for (let i = 2; i <= getPrimeUpto; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) prime = false;
  }

  if (prime) console.log(i);
}
