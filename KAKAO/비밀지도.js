function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp1 = "";
    let tmp2 = "";
    while (tmp1.length < n) {
      tmp1 += arr1[i] % 2;
      tmp2 += arr2[i] % 2;
      arr1[i] = parseInt(arr1[i] / 2);
      arr2[i] = parseInt(arr2[i] / 2);
    }
    arr1[i] = tmp1.split("").reverse().join("");
    arr2[i] = tmp2.split("").reverse().join("");
  }

  for (let i = 0; i < arr1.length; i++) {
    let tmp = "";
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        tmp += "#";
      } else if (arr1[i][j] === "0" && arr2[i][j] === "0") {
        tmp += " ";
      } else {
        tmp += "#";
      }
    }
    answer.push(tmp);
  }
  // console.log(arr2);
  return answer;
}
