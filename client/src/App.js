import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditorContainer from "./pages/EditorContainer";
import NoMatch from "./pages/NoMatch";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile"  
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
       <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/editor" component={EditorContainer} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
