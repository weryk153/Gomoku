import React, { Component } from 'react'
import styled from 'styled-components'

const Btn = styled.div`
  border: 0px solid black;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  background: ${props => props.btnColor};
  cursor: pointer;
  :hover {
    background: ${props => props.btnColor !== 'transparent' ? null : 'rgba(255,255,255,0.5)'};
  }
`

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'transparent',
      isClick: false
    }
  }

  handleChangeColor = () => {
    const { isClick } = this.state
    const { winner } = this.props
    if (!isClick && winner === undefined) {
      const { isTurnBlack } = this.props
      const { handleChangeisTurn } = this.props
      handleChangeisTurn()
      this.setState({
        backgroundColor: isTurnBlack ? 'black' : 'white',
        isClick: true
      }, this.handleAddChessBotton)
    }
  }

  handleAddChessBotton = () => {
    const { buttonId } = this.props
    const { rowId } = this.props
    const { backgroundColor } = this.state
    const { handleAddChessBoard } = this.props
    handleAddChessBoard(rowId, buttonId, backgroundColor)
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <Btn btnColor={backgroundColor} onClick={this.handleChangeColor}></Btn>
    )
  }
}

export default Button