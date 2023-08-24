function removeFromArray(arr, item) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) continue;
    result.push(arr[i]);
  }

  return result;
}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
