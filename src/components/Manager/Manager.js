import React from 'react'

export default class Manager extends React.Component {

  state = {
    x: 0,
    y: 0
  }

  manager = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {

    const styles = {
      height: '200px',
      background: 'gold',
      padding: '1em',
      boxSizing: 'border-box'
    }

    return (
      <div className="Component">
        <h1>Manejando eventos del mouse </h1>
        <div style= { styles } onMouseMove={ this.manager }>
          <div>x: { this.state.x } </div>
          <div>y: { this.state.y } </div>
        </div>
      </div>
    )
  }
}