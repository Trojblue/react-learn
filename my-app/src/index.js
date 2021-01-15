import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 没有加上判断输赢的程序, 因为哪部分比较长;
//具体看这篇 https://zh-hans.reactjs.org/tutorial/tutorial.html




class Square extends React.Component {
  
    render() {
      return (
        <button className="square" onClick={ () => this.props.onClick()}>
          {this.props.value}  
        </button> 
        // setstate: 初始没有state (空白)
        // set以后变为 X, 显示出state
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state={
        squares: Array(9).fill(null),
        xIsNext: true,
      };
      //board底下包括9个格子; 把9个格子的数据全存储在上级组件里
    }

    renderSquare(i) {
      return <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
          />; //传入value变量和对应的值
    }

    handleClick(i){
      const squares = this.state.squares.slice();
      squares[i]=this.state.xIsNext ? 'X':'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    render() {
      const status = 'Next player:' + (this.state.xIsNext ? 'X':'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  