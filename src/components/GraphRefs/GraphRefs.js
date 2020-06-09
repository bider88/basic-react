import React from 'react'
import Chart from 'chart.js'

class GraphRefs extends React.Component {

  graphic = React.createRef()

  componentDidMount() {
    // var ctx = document.getElementById('myChart').getContext('2d');
    const ctx = this.graphic.current.getContext('2d');
    ctx.height = 300

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [2, 10, 3, 1, 8, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  render() {

    return (
      <div className='card'>
        <div className='card-content'>
          <p className='title'>Integrar librerías de terceros usando las refs de React</p>
          <canvas ref={this.graphic}></canvas>
        </div>
      </div>
    )
  }
}

export default GraphRefs;