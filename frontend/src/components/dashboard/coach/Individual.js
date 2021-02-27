import React, { Component, createContext } from 'react';
import { IndividualDiv, InfoDisplay, PreDisplay } from './IndividualStyledComponents';
import Chart from 'chart.js';
import YPRLineChart from './YPRLineChart';
import AccLineChart from './AccLineChart';


export class Individual extends Component {
    
    render() {
        console.log(this.props.data);
        let display;
        if (this.props.data.length == 0) {
            display = ( 
                <PreDisplay>
                    <h2> Ooops unable to connect just yet. </h2>
                    <p>  Receving data in abit! If problem persists, check whether trainee has activated their device.  </p>
                </PreDisplay>
            )
        } else {
            display = (
            <React.Fragment>
                <InfoDisplay>
                    <h3> Trainee {this.props.no} - {this.props.name} </h3>
                </InfoDisplay>
                <AccLineChart data={this.props.data} />
                <YPRLineChart data={this.props.data} /> 
            </React.Fragment> 
        )}
        return (
            <IndividualDiv>
                
                {display}

            </IndividualDiv>
        )
    }
}

export default Individual
