import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import About from './pages/About/index'
import Index from './pages/Index/index'

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

    // console.log(obj.__proto__)

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
    return (
      <Router>
          <div className="app_pages_wrap">
            <Route exact path="/" render={ () => ( <Redirect to="/index" /> ) } />
            <Route path="/index" component={Index}/>
            <Route path="/about" component={About}/>
          </div>
      </Router>
    )
  }
}