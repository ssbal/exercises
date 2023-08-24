function repeatString(str, upto = 1) {
  if (typeof str !== 'string' || str === '') return 'Provide a string';

  let repeatedString = '',
    i = 0;

  while (i < upto) {
    repeatedString += str;
    i++;
  }

  return repeatedString;
}

repeatString('hey', 3); // heyheyhey
