import React, { Component } from 'react';
import Chart from 'chart.js';

export default class EmgLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.timestamp);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.emgValue);
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
                                suggestedMax: 5,
                                suggestedMin: 0,
                            },
                        }
                    ]
                },
                title: {
                    text: 'EMG Value against Time',
                    display: true,
                    fontFamily: 'Acme',
                    position: 'bottom'
                },
                legend: {
                    position: 'right',
                },
            },
            data: {
                labels: this.props.data.map(d => d.timestamp),
                datasets: [{
                    label: 'EMG',
                    data: this.props.data.map(d => d.emgValue),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'orange',
                    backgroundColor: 'orange'              
                }]
            }

        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
