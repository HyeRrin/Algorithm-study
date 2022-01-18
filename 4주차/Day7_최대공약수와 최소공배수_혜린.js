function findGCD(n, m){
    //최대공약수 구하기
    if (n%m == 0) {
        return m;
    } else {
        return findGCD(m, n%m)
    }
}

function solution(n, m){
    let answer = [];
    let GCD = findGCD(n, m); //최대공약수
    let LCM = n * m / GCD; //최소공배수
    answer.push(GCD);
    answer.push(LCM);
    return answer;
}