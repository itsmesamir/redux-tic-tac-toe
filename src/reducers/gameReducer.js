import { MAKE_MOVE, RESET_GAME } from "../actions/gameActions";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const squares = state.squares.slice();
      if (squares[action.payload] || state.winner) {
        return state;
      }
      squares[action.payload] = state.xIsNext ? "X" : "O";
      const winner = calculateWinner(squares);
      return {
        ...state,
        squares,
        xIsNext: !state.xIsNext,
        winner,
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
