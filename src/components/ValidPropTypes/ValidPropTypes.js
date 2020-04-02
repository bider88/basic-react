import React from 'react'
import PropTypes from 'prop-types'

export default class ValidPropTypes extends React.Component {

  // Valida que el tipo de dato sea el esperado
  static propTypes = {
    name: PropTypes.string,
    twitter: PropTypes.string,
    bio: PropTypes.string,
    age: PropTypes.number
  }

  render() {
    const {name, twitter, bio, age} = this.props
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Validar datos de las props con prop-types</p>
          Para usar prop-type se debe de instalar la dependencia con <b>npm</b>
          <pre>
            npm i prop-types
          </pre>
          <small>Mas info en <a href='https://www.npmjs.com/package/prop-types' target='_blank' rel='noopener noreferrer'>prop-types</a></small>
          <hr/>
          <p>Perfil</p>
          <br/>
          <p>{ name }</p>
          <p><a href={ twitter } target='_blank' rel='noopener noreferrer'>{ twitter }</a></p>
          <p>{ bio }</p>
          <p>{ age }</p>
        </div>
      </div>
    )
  }
}