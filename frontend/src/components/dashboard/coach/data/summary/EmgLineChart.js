import React, { Component } from 'react';
import Chart from 'chart.js';
let i = 0;

export default class EmgLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        i += 1;
        // console.log(`emg ${i}`);
        this.myChart.data.labels.push(this.props.data.timestamp);
        this.myChart.data.datasets[0].data.push(this.props.data.voltage);
        this.myChart.data.datasets[1].data.push(this.props.data.rms);
        this.myChart.data.datasets[2].data.push(this.props.data.mfq);

        this.myChart.update({
            duration: 0
        });    }

    componentDidMount() {
        // console.log(this.props.data.map(d => d.timestamp));
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            options: {
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsive: true,
                responsiveAnimationDuration: 0,
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
                                min: 0,
                                max: 200,
                                // suggestedMax: 5,
                                // suggestedMin: 0,
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
                // elements: {
                //     line: {
                //         tension: 0
                //     },
                //     point: {
                //         radius: 0
                //     }
                // }
            },
            data: {
                labels: [],
                datasets: [{
                    label: 'Voltage',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'teal',
                    backgroundColor: 'teal',
                    spanGaps: true,            
                }, {
                    label: 'RMS',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'lime',
                    backgroundColor: 'lime',
                    spanGaps: true,                   
                }, {
                    label: 'MFQ',
                    data: [],
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
