import React from 'react'

// const CardUser = (props) => (
// Add destructuring object
const CardUser = ({ user }) => (
  <div className='card'>
    <div className='card-content'>
      <div className='columns'>
        <div className='column'></div>
        <div className='column'>
          <figure className="image is-96x96">
            <img className="is-rounded" src={ user.avatar } alt='user'/>
          </figure>
        </div>
        <div className='column'></div>
      </div>
      <p className='subtitle is-4'>{ user.first_name + user.last_name }</p>
      <p className="subtitle is-6">{ user.email }</p>
    </div>
  </div>
)

export default class ComponentIterate extends React.Component {

  state = {
    users: [
      {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      },
      {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
      },
      {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
      },
      {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
      },
      {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
      },
      {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
      }
    ]
  }

  render() {

    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Iterando lista de componentes</p>
          <div className='columns is-desktop'>
            {
              this.state.users.map( user =>
                <div key={ user.id } className="column">
                  <CardUser user={ user }/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}