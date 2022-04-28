function solution(n) {
  let x = Math.sqrt(n)

  if (Number.isInteger(x) == true) {
    return Math.pow(x + 1, 2);
  } else {
    return -1;
  }
}