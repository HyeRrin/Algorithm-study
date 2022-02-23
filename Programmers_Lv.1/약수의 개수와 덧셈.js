function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let tmp = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        tmp.push(j);
      }
    }
    tmp.length % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
