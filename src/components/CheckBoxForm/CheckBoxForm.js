import React, { Component } from 'react'

class CheckBoxForm extends Component {
  state = {
    active: false
  }

  handleChange = (event) => {
    const active = event.target.checked
    this.setState({ active })
  }

  goTo = () => { }

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Etiqueta checkbox con form</p>
          <form>
            <div className="level">
              <div className="level-left"></div>
              <div className="left-right">
                <label className="checkbox">
                  <input type="checkbox" checked={this.state.active} onChange={this.handleChange}/>
                  &nbsp;Estoy { this.state.active ? 'seleccionado' : 'deseleccionado' }
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CheckBoxForm;