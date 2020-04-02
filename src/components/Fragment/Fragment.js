import React, { Component } from 'react'

const Devices = () => (
  // <React.Fragment>
  <> {/* Estas etiquetas vacias, solo se pueden usar de react 16 en adelante*/}
    <li>Smartphone</li>
    <li>Laptop</li>
    <li>Hard disk drive</li>
  </>
  // </React.Fragment>
)

const Office = () => (
  <>
    <li>Table</li>
    <li>Pencil</li>
    <li>Paper</li>
  </>
)

export default class Fragment extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Elementos sin etiquetas con Fragment</p>
          <ol type="1">
            <Devices></Devices>
            <Office></Office>
          </ol>
        </div>
      </div>
    )
  }
}