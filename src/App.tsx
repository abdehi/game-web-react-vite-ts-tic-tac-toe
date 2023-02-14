import { useState, useEffect } from "react";
import Square from "./Square";

const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];

export default function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const rowCount = 3;
  const [currentPlayer, setCurrentPlayer] = useState("X");

  useEffect(
    function () {
      changePlayer();
    },
    [gameState]
  );

  function changePlayer() {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function handleCellClick(event: any) {
    const cellIndex = Number(event.target.getAttribute("data-cell-index"));
    const currentValue = gameState[cellIndex];

    console.log("file", currentValue);
    if (currentValue) {
      return;
    }

    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  }

  return (
    <div>
      <h1>tic tac toe page</h1>
      <div>
        <table style={{ border: "1px solid black" }}>
          <tbody>
            {Array.from({ length: rowCount }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {gameState
                  .slice(rowIndex * rowCount, rowIndex * rowCount + rowCount)
                  .map((player, index) => (
                    <Square
                      key={index}
                      onClick={handleCellClick}
                      {...{ index, player }}
                    />
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div> Scores goes here</div>
      </div>
    </div>
  );
}
