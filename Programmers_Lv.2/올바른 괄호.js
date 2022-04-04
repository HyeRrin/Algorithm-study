function solution(s) {
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? k++ : k--;
    if (k < 0) return false;
  }
  return k ? false : true;
}
