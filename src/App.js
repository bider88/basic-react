import React from 'react';
import './App.scss';
import Counter from './components/counter'

function App() {
  return (
    <div>
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <span className="navbar-item">Basic Reacts</span>
        </div>
      </nav>
      <div className="App">
        <Counter/>
      </div>
    </div>
  );
}

export default App;
