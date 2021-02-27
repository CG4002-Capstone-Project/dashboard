import React, { Component } from 'react';
import Chart from 'chart.js';
import { AddColumnLeftIcon } from 'evergreen-ui';

export default class YPRLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.timestamp);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.yaw);
        this.myChart.data.datasets[1].data = this.props.data.map(d => d.pitch);
        this.myChart.data.datasets[2].data = this.props.data.map(d => d.roll);
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
                                suggestedMax: 180,
                                suggestedMin: -180
                            },
                        }
                    ]
                },
                animation: true,
                title: {
                    text: 'Yaw, Pitch & Roll against Time',
                    display: true,
                    fontFamily: 'Acme',
                    position: 'bottom'
                },
                legend: {
                    position: 'right',
                }
            },
            data: {
                labels: this.props.data.map(d => d.timestamp),
                datasets: [{
                    label: 'Yaw',
                    data: this.props.data.map(d => d.yaw),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Pitch',
                    data: this.props.data.map(d => d.pitch),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Roll',
                    data: this.props.data.map(d => d.roll),
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
