function solution(arr) {
  let answer = arr.filter((v, i) => {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    return true;
  });
  return answer;
}
