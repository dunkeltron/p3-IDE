import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditorContainer from "./pages/EditorContainer";
import NoMatch from "./pages/NoMatch";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Register from "./pages/Register";  
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
       <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/register" component={Register}/>
          {/* <Route exact path="/register" component={Register}/> */}
          <Route  exact path="/project" component={EditorContainer} />
          <Route exact path="/:user/project/:id" component={EditorContainer} />
          <Route exact path="/:user" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
