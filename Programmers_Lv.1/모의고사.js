function solution(answers) {
  let answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let oneAnswer = answers.filter((v, i) => v === one[i % one.length]).length;
  let twoAnswer = answers.filter((v, i) => v === two[i % two.length]).length;
  let threeAnswer = answers.filter(
    (v, i) => v === three[i % three.length]
  ).length;

  let max = Math.max(oneAnswer, twoAnswer, threeAnswer);
  if (oneAnswer === max) {
    answer.push(1);
  }
  if (twoAnswer === max) {
    answer.push(2);
  }
  if (threeAnswer === max) {
    answer.push(3);
  }

  return answer;
}
