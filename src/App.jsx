import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "./components/Board";
import { resetGame } from "./actions/gameActions";

import "./App.css";
import "./style.css";

const App = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.winner);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        {winner && (
          <button onClick={() => dispatch(resetGame())}>Start New Game</button>
        )}
      </div>
    </div>
  );
};

export default App;
