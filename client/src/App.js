import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditorContainer from "./pages/EditorContainer";
import LogIn from "./pages/LogIn";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
       
        <Switch>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/editor" component={EditorContainer} />
          {/* <Route exact path="/userAccount" component={Account} />*/}
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
