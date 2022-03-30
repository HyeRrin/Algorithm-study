function solution(s) {
  // 풀이1
  s = s.split(" ").sort((a, b) => a - b);
  return `${s[0]} ${s[s.length - 1]}`;

  // 풀이2
  s = s.split(" ").map((v) => v * 1);
  let min = s[0];
  let max = s[0];
  for (let i = 0; i < s.length; i++) {
    if (min > s[i]) {
      min = s[i];
    } else if (max < s[i]) {
      max = s[i];
    }
  }
  return `${min} ${max}`;
}
