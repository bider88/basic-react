import React from 'react'

export default class ConditionalRender extends React.Component {
  state = {
    greeting: this.props.greeting
  }

  greeting = () => {
    this.setState({ greeting : !this.state.greeting })
  }
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          { this.props.title && <p className='title'>{ this.props.title }</p>}
          { this.props.info && <p>Este texto nose mostrará porque no se pasó el valor en las props</p>}
          <button className="button is-primary" onClick= { this.greeting }>{ this.state.greeting ? 'Dejar de saludar' : 'Volver a saludar'}</button>
          {
            this.state.greeting
            ? (
              <h1>Aló, te mando saludos <span role="img" aria-label="cat">👋</span> porque eres Genial</h1>
            )
            : (
              <p>Lo siento, no hay saludos <span role="img" aria-label="cat">😟</span></p>
            )
          }
        </div>
      </div>
    )
  }
}