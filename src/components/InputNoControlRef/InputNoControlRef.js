import React from 'react'

class InputNoControl extends React.Component {

  handledSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value
    const email = event.target[1].value

    this.props.onSend({ name, email })
  }

  render() { 
    return (
      <form onSubmit={this.handledSubmit}>
        <input className='input' placeholder='Nombre' type="text" name="name"/>
        <input className='input' placeholder='Correo electrónico' type="text" name="email"/>
        <button className="button">Enviar</button>
      </form>
    )
  }

}


class InputNoControlRef extends React.Component {

  send = (data) => {
    console.log(data);
  }

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Inputs no controlados con formularios</p>
          <InputNoControl onSend={this.send}/>
        </div>
      </div>
    )
  }
}
 
export default InputNoControlRef;