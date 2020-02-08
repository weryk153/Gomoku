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
  box-shadow: ${props => props.btnColor === 'transparent' ? null : '2px 2px 6px'};
  :hover {
    background: ${props => props.btnColor !== 'transparent' ? null : 'rgba(255,255,255,0.5)'};
  }
`

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: this.props.backgroundColor,
      isClick: this.props.isClick
    }
  }
  
  // 改變棋子的顏色
  handleChangeColor = () => {
    const { isClick } = this.state
    const { winner } = this.props
    if (!isClick && winner === undefined) {
      const { isTurnBlack, handleIsTurnWho } = this.props
      handleIsTurnWho()
      this.setState({
        backgroundColor: isTurnBlack ? 'black' : 'white',
        isClick: true
      }, this.handleAddChessBotton)
    }
  }

  handleAddChessBotton = () => {
    const { handleAddChessBoard, buttonId, rowId } = this.props
    const { backgroundColor } = this.state
    handleAddChessBoard(rowId, buttonId, backgroundColor)
  }

  // 重置棋盤
  componentDidUpdate() {
    const { winner } = this.props
    if (winner === '') {
      this.setState({
        backgroundColor: this.props.backgroundColor,
        isClick: this.props.isClick
      })
    }
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <Btn btnColor={backgroundColor} onClick={this.handleChangeColor}></Btn>
    )
  }
}

export default Button