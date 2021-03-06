import React, { Component } from 'react';
import Cell from './Cell'


class Matrix extends Component { 
  constructor(props) {
    super(props)
    this.state ={
      values: props.values.length ? props.values : [...Array(10).fill(Array(10).fill('#F00'))]
    }
  }
 genRow = (rowValues) => (
    rowValues.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
 genMatrix = () => (
    this.state.values.map(rowValues => <div className="row">{this.genRow(rowValues)}</div>)
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

Matrix.defaultProps ={
 values: [...Array(10).fill(Array(10).fill('#F00'))] 
}
export default Matrix