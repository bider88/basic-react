import React, { Component } from 'react'
import axios from 'axios'

class FilmSearchHTTP extends Component {
  state = {
    movie: {},
    loading: false
  }
  url = 'http://www.omdbapi.com/?i=tt3896198&apikey=9cd7bf96'

  handleSubmit = (event) => {
    event.preventDefault()

    this.toggleLoading()

    const title = event.target[0].value

    axios.get(this.url, {
      params: {
        t: title
      }
    })
    .then(({ data }) => {
      this.setState({ movie: data })
      this.toggleLoading()
    })
    .catch(error => {
      console.error(error)
      this.toggleLoading(false)
    })
  }

  toggleLoading = (isLoading) => {
    const loading = isLoading | !this.state.loading
    this.setState({ loading })
    
  }

  render() {
    
    const { movie, loading } = this.state

    const loadingClass = `control ${ loading && 'is-loading' }`
    
    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Buscador de películas HTTP</p>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className={loadingClass}>
                <input type="text" className="input is-rounded" placeholder='Buscador de películas...'/>
              </div>
            </div>
            <div className="buttons is-right">
              <button className="button is-info">Buscar</button>
            </div>
          </form>

          {
            movie.Title && (
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={ movie?.Poster } alt={ movie?.Title } />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{ movie?.Title }</p>
                      <p className="subtitle is-6">{ movie?.Genre }</p>
                    </div>
                  </div>
                  <div className="content">
                    { movie?.Plot }
                    <br />
                    <time dateTime="2016-1-1">{ movie?.Released }</time>
                  </div>
                </div>
              </div>
            )
          }

          {
            movie.Error && (
              <h2>Película no encontrada</h2>
            )
          }

        </div>
      </div>
    )
  }
}

export default FilmSearchHTTP;