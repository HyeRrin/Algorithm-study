function solution(numbers) {
  let tmp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      tmp.push(numbers[i] + numbers[j]);
    }
  }
  return tmp.sort((a, b) => a - b).filter((v, i) => tmp[i] !== tmp[i + 1]);
}
