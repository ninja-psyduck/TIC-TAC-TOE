// import { useState } from "react";
import Square from "./Square";

function Board({xIsNext, squares, onPlay}) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    // status = "Next player: " + (xIsNext ? "X" : "O");
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }
  //后期可以通过map()方法遍历
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default Board;

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}
//判断游戏是否已经结束或者某个方块已经被点击过
//Array(9).fill(null) 创建一个包含 9 个元素的数组，
//并将每个元素设置为 null 。
// JavaScript 闭包
//onSqureClick={handleClick}，这样写是将 handleClick 函数作为prop传下去
//onSqureClick={handleClick()}，这样写是直接调用函数
//onSqureClick={()=>handleClick()}，点击之后，箭头后面的代码会被运行
//状态在父组件中而不是在子组件时，点击任意一个square，子组件会请求父组件更新状态，状态发生变化时，父组件和子组件都会被重新渲染
//onSomething 事件，handleSomething 事件处理函数
//defect 瑕疵，缺陷
//Why immutability is important 状态不可变，只能被替换。
