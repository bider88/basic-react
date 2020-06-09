import React, { Component } from 'react'

class InputManaged extends Component {
  state = {
    text: '',
    inputClass: ''
  }
  

  update = (event) => {
    const text = event.target.value

    let inputClass = 'is-success'

    if (text.trim() === '') {
      inputClass = ''
    }

    if (text.trim() !== '' && text.trim().length < 5) {
      inputClass = 'is-danger'
    }

    this.setState({ text, inputClass })

    this.props.onChange(this.props.name, text)
  }

  render() {

    const inputClass = `input ${ this.state.inputClass }`

    return (
      <input className={inputClass} type="text" value={this.state.text} onChange={this.update} placeholder={this.props.placeholder}/>
    )
  }
}

class InputManagedForm extends Component {

  state = {
    name: '',
    email: ''
  }
  
  update = (name, text) => {
    console.log(name, text);
    this.setState({
      [name]: text
    })
  }

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Manejando input controlados con React</p>
          <InputManaged onChange={this.update} name='name' placeholder='Ingrese nombre'/>
          <InputManaged onChange={this.update} name='email' placeholder='Ingrese correo electrónico'/>
          <p>Nombre: {this.state.name}</p>
          <p>Correo electrónico: {this.state.email}</p>
        </div>
      </div>
    )
  }
}

export default InputManagedForm;