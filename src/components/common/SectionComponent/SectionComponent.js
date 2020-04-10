import React from 'react'

export default class SectionComponent extends React.Component {
  render() {
    const sectionClass = `hero ${ this.props.medium && 'is-medium' } ${ 'is-' + this.props.type } ${ this.props.bold && 'is-bold' }`
    console.log('sectionClass', sectionClass)
    return (
      <section className={sectionClass}>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              {this.props.title}
            </h1>
            <h2 className='subtitle'>
              {this.props.subtitle}
            </h2>
          </div>
        </div>
      </section>
    )
  }
}