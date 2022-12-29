// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 풀이
function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    if (score.length - i >= m) answer += score[i + m - 1] * m;
  }

  return answer;
}
