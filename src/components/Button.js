import React, { Component } from 'react'
import './Button.css'
 
export default class Button extends Component {
    isOperator = val => {
        
        return !isNaN(val) || val === "." || val === "=";
    }
 
    render() {
        return (
            <div 
            className={`button ${this.isOperator(this.props.name) ? "" : "operator"}`}
            onClick={() => this.props.handleClick(this.props.name)}>
                {this.props.name}
            </div>
        )
    }
}
 

