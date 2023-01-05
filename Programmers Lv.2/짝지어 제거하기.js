// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 풀이
function solution(s) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr[arr.length - 1] !== s[i] ? arr.push(s[i]) : arr.pop();
  }
  if (arr.length === 0) answer = 1;

  return answer;
}
