function solution(s) {
  let answer = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (s[i - 1] === " " || i === 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i];
    }
  }
  return answer;
}
