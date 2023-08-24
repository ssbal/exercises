function leapYears(year) {
  if (!year || typeof year !== 'number') return false;

  year = parseInt(year);

  if (year % 400 === 0) return true; // for leap century year
  if (year % 4 === 0) return true; // for normal leap year

  return false;
}

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false
