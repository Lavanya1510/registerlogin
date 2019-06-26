import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register'; 
import Signin from './components/Signin';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
          <Switch>
            <Route path="/Signin" component={Signin} exact />
            <Route path="/Register" component={Register} exact />
          </Switch>
       
      </div>
      </Router>
    );
  }
}

export default App;