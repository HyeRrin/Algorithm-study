function solution(a, b, n) {
  let answer = 0;

  let n2 = n;
  while (n2 >= a) {
    let newBottle = parseInt(n2 / a) * b; // 6
    let leftBottle = n2 - parseInt(n2 / a) * a; // 20 - 18 === 2

    answer += newBottle; // answer = 8
    n2 = newBottle + leftBottle;
    console.log(n2);
  }

  return answer;
}
