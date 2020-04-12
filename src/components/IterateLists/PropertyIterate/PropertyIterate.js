import React from 'react'

export default class PropertyIterate extends React.Component {

  state = {
    user: {
      name: 'Irving Didier',
      country: 'Mexico',
      twitter: '@didiersa',
      occupation: 'Developer',
    }
  }

  render() {

    const { user } = this.state
    const keys = Object.keys( user )

    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Iterando propiedades de objetos</p>
          {
            keys.map( (key, index) => <p key={ index }> <b>{ key }:</b> { user[key] } </p> )
          }
        </div>
      </div>
    )
  }
}