import React from 'react';
import './App.scss';
import Counter from './components/Counter'
import Cat from './components/Cat'

function App() {

  const infoCat = {
    ethnia: 'tropical',
    nightFight: 200
  }

  return (
    <div>
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <span className="navbar-item">Basic Reacts</span>
        </div>
      </nav>
      <div className="App">
        <Counter/>
        <Cat
          name="Garfield"
          age="2 años"
          { ...infoCat }
        />
      </div>
    </div>
  );
}

export default App;
