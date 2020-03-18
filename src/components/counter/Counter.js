import React from 'react'
import styles from './Counter.module.scss'

export default class Counter extends React.Component {

  state = {
    video: {
      title: 'My video',
      clicks: 0
    }
  }

  add = () => {
    this.setState((state, props) => (
      {
        video: {
          ...state.video,
          clicks: state.video.clicks + 1
        }
      }
    ))
  }

  reset = () => {
    this.setState({
      video: {
        ...this.state.video,
        clicks : 0
      }
    })
  }
  
  // add = () => {
  //   // Only until three clicks
  //   this.setState((state, props) => {
  //     if (state.video.clicks === 3) {
  //       return
  //     }
  //     return {
  //       video: {
  //         ...state.video,
  //         clicks: state.video.clicks + 1
  //       }
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Mutando el estado de componente con una función</h1>
        <h3>{ this.state.video.title }</h3>
        <div className="buttons">
          <button className="button is-primary" onClick= { this.add }>Clics ({ this.state.video.clicks })</button>
          <button className="button is-info" onClick= { this.reset }>Reset</button>
        </div>
      </div>
    )
  }
}