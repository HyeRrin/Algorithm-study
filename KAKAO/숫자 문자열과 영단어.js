function solution(s) {
  const numString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tmp = "";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!num.includes(s[i] * 1)) {
      if (numString.includes(tmp)) {
        answer += numString.indexOf(tmp);
        tmp = "";
      } else {
        tmp += s[i];
        if (numString.includes(tmp)) {
          answer += numString.indexOf(tmp);
          tmp = "";
        }
      }
    } else {
      if (numString.includes(tmp)) {
        answer += numString.indexOf(tmp);
        answer += s[i];
        tmp = "";
      } else {
        answer += s[i];
      }
    }
  }
  return answer * 1;
}
