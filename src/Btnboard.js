import React, { Component } from 'react'
import Btnrow from './Btnrow'

class Btnboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnRows: [],
      isTurnBlack: true
    }
  }

  componentDidMount() {
    // 棋子的排數
    let Rows = [];
    for (let i = 0; i < 19; i += 1) {
      Rows.push(i)
    }
    this.setState({
      btnRows: Rows
    })
  }
  
  // 黑白棋輪流
  handleChangeisTurn = () => {
    const { isTurnBlack } = this.state
    const { handleCount } = this.props
    this.setState({
      isTurnBlack: !isTurnBlack
    })
    if (isTurnBlack) {
      handleCount(1, 0)
    } else {
      handleCount(0, 1)
    }
  }

  render() {
    const { btnRows } = this.state
    const { isTurnBlack } = this.state
    const { handleAddChessBoard } = this.props
    const { winner } = this.props
    return (
      <div className="btn-board">
        {btnRows.map(row => (
          <Btnrow key={row} rowId={row} handleChangeisTurn={this.handleChangeisTurn} isTurnBlack={isTurnBlack} 
          handleAddChessBoard={handleAddChessBoard} winner={winner}></Btnrow>
        ))}
      </div>
    )
  }
}

export default Btnboard