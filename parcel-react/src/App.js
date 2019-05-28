import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  componentDidMount() {

    var mySymbol = Symbol('foo');
    var obj = {
      a: 'A',
      b: 'B',
      // [mySymbol]: 'mySymbol'
    }
    Object.prototype.objCustom = function () {}; 
    obj.__proto__.foo = function () {}; 

    console.log(obj.__proto__)

    // for(let item in obj){
    //   console.log(item)
    // }

    // console.log(Object.keys(obj))

    // console.log(Object.getOwnPropertyNames(obj))

    // console.log(Object.getOwnPropertySymbols(obj))

    // console.log(Reflect.ownKeys(obj))

    // console.log(Reflect.enumerate(obj))



  }

  render() {
    return <div>
      <h1>Hello World 📦 🚀</h1>
    </div>;
  }
}