function transform(arr) {
  if (!Array.isArray(arr) || !arr instanceof Array) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr || arr.length == 0) return [];

  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-prev') {
      if (i !== 0) {
        newArr.push(arr[i - 1]);
      }
    }
    else if
      (arr[i] === '--discard-prev') {
      if (i !== 0) {
        newArr = newArr.slice(0, -1);
      }
    }
    else if
      (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    }
    else if
      (arr[i] === '--discard-next') {
      if (i !== arr.length - 1) {
        i = i + 2;
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
