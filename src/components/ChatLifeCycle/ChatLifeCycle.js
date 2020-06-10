import React, { Component } from 'react'
import faker from 'faker';


const chatStyle = {
  maxWidth: 800,
  margin: '0 auto',
  borderRadius: '3px',
  padding: '15px 15px',
  height: 400,
  border: '1px solid gray',
  overflow: 'auto',
}

class Chat extends Component {

  box = React.createRef()

  getSnapshotBeforeUpdate() {
    const box = this.box.current

    if ( box.scrollTop + box.offsetHeight >= box.scrollHeight ) {
      return true
    }

    return false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const box = this.box.current

    if ( snapshot ) {
      box.scrollTop = this.box.current.scrollHeight
    }
  }

  render() {
    return (
      <div style={chatStyle} ref={this.box}>
        {
          this.props.list.map(msg=> (

            <article key={msg.id}  className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={ msg.avatar } alt={ msg.name }/>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{ msg.name }</strong> <small>@{ msg.username }</small>
                    <br />
                    { msg.mesage }
                  </p>
                </div>
              </div>
            </article>

          ))
        }
      </div>
    )
  }
}

class ChatLifeCycle extends Component {
  state = {
    list: []
  }


  componentDidMount() {
    this.addMessage()
  }
  

  addMessage = () => {
    const message = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      mesage: faker.hacker.phrase()
    }

    this.setState(state => ({
      list: [
        ...state.list,
        message
      ]
    }), () => {
      console.log(this.state.list)
    })
  }

  render() { 
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Ciclo de vida getSnapShotBeforeUpdate</p>
          <Chat list={this.state.list}/>
          <div style={{ marginTop: '20px' }} className="buttons is-right">
            <button className="button is-primary" onClick={this.addMessage}>Nuevo mensaje</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatLifeCycle;