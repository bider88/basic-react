import React from 'react'
import logo  from '../../../logo.svg'

export default class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-dark">
        <div className="navbar-brand">
          <span className="navbar-item">
            <img src={logo} className="App-logo" alt="logo" />
          </span>
          <span className="navbar-item">Basic Reacts</span>
        </div>
      </nav>
    )
  }
}