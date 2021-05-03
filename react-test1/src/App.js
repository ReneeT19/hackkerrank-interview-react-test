import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import News from './components/news';
import Contact from './components/contact';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
