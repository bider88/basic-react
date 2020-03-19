import React from 'react'

export default class Cat extends React.Component {

  render() {
    return (
      <div className="Component">
        <h1>Usando el operador spread para pasar props</h1>
        <h3>Gato <span role="img" aria-label="cat">🐱</span></h3>
        <pre>
          { JSON.stringify(this.props, null, 4) }
        </pre>
      </div>
    )
  }
}