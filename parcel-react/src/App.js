import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import About from './pages/About/index'
import Index from './pages/Index/index'

export default class App extends Component {
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