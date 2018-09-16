import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { IndexRedirect } from 'react-router';
import Links from './Links.js';
import Me from './Me.js';
import Writing from './Writing.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Abstract The Man</h1>
          <Links/>
        </header>
          <div className="horizon"></div>
          <div className="content">
              <Route path='/me' component={Me}/>
              <Route path='/writing' component={Writing}/>
          </div>
          <div className={"contact"}>
              <div className={"non-hover"}><i className="fa fa-envelope"></i>@gmail.com</div>
              <div className={"hover"}> tchatha</div>
          </div>
          <div className={"contact"}>
              <div className={"non-hover"}><i className="fa fa-envelope"></i>github</div>
              <div className={"hover"}>taichatha</div>
          </div>
          <div id={"version-select"}><span>v1</span></div>
      </div>
    );
  }
}

export default withRouter(App);
