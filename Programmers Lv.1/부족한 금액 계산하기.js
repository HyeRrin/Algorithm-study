function solution(price, money, count) {
  let tmp = 0;
  for (let i = 1; i <= count; i++) {
    tmp += price * i;
  }
  return tmp - money <= 0 ? 0 : tmp - money;
}
