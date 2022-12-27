// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 풀이
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        let add = number[i] + number[j] + number[k];
        if (add === 0) answer += 1;
      }
    }
  }
  return answer;
}
