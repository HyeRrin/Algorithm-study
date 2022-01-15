function solution(n) {
    let m = String(n);
    let arr = [];
    
    for ( let i = 0; i < m.length; i++) {
        arr.push(m[i]);
    }
    arr.sort((a,b) => b-a);
    return Number(arr.join(""));
}