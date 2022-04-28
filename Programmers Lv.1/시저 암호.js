function solution(s, n) {
  let answer = '';
  let large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let small = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {  // 공백일 때
      answer += ' ';
    } else {  // 공백이 아닐 때
      if (s[i] === s[i].toUpperCase()) {  // 대문자인가?
        let largeIndex = large.indexOf(s[i]);
        let largeString = large[largeIndex + n];
        if (largeIndex + n > 25) {
          largeString = large[(largeIndex + n) - 26];
        }
        answer += largeString;
      } else if (s[i] === s[i].toLowerCase()) {  // 소문자인가?
        let smallIndex = small.indexOf(s[i]);
        let smallString = small[smallIndex + n];
        if (smallIndex + n > 25) {
          smallString = small[(smallIndex + n) - 26];
        }
        answer += smallString;
      }
    }
  }
  return answer;
}
