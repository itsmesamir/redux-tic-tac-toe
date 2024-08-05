import React from "react";
import { useDispatch } from "react-redux";
import { makeMove } from "../actions/gameActions";

const Square = ({ value, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(makeMove(index));
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
