import React, { Component } from 'react';
import Modal from '../Modal/Modal';

export default class PortalModal extends Component {

  state = {
    visible: false
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  close = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Portals de React</p>
          <p>Esto solo funciona con React 16 en adelante.</p>
          <p>
            Esto nos va bien cuando queremos mostrar modales que no sean incluidos en la raíz
          </p>
          <br/>
          <button className='button is-primary' onClick= { this.show }>Mostrar modal</button>
          <Modal visible={this.state.visible} close={ this.close }> Mensaje de children a traves de Portals <span role="img" aria-label="cat">😮</span></Modal>
        </div>
      </div>
    )
  }
}