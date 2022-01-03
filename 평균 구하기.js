// solution 1
function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
    }
    return answer/arr.length;
}

// solution 2
function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}