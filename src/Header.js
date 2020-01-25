import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { count } = this.props
    const { winner } = this.props
    return (
      <div className="header">
        <div className="header-info">
          <h1 className="title">Gomoku</h1>
          <button className="btn btn-outline-secondary restart">Restart</button> 
        </div>
        <div className="gomoku-player">
          <div className="player">黑棋</div>
          <div className="player">白棋</div>
        </div>
        <div className="score-board">
          <div className="score">{count.black}</div>
          <div className="score">{count.white}</div>
        </div>
        {winner !== undefined ? <div className="winner">winner is {winner} !</div> : null}
      </div>
    )
  }
}

export default Header