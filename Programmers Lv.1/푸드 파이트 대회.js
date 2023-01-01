// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 풀이
function solution(food) {
  let answer = [];
  for (let i = 1; i < food.length; i++) {
    const count = food[i] % 2 ? (food[i] - 1) / 2 : food[i] / 2;
    for (let p = 0; p < count; p++) {
      answer.push(i);
    }
  }
  return answer.join("") + 0 + answer.reverse().join("");
}
