import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

class Square extends Component {
   render() {
    return (
    <button className="square" onClick={() => this.props.onClick()}>
  {this.props.value} </button>
    );
  }

}

export default Square;