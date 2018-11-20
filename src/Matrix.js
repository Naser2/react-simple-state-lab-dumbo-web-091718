import React, { Component } from 'react';
import Cell from './Cell'


class Matrix extends Component {
  constructor(props) {
    super(props)
    this.state ={
      values: props.values.length ? props.values : [...Array(10).fill(Array(10).fill('#F00'))] // if props.values is empty populate with generated array of #F00 (use Array.fill)
    }
  }
 genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
 genMatrix = () => (
    this.state.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    console.log(this.state.value)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
export default Matrix