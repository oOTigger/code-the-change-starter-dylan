import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";


const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(false);

  function handleClick(i) {
    // Don't allow clicks on a square if the game is over
    if (gameOver) {
      return;
    }

    // Don't allow clicks on a square that already has a value
    if (board[i]) {
      return;
    }

    // Update the board state with the current player's value
    const newBoard = [...board];
    newBoard[i] = currentPlayer;
    setBoard(newBoard);

    // Switch the current player and check if the game is over
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    if (calculateWinner(newBoard)) {
      setGameOver(true);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
      setTie(true);
    }
  }

  function jumpToStart() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
    setTie(false)
  }

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <Board board={board} onClick={handleClick}/>

      <div className="bottomItems">
        <button className="newGame-btn" onClick={jumpToStart}>New game</button>

          {tie ? (
          <bottomText>
            Tie
          </bottomText>
          ) :gameOver ? (
            <bottomText>
            Winner: {currentPlayer === 'X' ? 'O' : 'X'}
            </bottomText>
          ) : (
          <bottomText>
            Next Player: {currentPlayer === 'X' ? 'X' : 'O'}
          </bottomText>
          )
          }
      </div>
    </>
  );
};

export default Game;
