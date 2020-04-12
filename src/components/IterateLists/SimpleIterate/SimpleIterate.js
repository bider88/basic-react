import React from 'react'

const fruits = [
  'Mango',
  'Piña',
  'Uva',
  'Mamey',
  'Guanabana',
  'Maracuya',
  'Kiwi',
]

export default class SimpleIterate extends React.Component {

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Iterando una simple lista con Map</p>
          <div className="content">
            <ol type="i">
              {
                fruits.map( (fruit, index) => <li key={ index }>{ fruit }</li> )
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}