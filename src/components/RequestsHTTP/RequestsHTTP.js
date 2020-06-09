import React, { Component } from 'react'

class RequestsHTTP extends Component {
  state = {
    users: [],
    loading: true
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ users, loading: false }))
    .catch(error => console.error(error))
  }
  

  render() {
    
    if (this.state.loading) {
      return <h2>Cargando...</h2>
    }
    
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Realizando peticiones HTTP</p>
          <h2>{ this.state.text }</h2>
          <div className="content">
            <ol type='1'>
              {
                this.state.users.map(user => (
                  <li key={user.id}>
                    { user.name }
                    <a href={ `http://${user.website}` } target='blank'> website</a>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default RequestsHTTP;