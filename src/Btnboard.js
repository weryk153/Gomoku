import React, { Component } from 'react'
import Btnrow from './Btnrow'

class Btnboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnRows: [],
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

  render() {
    const { btnRows } = this.state
    const { handleIsTurnWho, isClick, backgroundColor, winner, handleAddChessBoard, isTurnBlack } = this.props
    return (
      <div className="btn-board">
        {btnRows.map(row => (
          <Btnrow key={row} rowId={row} handleIsTurnWho={handleIsTurnWho} isTurnBlack={isTurnBlack} 
          handleAddChessBoard={handleAddChessBoard} winner={winner} backgroundColor={backgroundColor} isClick={isClick}></Btnrow>
        ))}
      </div>
    )
  }
}

export default Btnboard