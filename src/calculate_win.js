export function calculateWinner(board) {
  // Check for wins along rows
  for (let i = 0; i < 3; i++) {
    if (board[i * 3] && board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2]) {
      return true;
    }
  }

  // Check for wins along columns
  for (let i = 0; i < 3; i++) {
    if (board[i] && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
      return true;
    }
  }

  // Check for wins along diagonals
  if (board[0] && board[0] === board[4] && board[4] === board[8]) {
    return true;
  }
  if (board[2] && board[2] === board[4] && board[4] === board[6]) {
    return true;
  }

  // No wins found
  return false;
}
