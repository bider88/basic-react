import React from 'react'
import PropTypes from 'prop-types'

const noop = () => {}
export default class ValidPropTypes extends React.Component {

  // Valida que el tipo de dato sea el esperado
  static propTypes = {
    name: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    bio: PropTypes.string,
    age: PropTypes.number,
    country: PropTypes.string.isRequired
  }

  // Valores por defecto si no se paso por las props
  static defaultProps = {
    country: 'Mexico',
    greeting: noop
  }

  greeting = () => {
    this.props.greeting()
  }

  render() {
    const {name, twitter, bio, age, country} = this.props
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
          <p>{ country }</p>
        </div>
      </div>
    )
  }
}