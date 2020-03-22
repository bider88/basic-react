import React from 'react'

export default class Anchor extends React.Component {

  state= {
    color: 'blue'
  }

  handlerChange = (event) => {
    const color = event.target.value

    this.setState({ color })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Conservar eventos con React</p>
          <input className="input" type="text" placeholder="Text input" onChange={ this.handlerChange }/>
          <h1>Color: <span style={ { 'color': this.state.color } }>{ this.state.color }</span></h1>
        </div>
      </div>
    )
  }
}