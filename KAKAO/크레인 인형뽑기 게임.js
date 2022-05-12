function solution(board, moves) {
  let dolls = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let index = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][index] !== 0) {
        dolls.push(board[j][index]);
        if (dolls[dolls.length - 1] === dolls[dolls.length - 2]) {
          dolls.pop(dolls[dolls.length - 1]);
          dolls.pop(dolls[dolls.length - 2]);
          answer += 2;
        }
        board[j][index] = 0;
        break;
      }
    }
  }
  return answer;
}
