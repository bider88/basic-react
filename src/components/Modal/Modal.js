import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class Modal extends Component {

  render() {

    // De esta manera lo eliminamos del DOM
    if (!this.props.visible) {
      return null
    }

    return createPortal((
      <div className='modal is-active'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Modal title</p>
            <button className='delete' aria-label='close' onClick={ this.props.close }></button>
          </header>
          <section className='modal-card-body'>
            <p>
              Es para agregar otros elementos en otro nodo que no sea la raíz
            </p>
            <small className='has-text-grey-light'>Nota: Este siempre se colocara dependiendo de la posición de la etiqueta en el index.html. Si es después de la raíz (root) aparecerá siempre debajo de todo.</small>
            <hr/>
            <p>
              { this.props.children }
            </p>

          </section>
          <footer className='modal-card-foot'>
            <button className='button is-success' onClick={ this.props.close }>Aceptar</button>
          </footer>
        </div>
      </div>
      
    ), document.getElementById('modal-root'))
  }
}