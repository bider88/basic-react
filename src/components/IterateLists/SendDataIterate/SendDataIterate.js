import React from 'react'

const fruits = [
  {
    name: 'Mango',
    price: 14
  },
  {
    name: 'Piña',
    price: 12
  },
  {
    name: 'Uva',
    price: 10
  },
  {
    name: 'Mamey',
    price: 9
  },
  {
    name: 'Guanabana',
    price: 14
  },
  {
    name: 'Maracuya',
    price: 15
  },
  {
    name: 'Kiwi',
    price: 11
  }
]

export default class SendDataIterate extends React.Component {

  state = {
    fruitSelected: ''
  }
  fruitSelected = (fruitSelected, event) => this.setState({
    fruitSelected
  })

  render() {
    const { fruitSelected } = this.state
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Pasar datos al iterar listas</p>
          <p>Selecciona una fruta:</p>
          <div className="content">
            <ol type="i">
              {
                fruits.map( (fruit, index) =>
                  <li key={ index } onClick={ this.fruitSelected.bind(this, fruit) } style={
                    {
                      cursor: 'pointer',
                      color: fruit.name === fruitSelected.name ? '#00D1B2' : '#000000'
                    }
                  }>{ fruit.name } - ${ fruit.price }</li>
                )
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}