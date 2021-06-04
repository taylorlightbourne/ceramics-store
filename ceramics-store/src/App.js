import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
    </Router>
  </div>
  );
}

export default App;
