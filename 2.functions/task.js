// Задание 1
function getArrayParams(arr) {
  let min = arr[0]; 
  let max = arr[0];
  let sum = 0; 
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(const i in arr) {

    sum += arr[i];
  }
  console.log(sum)
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for(const i in arrOfArr) {

    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0]; 
  let max = arr[0];
  let difference = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  difference = Math.abs(min - max);

  return difference;
}
