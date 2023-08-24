function reverseString(str) {
  if (typeof str !== 'string' || str.length < 1) return;

  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) reversedString += str[i];

  return reversedString;
}
