function solution(n) {
  let tmp = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    tmp.push((tmp[i - 2] + tmp[i - 1]) % 1234567);
  }
  return tmp[n];
}
