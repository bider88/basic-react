import React from 'react';
import './App.scss';
import Counter from './components/Counter'
import Cat from './components/Cat'
import Manager from './components/Manager'
import Input from './components/Input'
import InputEvent from './components/InputEvent'
import ConditionalRender from './components/ConditionalRender';
import InjectHtml from './components/InjectHtml';
import ChildrenProp from './components/ChildrenProp';
import Fragment from './components/Fragment';

function App() {

  const infoCat = {
    ethnia: 'tropical',
    nightFight: 200
  }

  return (
    <div>
      <nav className="navbar is-fixed-top is-dark">
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
        { /* Eventos del input */}
        <Input/>
        { /* Conservar eventos con React*/}
        <InputEvent/>
        { /* Renderizados condicionales */}
        <ConditionalRender greeting title='Renderizados condicionales'/>
        { /* Inyectando html */}
        <InjectHtml/>
        { /* Prop especial children */}
        <ChildrenProp/>
        { /* Elementos sin etiquetas con Fragment */}
        <Fragment/>
      </div>
    </div>
  );
}

export default App;
