function solution(n) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
      sum += j;
      if (sum === n) {
        count++;
        sum = 0;
        break;
      } else if (sum > n) {
        sum = 0;
        break;
      }
      if (i > n / 2 + 1) {
        sum = 0;
        break;
      }
    }
  }
  return count;
}
