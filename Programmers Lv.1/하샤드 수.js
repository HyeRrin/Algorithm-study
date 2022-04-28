function solution(x) {
  let sum = 0;
  let y = String(x);

  for (let i = 0; i < y.length; i++) {
    sum += parseInt(y[i]);
  } if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}