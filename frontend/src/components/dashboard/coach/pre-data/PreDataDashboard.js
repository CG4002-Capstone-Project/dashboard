import React, { Component } from 'react';
import { PreDashboardDiv, QuestionDiv } from './PreDataStyledComponents';
import { Button, EndorsedIcon } from 'evergreen-ui';

export class PreDataDashboard extends Component {
    onLetsDanceClicked = event => {
        event.preventDefault();
        this.props.onStart();

    }
    render() {
        return (
            <PreDashboardDiv>
                <QuestionDiv>
                    <h1> Are you ready to dance? </h1>
                    <Button appearance='primary' marginRight={30} onClick={this.onLetsDanceClicked} iconAfter={EndorsedIcon}> Lets Dance! </Button>
                </QuestionDiv>
            </PreDashboardDiv>
        )
    }
}

export default PreDataDashboard;
