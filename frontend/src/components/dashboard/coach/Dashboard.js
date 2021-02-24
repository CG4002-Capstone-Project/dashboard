import React, { Component } from 'react';
import { DashboardDiv, IndividualInputDiv, SummaryDiv, PreDashboardDiv, QuestionDiv, PostResultsDiv, PostDashboardDiv } from './DashboardStyledComponents';
import Individual from './Individual';
import { Button, EndorsedIcon } from 'evergreen-ui';
import Summary from './Summary';
import { ThemeConsumer } from 'styled-components';

export class Dashboard extends Component {

    state = {
        preDashboard: true, 
        postDashboard: false,
    }

    onLetsDanceClicked = event => {
        event.preventDefault();
        this.setState({
            preDashboard: false,
        })
    }


    render() {

        let currentState;

        const preDashboard = (
            <PreDashboardDiv>
                <QuestionDiv>
                    <h1> Are you ready to dance? </h1>
                    <Button appearance='primary' marginRight={30} onClick={this.onLetsDanceClicked} iconAfter={EndorsedIcon}> Lets Dance! </Button>
                </QuestionDiv>

            </PreDashboardDiv>
        )

        const dashboard = (
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

        const postDashboard = (
            <PostDashboardDiv>
                <PostResultsDiv>
                    <h1> Results </h1>
                </PostResultsDiv>
            </PostDashboardDiv>
        )
        console.log(this.state);
        if (this.state.preDashboard) {
            console.log('pre dashboard');
            currentState = preDashboard;
        } else if (this.state.postDashboard) {
            console.log('post dashboard');
            currentState = postDashboard;
        } else {
            console.log('dashboard');
            currentState = dashboard;
        }
        return (
            <React.Fragment>
                {currentState}
            </React.Fragment>
        )
    }
}

export default Dashboard