function solution(N, stages) {
  let rate = [];
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let challenge = 0;
    let fail = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        challenge++;
        if (stages[j] === i) {
          fail++;
        }
      }
    }
    challenge === 0 ? rate.push(0) : rate.push(fail / challenge);
  }

  for (let i = 0; i < rate.length; i++) {
    let max = Math.max(...rate);
    let maxIndex = rate.indexOf(max);
    answer.push(maxIndex + 1);
    rate.splice(maxIndex, 1, null);
  }

  return answer;
}
