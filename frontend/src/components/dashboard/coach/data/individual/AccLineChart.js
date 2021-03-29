import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-streaming';
let i = 0;

export default class AccLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        i += 1;
        console.log(`acc ${i}`);
        this.myChart.data.labels.push(this.props.data.timestamp);
        this.myChart.data.datasets[0].data.push(this.props.data.accx);
        this.myChart.data.datasets[1].data.push(this.props.data.accy);
        this.myChart.data.datasets[2].data.push(this.props.data.accz);

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
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
                responsive: true,
                aspectRatio: 2.75,
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
                                min: -15000,
                                max: 15000,
                                // suggestedMax: 2,
                                // suggestedMin: -2,
                            },
                        }
                    ]
                },
                title: {
                    text: 'Acceleration X, Y and Z against Time',
                    display: true,
                    fontFamily: 'Acme',
                    position: 'bottom'
                },
                legend: {
                    position: 'right',
                },
                elements: {
                    line: {
                        tension: 0
                    },
                    point: {
                        radius: 0
                    }
                }
            },
            data: {
                labels: [],
                datasets: [{
                    label: 'Acc X',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Acc Y',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Acc Z',
                    data: [],
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
