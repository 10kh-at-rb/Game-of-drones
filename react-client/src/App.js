import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TopBar from './components/ui-components/top-bar';
import MatchHistory from './components/ui-components/match-history';
import Home from './components/containers/home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar/>
          <div className='main-container'>
            <Route exact path="/" component={Home}/>
            <Route exact path="/history" component={MatchHistory}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
