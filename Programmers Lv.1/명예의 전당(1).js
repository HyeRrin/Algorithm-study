function solution(k, score) {
  let answer = [];
  let stage = [];
  for (let i = 0; i < score.length; i++) {
    stage.push(score[i]);
    stage.sort((a, b) => b - a);

    if (stage.length > k) stage = stage.slice(0, k);

    answer.push(stage[stage.length - 1]);
  }
  return answer;
}
