import React, { Component } from 'react'

class Counter extends Component {
  state = {
    num: this.props.num
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.num < nextProps.num) {
      return {
        num: nextProps.num
      }
    }

    return null;
  }

  add = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render() {

    const { num } = this.state
    return (
      <div>
        <div className="buttons is-right">
          <button className="button" onClick={this.add}>Clics({ num })</button>
        </div>
      </div>
    )
  }
}

class CounterLifecycle extends Component {
  state = {
    num: 0
  }

  handleChange = (event) => {
    let num = parseInt(event.target.value)

    if (isNaN(num)) {
      num = 0
    }

    this.setState({ num })
  }

  render() { 
    const { num } = this.state
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Contador implementando getDerivedStateFromProps</p>
          <h2>Contador: { num }</h2>
          <input type="text" className="input" onChange={this.handleChange}/>
          <Counter num={num}/>
        </div>
      </div>
    )
  }
}

export default CounterLifecycle;