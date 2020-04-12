import React from 'react'

export default class ObjectIterate extends React.Component {

  state = {
    products: [
      {
        id: 1,
        name: 'camisa 👔',
        colors: [ '#467367', '#05fd88', '#a706ee' ],
        price: 29
      },
      {
        id: 2,
        name: 'jeans 👖',
        colors: [ '#e04747', '#75ba00', '#f106ae', '#31559e' ],
        price: 53
      },
      {
        id: 3,
        name: 'jacket 🧥',
        colors: [ '#107c42', '#0d66ba', '#000000' ],
        price: 73
      },
      {
        id: 4,
        name: 'dress 👗',
        colors: [ '#c22fd6', '#4f0559', '#285905', '#93780b', '#21e084' ],
        price: 48
      },
      {
        id: 5,
        name: 'short 🩳',
        colors: [ '#605f5f', '#f2efef' ],
        price: 20
      }
    ]
  }

  boxColor = (color) => (
    {
      border: '1px solid grey',
      width: '20px',
      height: '20px',
      margin: '0 2px',
      backgroundColor: color
    }
  )

  render() {

    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Iterando lista de objetos <span role="img" aria-label='cart'>🛒</span></p>
          <div className='columns is-desktop'>
            {
              this.state.products.map( product =>
                <div key={ product.id } className="column">
                  <div className='card'>
                    <div className='card-content'>
                      <p className='subtitle is-4'>{ product.name }</p>
                      <p className="subtitle is-6">${ product.price }</p>
                    </div>
                    <footer className="card-footer">
                      {
                        product.colors.map( (color, index) =>
                          <p className="card-footer-item" key={ index }>
                            <span style={ this.boxColor(color) }></span>
                          </p>
                        )
                      }
                    </footer>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}