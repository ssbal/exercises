/**
 * Formula for celsius to fahrenheit conversion
 * °F = °C × (9/5) + 32
 */

function convertToCelsius(temp) {
  if (!temp || typeof temp !== 'number') return;
  return (temp - 32) * (5 / 9);
}

function convertToFahrenheit(temp) {
  if (temp.toString().length < 1 || typeof temp !== 'number') return;
  return temp * (9 / 5) + 32;
}

convertToCelsius(32); // fahrenheit to celsius, should return 0
convertToFahrenheit(0); // celsius to fahrenheit, should return 32
