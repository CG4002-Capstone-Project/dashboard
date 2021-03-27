import React, { Component } from 'react';
import Chart from 'chart.js';
import { AddColumnLeftIcon } from 'evergreen-ui';
let i = 0;

export default class YPRLineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        // this.myChart.update();
        // i += 1;
        // console.log(`gcc ${i}`);

        this.myChart.data.labels.push(this.props.data.timestamp);
        this.myChart.data.datasets[0].data.push(this.props.data.yaw);
        this.myChart.data.datasets[1].data.push(this.props.data.pitch);
        this.myChart.data.datasets[2].data.push(this.props.data.roll);
        this.myChart.update();
        // setInterval(() => {
        //     i += 1;
        //     console.log(`Updated for the ${i}`);
        //     return this.myChart.update()
        // }, 1000)
        
        // setInterval(this.myChart.update(), 100);
    
    }
                


    componentDidMount() {
        // console.log(this.props.data.map(d => d.timestamp));
        this.myChart = new Chart(this.chartRef.current, {
            type: 'line',
            options: {
                animation: {
                    duration: 0,
                },
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
                                suggestedMax: 180,
                                suggestedMin: -180
                            },
                        }
                    ]
                },
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
                labels: [],
                datasets: [{
                    label: 'Yaw',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'red'              
                }, {
                    label: 'Pitch',
                    data: [],
                    fill: 'none',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }, {
                    label: 'Roll',
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
