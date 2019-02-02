import axios from "axios";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditorContainer from "./pages/EditorContainer";
import NoMatch from "./pages/NoMatch";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Register from "./pages/Register";  
import Test from "./pages/Test";
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    loggedIn: false,
    currentUser: null
  };
  this._logout = this._logout.bind(this);
  this._login = this._login.bind(this);
  

}

_logout(event) {
  event.preventDefault()
  console.log('logging out')
  axios.post('/api/auth/logout').then(response => {
    console.log(response.data)
    if (response.status === 200) {
      this.setState({
        loggedIn: false,
        currentUser: null
      })
    }
  })
}

_login(email, password) {
  axios
    .post('/api/auth/login', {
      email,
      password
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        sessionStorage.setItem("currentUser",JSON.stringify(response.data.user));
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
          <Route exact path="/" render={(props) => <LogIn {...props} _login={this._login} currentUser={this.state.currentUser}/>} />
          <Route exact path="/register" component={Register}/>
          {/* <Route exact path="/:user/update" component={Settings}/> */}
          <Route exact path="/test/test" render={(props)=> <Test {...props} _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/> }/>
          <Route  exact path="/project" render={(props) => <EditorContainer  {...props}_logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route exact path="/:user/project/:id" render={(props) => <EditorContainer {...props} _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route exact path="/:user" render={(props) => <Profile {...props} _logout={this._logout} _loggedIn={this.state.loggedIn} currentUser={this.state.currentUser}/>} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
