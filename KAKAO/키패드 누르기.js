function solution(numbers, hand) {
  let answer = "";
  let center = [2, 5, 8, 11];
  let left = 10;
  let right = 12;
  let leftLen = 0;
  let rightLen = 0;
  for (let i = 0; i < numbers.length; i++) {
    // 0은 11으로 바꿔주기
    if (numbers.includes(0)) {
      numbers.splice(numbers.indexOf(0), 1, 11);
    }
    // 왼쪽
    if (numbers[i] % 3 === 1) {
      answer += "L";
      left = numbers[i];
      // 오른쪽
    } else if (numbers[i] % 3 === 0) {
      answer += "R";
      right = numbers[i];
      // 가운데
    } else {
      leftLen =
        center.indexOf(left) != -1
          ? Math.abs(numbers[i] - left) / 3
          : Math.abs(numbers[i] - 1 - left) / 3 + 1;
      rightLen =
        center.indexOf(right) != -1
          ? Math.abs(numbers[i] - right) / 3
          : Math.abs(numbers[i] + 1 - right) / 3 + 1;

      if (leftLen === rightLen) {
        if (hand === "right") {
          answer += "R";
          right = numbers[i];
        } else {
          answer += "L";
          left = numbers[i];
        }
      } else if (leftLen < rightLen) {
        answer += "L";
        left = numbers[i];
      } else {
        answer += "R";
        right = numbers[i];
      }
    }
  }
  return answer;
}
