function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    answer += s[s.length / 2 - 1];
    answer += s[s.length / 2];
  } else if (s.length % 2 === 1) {
    answer += s[parseInt(s.length / 2)];
  }
  return answer;
}
