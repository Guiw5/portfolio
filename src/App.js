import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Guido Wagner</p>
          <nav>
            <a
              className="App-Link"
              href="https://github.com/guiw5/gwagner.io"
              target="_blank"
            >
              src
            </a>
            <a>cv</a>
            <a>cv</a>
          </nav>
        </header>
      </div>
    )
  }
}

export default App
