function solution(n) {
  const lengthN1 = convert(n).filter((v) => v === "1").length;
  let x = n;
  while (x >= n) {
    x += 1;
    let lengthX1 = convert(x).filter((v) => v === "1").length;
    if (lengthN1 === lengthX1 && x > n) break;
  }
  return x;
}
function convert(num) {
  let tmp = [];
  while (num >= 1) {
    tmp.push(String(num % 2));
    num = parseInt(num / 2);
  }
  return tmp.reverse();
}
