// 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 나의 풀이
function solution(s) {
  let answer = [];
  for (let p = 0; p < s.length; p += 1) {
    for (let q = p - 1; q >= 0; q -= 1) {
      if (s[p] === s[q]) {
        answer.push(p - q);
        break;
      }
    }
    if (p + 1 !== answer.length) answer.push(-1);
  }
  return answer;
}
