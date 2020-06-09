import React from 'react'

class InputNoControl extends React.Component {

  name = React.createRef()
  email = React.createRef()

  handledClick = () => {
    const name = this.name.current.value
    const email = this.email.current.value

    this.props.onSend({ name, email })
  }

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Inputs no controlados (Refs)</p>
          <input className='input' placeholder='Nombre' type="text" name="name" ref={this.name}/>
          <input className='input' placeholder='Correo electrónico' type="text" name="email" ref={this.email}/>
          <button className="button" onClick={this.handledClick}>Enviar</button>
        </div>
      </div>
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
          <p className='title'>Inputs no controlados (Refs)</p>
          <InputNoControl onSend={this.send}/>
        </div>
      </div>
    )
  }
}
 
export default InputNoControlRef;