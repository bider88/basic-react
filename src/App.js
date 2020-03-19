import React from 'react';
import './App.scss';
import Counter from './components/Counter'
import Cat from './components/Cat'
import Manager from './components/Manager'

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
        { /* Mutando el estado de componente con una función */}
        <Counter/>
        { /* Usando el operador spread para pasar props */}
        <Cat name="Garfield" age="2 años" { ...infoCat } />
        { /* Manejando eventos del mouse */}
        <Manager/>
      </div>
    </div>
  );
}

export default App;
