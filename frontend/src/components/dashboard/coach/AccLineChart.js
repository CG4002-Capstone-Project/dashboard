import React, { Component } from 'react';
import Chart from 'chart.js';

export default class AccLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.timestamp);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.accx);
        this.myChart.data.datasets[1].data = this.props.data.map(d => d.accy);
        this.myChart.data.datasets[2].data = this.props.data.map(d => d.accz);
        this.myChart.update();
    }

    componentDidMount() {
        console.log(this.props.data.map(d => d.timestamp));
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            options: {
                scales: {
                    xAxes: [
                        {   
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                suggestedMax: 15000,
                                suggestedMin: -15000,
                            },
                        }
                    ]
                },
                animation: true,
                title: {
                    text: 'Acceleration X, Y and Z against Time',
                    display: true,
                    fontFamily: 'Acme',
                },
                legend: {
                    position: 'right',
                }
            },
            data: {
                labels: this.props.data.map(d => d.timestamp),
                datasets: [{
                    label: 'Acc X',
                    data: this.props.data.map(d => d.accx),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Acc Y',
                    data: this.props.data.map(d => d.accy),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Acc Z',
                    data: this.props.data.map(d => d.accz),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'green'
                }]
            }

        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
