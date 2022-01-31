function solution(n) {
    let answer = '';
    if(n % 2 === 0) {
        answer += '수박'.repeat(n/2);
    } else {
        answer += '수';
        answer += '박수'.repeat(parseInt(n/2));
    }
    return answer;
}