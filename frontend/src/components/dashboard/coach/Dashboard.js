import React, { Component } from 'react';
import { DashboardDiv, IndividualInputDiv, SummaryDiv, PreDashboardDiv, QuestionDiv, PostResultsDiv, PostDashboardDiv } from './DashboardStyledComponents';
import Individual from './Individual';
import { Button, EndorsedIcon } from 'evergreen-ui';
import Summary from './Summary';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { addTraineeOneData, addTraineeTwoData, addTraineeThreeData } from '../../../actions';

export class Dashboard extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`Frontend socket connected to backend ${socket.id}`);
        })
        socket.on("onNewTraineeOneData", (data) => {
            this.props.addTraineeOneData(data);
            console.log('data ' + JSON.stringify(data));
        })
        socket.on("onNewTraineeTwoData", (data) => {
            this.props.addTraineeTwoData(data);
            console.log('data ' + JSON.stringify(data));
        })
        socket.on("onNewTraineeThreeData", (data) => {
            this.props.addTraineeThreeData(data);
            console.log('data ' + JSON.stringify(data));
        })

        socket.on("newResult", (result) => {
            console.log('result: '+ JSON.stringify(result));
        })
    }
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

        // console.log(this.props);
        let currentState;

        const preDashboard = (
            <PreDashboardDiv>
                <QuestionDiv>
                    <h1> Are you ready to dance? </h1>
                    <Button appearance='primary' marginRight={30} onClick={this.onLetsDanceClicked} iconAfter={EndorsedIcon}> Lets Dance! </Button>
                </QuestionDiv>

            </PreDashboardDiv>
        )
        
        // TODO fix name!! and coach-trainee entity relationship
        const dashboard = (
            <DashboardDiv>
                <IndividualInputDiv>
                    <Individual data={this.props.traineeOneData} no='1' name='Jane' />
                    <Individual data={this.props.traineeTwoData} no='2' name='Mary' />
                    <Individual data={this.props.traineeThreeData} no='3' name='Stacy' />
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

// do this to access the values created from each reducer. The state refers to the keys of the combined reducers. 
const mapStateToProps = (state) => {
    return {
        traineeOneData: state.traineeOneData,
        traineeTwoData: state.traineeTwoData,
        traineeThreeData: state.traineeThreeData
    }
}

// connect actions to the mapstatetoprops
export default connect(mapStateToProps, {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData
})(Dashboard);
