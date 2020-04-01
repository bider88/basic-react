import React from 'react'

const Title = (props) => {

  const styles = {
    padding: '0.3em',
    color: '#fff',
    background: props.uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  console.log('props.children', props.children)

  return (
    <h1 style= { styles }>{ props.children }</h1>
  )
}

export default class ChildrenProp extends React.Component {
  state = {
    uiColor: 'purple'
  }
  
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Prop especial children</p>
          <Title uiColor={this.state.uiColor}>
            You are <em>cool</em>!!
          </Title>
        </div>
      </div>
    )
  }
}