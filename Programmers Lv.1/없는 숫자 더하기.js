function solution(numbers) {
  let tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < tmp.length; i++) {
    if (!numbers.includes(tmp[i])) {
      answer += tmp[i];
    }
  }
  return answer;
}
