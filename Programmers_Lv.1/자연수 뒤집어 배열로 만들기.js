function solution(n) {
  let answer = [];
  let m = String(n);

  for (let i = m.length - 1; i >= 0; i--) {
    answer.push(Number(m[i]));
  }

  return answer;
}