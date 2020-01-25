import React, { Component } from 'react'
import Row from './Row'
class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardRows: []
    }
  }
  
  componentDidMount() {
    // 棋盤的排數
    let Rows = [];
    for (let i = 0; i < 18; i += 1) {
      Rows.push(i)
    }
    this.setState({
      boardRows: Rows
    })
  }

  render() {
    const { boardRows } = this.state
    return (
      <div className="board">
        {boardRows.map(row => (
          <Row key={row}></Row>
        ))}
      </div>
    )
  }
}

export default Board