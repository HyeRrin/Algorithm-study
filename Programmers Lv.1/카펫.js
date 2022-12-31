// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/42842

// 풀이
function solution(brown, yellow) {
  let answer = [];
  let halfBrown = (brown - 4) / 2;
  for (let i = 1; i <= halfBrown; i += 1) {
    if (i * (halfBrown - i) === yellow) {
      answer.push(halfBrown - i + 2);
      answer.push(i + 2);
      break;
    }
  }
  return answer;
}
