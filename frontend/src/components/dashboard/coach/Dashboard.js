import React, { Component } from 'react';
import { DashboardDiv, IndividualInputDiv, SummaryDiv, PreDashboardDiv, QuestionDiv } from './DashboardStyledComponents';
import Individual from './Individual';
import Summary from './Summary';

export class Dashboard extends Component {

    render() {
        return (
            <DashboardDiv>
                <IndividualInputDiv>
                    <Individual />
                    <Individual />
                    <Individual />
                </IndividualInputDiv>
                
                <SummaryDiv>
                    <Summary />
                </SummaryDiv>
            </DashboardDiv>
        )
    }
}

export default Dashboard
