import React, { Component, createContext } from 'react';
import { IndividualDiv, InfoDisplay, PreDisplay, PositionDisplay } from './IndividualStyledComponents';
import Chart from 'chart.js';
import YPRLineChart from './YPRLineChart';
import AccLineChart from './AccLineChart';
import { IconContext } from 'react-icons';
import { IoAccessibilityOutline, IoAccessibilitySharp } from 'react-icons/io5'; 

// how to style react-icons: https://stackoverflow.com/questions/56636280/how-to-style-react-icons
function redPersonIcon() {
    return (
        <IconContext.Provider value={{ fill: "red", size: '2rem', marginRight: '1.5rem' }} >
            <div>
                <IoAccessibilitySharp />
            </div>
        </IconContext.Provider>
    )
}

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
                <PositionDisplay >
                    {/* <AccessibilityNewIcon fontSize='large' color="primary" style={{ marginRight: '1rem'}} />
                    <AccessibilityNewIcon fontSize='large' color="primary" style={{ marginRight: '1rem'}} />
                    <AccessibilityNewIcon fontSize='large' color="action" style={{ color: red[500], marginRight: '1rem'}} /> */}
                    <IoAccessibilityOutline size='2rem' color="red" style={{ marginRight: '1.5rem' }} />
                    <IoAccessibilitySharp size='2rem' color="red" style={{ fill:'#291f7d', outlineColor: 'black', marginRight: '1.5rem' }} />
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                </PositionDisplay>

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
