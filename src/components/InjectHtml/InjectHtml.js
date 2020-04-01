import React from 'react'

export default class InjectHtml extends React.Component {

  state = {
    mark: `
      <h1>Este proviene desde el state</h1>
      <p>Inyectando etiquetas html</p>
      <hr/>
      <a href="#">Some link</a>
    `
  }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Inyectando HTML</p>
          <div dangerouslySetInnerHTML = {{
            __html: this.state.mark
          }}>
          </div>
        </div>
      </div>
    )
  }
}