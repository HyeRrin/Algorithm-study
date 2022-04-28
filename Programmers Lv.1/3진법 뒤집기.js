function solution(n) {
  let tmp = [];
  let answer = 0;

  while (parseInt(n / 3) >= 1) {
    tmp.push(n % 3);
    n = parseInt(n / 3);
  }
  tmp.push(n);
  tmp.reverse();

  for (let i = 0; i < tmp.length; i++) {
    answer += tmp[i] * 3 ** i;
  }
  return answer;
}
