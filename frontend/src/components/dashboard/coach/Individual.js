import React, { Component, createContext } from 'react';
import { IndividualDiv } from './IndividualStyledComponents';
import Chart from 'chart.js';
import YPRLineChart from './YPRLineChart';
import AccLineChart from './AccLineChart';


export class Individual extends Component {
    
    render() {
        console.log(this.props.data);
        let display;
        if (this.props.data.length == 0) {
            display = (<div> <p> Ooops cant connect just yet. Receiving data in abit! </p>  </div>)
        } else {
            display = (
            <React.Fragment>
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
