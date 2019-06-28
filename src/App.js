import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register'; 
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
          <Switch>
            <Route path="/Signin" component={Signin} exact />
            <Route path="/Register" component={Register} exact />
            <Route path="/Dashboard" component={Dashboard} exact />
          </Switch>
       
      </div>
      </Router>
    );
  }
}

export default App;