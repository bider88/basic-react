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
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor='name'>Nombre</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className='input' placeholder='Nombre' type="text" name="name" id="name"/>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor='email'>Correo electrónico</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className='input' placeholder='Correo electrónico' type="text" name="email" id="email"/>
              </p>
            </div>
          </div>
        </div>
        <div className="buttons is-right">
          <button className="button is-link">Enviar</button>
        </div>
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