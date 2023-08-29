function palindrome(str) {
  let pStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    pStr += str[i];
  }

  if (pStr === str) return true;
  return false;
}

palindrome('cat'); // false
palindrome('racecar'); // true
