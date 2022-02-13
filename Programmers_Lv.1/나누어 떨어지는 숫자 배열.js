function solution(arr, divisor) {
  let answer = arr.filter((v, i) => v % divisor === 0).sort((a, b) => a - b);
  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}
