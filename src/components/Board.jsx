import React from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const Board = () => {
  const squares = useSelector((state) => state.squares);
  const winner = useSelector((state) => state.winner);
  const xIsNext = useSelector((state) => state.xIsNext);

  const renderSquare = (i) => {
    return <Square value={squares[i]} index={i} />;
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
