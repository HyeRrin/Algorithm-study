function solution(board) {
  let max = 0;
  let row = board.length;
  let col = board[0].length;
  if (row < 2 || col < 2) {
    return 1;
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );
        board[i][j] = min + 1;
      }
      if (max < board[i][j]) {
        max = board[i][j];
      }
    }
  }
  return max * max;
}
