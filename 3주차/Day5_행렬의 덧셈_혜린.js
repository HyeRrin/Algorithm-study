function solution(arr1, arr2) {
    let final=[];
    for(let i = 0; i < arr1.length; i++) {
        let answer=[];
        for(let j = 0; j < arr1[i].length; j++) {
            answer.push(arr1[i][j] + arr2[i][j]);
        } 
        final.push(answer);
    }
    return final
}