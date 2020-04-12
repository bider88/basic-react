import React from 'react'
import SimpleIterate from './SimpleIterate'
import ObjectIterate from './ObjectIterate'

export default class IterateLists extends React.Component {
  render() {
    return (
      <div>
        { /* Iterando una simple lista con Map */ }
        <SimpleIterate/>
        { /* Iterando lista de objetos */ }
        <ObjectIterate/>
      </div>
    )
  }
}