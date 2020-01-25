import React, { Component } from 'react'
import Btnboard from './Btnboard'
import Board from './Board'
import Header from './Header'
import './bootstrap.min.css'
import './style.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chessBoard: [],
      count: {
        black: 0,
        white: 0
      },
      winner: ''
    }
  }

  handleCount = (m, n) => {
    const { count } = this.state
    this.setState({
      count: {
        ...count,
        black: count.black + m,
        white: count.white + n
      }
    })
  }

  handleAddChessBoard = (rowId, buttonId, color) => {
    const { chessBoard } = this.state
    chessBoard[rowId][buttonId] = color
    this.setState({
      chessBoard: [
        ...chessBoard
        ]
    })
  }

  handleWhoIsWinner = () => {
    const { chessBoard } = this.state
      // 橫排判斷勝負
      for (let m = 0; m < 15; m += 1) {
        for (let n = 0; n < 15; n += 1) {
          if (chessBoard[m][n] === chessBoard[m][n+1] && chessBoard[m][n] === chessBoard[m][n+2] && chessBoard[m][n] === chessBoard[m][n+3] 
            && chessBoard[m][n] === chessBoard[m][n+4] && chessBoard[m][n] !== undefined) {
              return chessBoard[m][n]
            }
          }
        }
      // 直排判斷勝負
      for (let m = 0; m < 15; m += 1) {
        for (let n = 0; n < 15; n += 1) {
          if (chessBoard[n][m] === chessBoard[n+1][m] && chessBoard[n][m] === chessBoard[n+2][m] && chessBoard[n][m] === chessBoard[n+3][m] 
            && chessBoard[n][m] === chessBoard[n+4][m] && chessBoard[n][m] !== undefined) {
              return chessBoard[n][m]
          }
        }
      }
      // 斜排判斷勝負
      for (let m = 0; m < 15; m += 1) {
        for (let n = 0; n < 15; n += 1) {
          if (chessBoard[m][n] === chessBoard[m+1][n+1] && chessBoard[m][n] === chessBoard[m+2][n+2] && chessBoard[m][n] === chessBoard[m+3][n+3] 
            && chessBoard[m][n] === chessBoard[m+4][n+4] && chessBoard[m][n] !== undefined) {
              return chessBoard[m][n]
          }
        }
      }
      for (let m = 0; m < 15; m += 1) {
        for (let n = 18; n > 3; n -= 1) {
          if (chessBoard[m][n] === chessBoard[m+1][n-1] && chessBoard[m][n] === chessBoard[m+2][n-2] && chessBoard[m][n] === chessBoard[m+3][n-3] 
            && chessBoard[m][n] === chessBoard[m+4][n-4] && chessBoard[m][n] !== undefined) {
              return chessBoard[m][n]
          }
        }
      }
  }

  componentDidMount() {
    // 排數
    let Rows = [];
    for (let i = 0; i < 19; i += 1) {
      Rows.push([])
    }
    this.setState({
      chessBoard: Rows
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chessBoard !== this.state.chessBoard) {
      let winner = this.handleWhoIsWinner()
      this.setState({
        winner
      })
    }
  }

  render() {
    const { count } = this.state
    const { chessBoard } = this.state
    const { winner } = this.state
    return (
      <div>
        <Header count={count} winner={winner}></Header>
        <div className="container">
          <Board></Board>
          <Btnboard handleCount={this.handleCount} handleAddChessBoard={this.handleAddChessBoard} 
          chessBoard={chessBoard} winner={winner}></Btnboard>
        </div>
      </div>
    )
  }
}

export default App
