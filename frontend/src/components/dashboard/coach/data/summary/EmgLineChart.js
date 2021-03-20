import React, { Component } from 'react';
import Chart from 'chart.js';

export default class EmgLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.timestamp);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.voltage);
        this.myChart.data.datasets[1].data = this.props.data.map(d => d.rms);
        this.myChart.data.datasets[2].data = this.props.data.map(d => d.mfq);
        this.myChart.update();
    }

    componentDidMount() {
        // console.log(this.props.data.map(d => d.timestamp));
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            options: {
                animation: {
                    duration: 0,
                },
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
                    label: 'Voltage',
                    data: this.props.data.map(d => d.voltage),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'teal',
                    backgroundColor: 'teal',
                    spanGaps: true,            
                }, {
                    label: 'RMS',
                    data: this.props.data.map(d => d.rms),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'lime',
                    backgroundColor: 'lime',
                    spanGaps: true,                   
                }, {
                    label: 'MFQ',
                    data: this.props.data.map(d => d.mfq),
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'purple',
                    backgroundColor: 'purple',
                    spanGaps: true,               
                }]
            }

        })
    }
    // <canvas ref={this.chartRef} />
    render() {
        return <canvas ref={this.chartRef}/>
    }
}
