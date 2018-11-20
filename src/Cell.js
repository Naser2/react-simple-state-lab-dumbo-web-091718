import React, { Component } from 'react'


class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  showColor = () => {
    const color = "#333"
    this.setState({
      color
    })
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.showColor}>
        
      </div>
    )
  }
}
export default Cell;