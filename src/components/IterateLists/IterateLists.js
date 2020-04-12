import React from 'react'
import SimpleIterate from './SimpleIterate'
import ObjectIterate from './ObjectIterate'
import PropertyIterate from './PropertyIterate'

export default class IterateLists extends React.Component {
  render() {
    return (
      <div>
        { /* Iterando una simple lista con Map */ }
        <SimpleIterate/>
        { /* Iterando lista de objetos */ }
        <ObjectIterate/>
        { /* Iterando propiedades de objetos */ }
        <PropertyIterate/>
      </div>
    )
  }
}