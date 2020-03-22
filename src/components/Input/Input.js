import React from 'react'

export default class Input extends React.Component {

  state = {
    text: '',
    event: ''
  }

  manager = (event) => {
    console.log(event.target.value)
    this.setState({
      text: event.target.value,
      event: event.type
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Manejando eventos del Input</p>
          <input className="input" type="text" placeholder="Text input" onChange={ this.manager } onCopy={ this.manager } onPaste={ this.manager }/>
          <h3>Text: { this.state.text }</h3>
          <h5>Type: { this.state.event }</h5>
        </div>
      </div>
    )
  }
}