export function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

export function reverse(arr) {
  for (var i = 0; i < Math.floor((arr.length + 1) / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
}

export function fibonacci_1(num) {
  // 0 1 1 2 3 5 8 13
  if (num < 1) {
    return 0;
  }
  if (num < 3) {
    return 1;
  }
  return fibonacci_1(num - 1) + fibonacci_1(num - 2);
}

export function fibonacci_2(num) {
  const arr = [0, 1, 1];
  if (num < 0) {
    throw new Error('input number can not less than 0');
  }
  if (num >= 3) {
    for (var i = 3; i <= num; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[num];
}

export function convert(obj) {
  // implement
  let output = [];
  let keysL1 = Object.keys(obj);
  let keysL2 = Object.keys(obj[keysL1[0]]);
  output.push(keysL2);

  let valueArr = [];
  keysL1.forEach((key) => {
    let values = Object.values(obj[key]);
    valueArr.push(values);
  });
  output.push(valueArr);
  return output;
}
