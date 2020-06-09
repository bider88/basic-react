import React, { Component } from 'react'

class SelectForm extends Component {

  state = {
    tech: 'Vanilla',
    techs: [ 'Vanilla', 'React' ]
  }

  handleChange = (event) => {
    const tech = event.target.value
    this.setState({ tech })
  }
  
  handleChangeMultiple = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      option => option.value
    )

    this.setState({ techs })
  }

  render() {
    
    const { techs } = this.state
    
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Formulario con opciones de selección</p>
          <p>Technology selected: <b>{this.state.tech}</b></p>
          <form>
            <div className="level">
              <div className="level-left"></div>
              <div className="level-right">
                <div className="select">
                  <select value={this.state.tech} onChange={this.handleChange}>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="VueJS">VueJS</option>
                    <option value="Svelte">Svelte</option>
                    <option value="Vanilla">Vanilla</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          
          <p>Technologies selected: <b>{ techs.map((tech, index) => tech + `${ (index + 1) !== techs.length ? ', ' : '' }`) }</b></p>
          <form>
            <div className="level">
              <div className="level-left"></div>
              <div className="level-right">
                <div className="select is-multiple">
                  <select multiple size="5" value={techs} onChange={this.handleChangeMultiple}>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="VueJS">VueJS</option>
                    <option value="Svelte">Svelte</option>
                    <option value="Vanilla">Vanilla</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SelectForm;