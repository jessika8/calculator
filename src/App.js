import React, { Component } from 'react'
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'
import ClearButton from './components/ClearButton.js'
import { thisExpression } from '@babel/types';


export default class App extends Component {

  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  }

  addToInPut = (val) => {
    this.setState({
      input: this.state.input + val
    })
  }

  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    // is not there (-1)
    if (this.state.input.indexOf(".") === -1) {
        this.setState({input: this.state.input + val})
    }
  }

  addZeroToInPut = (val) => {
    // if this.state.input is not empty then add zero
    // is not blank, another number has been added in
    if (this.state.input !== ""){
      this.setState({input: this.state.input + val})
    }
  }

  clearInput = () => {
    this.setState({input: ""})
  }


  add = () => {
    // store the pervious number in the memory, so when we type in the new number, it is going to over wright it. pervious number is in the memory so that we can use an operator 
    this.state.previousNumber = this.state.input
    this.setState({ input: ""});
    this.state.operator = "plus";

  }

  subtract = () => {
  
    this.state.previousNumber = this.state.input
    this.setState({ input: ""});
    this.state.operator = "subtract";

  }

  multiply = () => {
  
    this.state.previousNumber = this.state.input
    this.setState({ input: ""});
    this.state.operator = "multiply";

  }

  divide = () => {
  
    this.state.previousNumber = this.state.input
    this.setState({ input: ""});
    this.state.operator = "divide";

  }

  evaluate = () => {
    // currentnumber is the new number entered
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "plus") {
      this.setState({
        input:parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      })
    } else if (this.state.operator == "subtract") {
      this.setState({
        input:parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      })
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      })
    } else if (this.state.operator == "divide") {
      this.setState({
        input:parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input value={this.state.input}/>
          </div>
          <div className="row">
            <Button handleClick={this.addToInPut} name="7"/>
            <Button handleClick={this.addToInPut} name="8"/>
            <Button handleClick={this.addToInPut} name="9"/>
            <Button handleClick={this.divide} name="/"/>
          </div>
          <div className="row">
            <Button handleClick={this.addToInPut} name="4"/>
            <Button handleClick={this.addToInPut} name="5"/>
            <Button handleClick={this.addToInPut} name="6"/>
            <Button handleClick={this.multiply} name="*"/>
          </div>
          <div className="row">
            <Button handleClick={this.addToInPut} name="1"/>
            <Button handleClick={this.addToInPut} name="2" />
            <Button handleClick={this.addToInPut} name="3"/>
            <Button handleClick={this.add} name="+"/>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal} name="."/>
            <Button handleClick={this.addZeroToInPut} name="0"/>
            <Button handleClick={this.evaluate} name="="/>
            <Button handleClick={this.subtract} name="-"/>
          </div>
          <div className="row">
            <ClearButton name="Clear" handleClear={this.clearInput}/>
          </div>
        </div>
      </div>
    )
  }
}