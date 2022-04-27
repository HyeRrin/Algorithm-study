function solution(dartResult) {
  let sum = [];
  let index = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        sum.push(10 ** 1);
      } else {
        sum.push(dartResult[i - 1] ** 1);
      }
      index++;
    } else if (dartResult[i] === "D") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        sum.push(10 ** 2);
      } else {
        sum.push(dartResult[i - 1] ** 2);
      }
      index++;
    } else if (dartResult[i] === "T") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        sum.push(10 ** 3);
      } else {
        sum.push(dartResult[i - 1] ** 3);
      }
      index++;
    } else if (dartResult[i] === "*") {
      sum[index - 1] *= 2;
      sum[index - 2] *= 2;
    } else if (dartResult[i] === "#") {
      sum[index - 1] *= -1;
    }
  }
  return sum.reduce((acc, curr) => acc + curr, 0);
}
