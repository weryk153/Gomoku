import React, { Component } from 'react'
import Button from './Button'

class Btnrow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btns: [],
      chessRow: []
    }
  }

  componentDidMount() {
    // 每排的棋子個數
    let btns = [];
    for (let i = 0; i < 19; i += 1) {
      btns.push(i)
    }
    this.setState({
      btns
    })
  }

  render() {
    const { btns } = this.state
    const { isTurnBlack } = this.props
    const { handleChangeisTurn } = this.props
    const { rowId } = this.props
    const { handleAddChessBoard } = this.props
    const { winner } = this.props
    return (
      <div className="row btn-row">
        {btns.map(btn => (
          <Button key={btn} rowId={rowId} buttonId={btn} handleChangeisTurn={handleChangeisTurn} isTurnBlack={isTurnBlack} 
          handleAddChessBoard={handleAddChessBoard} winner={winner}></Button>
        ))}
      </div>
    )
  }
}

export default Btnrow