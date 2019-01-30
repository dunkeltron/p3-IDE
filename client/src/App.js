import axios from "axios";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditorContainer from "./pages/EditorContainer";
import NoMatch from "./pages/NoMatch";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Register from "./pages/Register";  
import './App.css';

class App extends Component {

  state = {
    loggedIn: false,
    currentUser: null
  }


_logout(event) {
  event.preventDefault()
  console.log('logging out')
  axios.post('/auth/logout').then(response => {
    console.log(response.data)
    if (response.status === 200) {
      this.setState({
        loggedIn: false,
        currentUser: null
      })
    }
  })
}

_login(username, password) {
  axios
    .post('/api/auth/login', {
      username,
      password
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          currentUser: response.data.user
        })
      }
    })
}
  render() {
    return (
      <Router>
      <div className="App">
       
       <Switch>
          <Route exact path="/" component={<LogIn _login={this._login}/>} />
          <Route exact path="/register" component={Register}/>
          {/* <Route exact path="/:user/update" component={Settings}/> */}
          <Route  exact path="/project" component={<EditorContainer _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route exact path="/:user/project/:id" component={<EditorContainer _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route exact path="/:user" component={<Profile _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
