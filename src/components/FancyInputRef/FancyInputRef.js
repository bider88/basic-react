import React from 'react';


// NOTA: forwardRef solo funciona con componentes funcionales
const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input className="input" type="text" ref={ref}/>
  </div>
))

class FancyInputRef extends React.Component {

  entry = React.createRef()

  componentDidMount() {
    console.log('FancyInputRef', this.entry);
  }
  

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Reenvío de la props especial ref con forwardref</p>
          <FancyInput ref={this.entry}/>
        </div>
      </div>
    )
  }
}

export default FancyInputRef;