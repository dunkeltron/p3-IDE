import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from "./components/Nav";
import EditorContainer from "./components/EditorContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
       
        <EditorContainer/>
        <header className="App-header">
        
        </header>
      </div>
    );
  }
}

export default App;
