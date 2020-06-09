import React from 'react'

export default class Refs extends React.Component {

  entry = React.createRef();

  // componentDidMount() {
  //   this.focus()
  // }

  focus = () => {
    console.log('ref entry', this.entry)
    this.entry.current.focus()
  }
  
  blur = () => {
    this.entry.current.blur()
  }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Usando las refs con React</p>
          <input className="input" type="text" ref={this.entry}></input>
          <div className="buttons is-right">
            <button className="button is-focused" onClick={this.focus}>Focus</button>
            <button className="button" onClick={this.blur}>Blur</button>
          </div>
        </div>
      </div>
    )
  }
}