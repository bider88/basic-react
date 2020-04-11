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
import PortalModal from './components/PortalModal';
import PropTypes from './components/ValidPropTypes';
import SectionComponent from './components/common/SectionComponent';
import NavComponent from './components/common/NavComponent';
import IterateLists from './components/IterateLists';

function App() {

  const infoCat = {
    ethnia: 'tropical',
    nightFight: 200
  }

  return (
    <div>
      <NavComponent/>
      <SectionComponent type='primary' title='React Core' subtitle='Entendiendo los principios de React' medium bold/>
      <div className="container">
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
        { /* Portals de React */}
        <PortalModal/>
        { /* Validar datos del props con prop-types */}
        <PropTypes name='Irving Didier' twitter='https://twitter.com/didiersa' bio='Frontend developer' age={31}/>
      </div>
      <SectionComponent type='info' title='Iterando listas' subtitle='Como recorrer arrays, objetos, componentes y/o listas' medium bold/>
      <div className='container'>
        <IterateLists/>
      </div>
    </div>
  );
}

export default App;
