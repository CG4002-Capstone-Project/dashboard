import React, { Component } from 'react';
import { DashboardDiv, IndividualInputDiv, SummaryDiv, PreDashboardDiv, QuestionDiv, PostResultsDiv, PostDashboardDiv } from './DashboardStyledComponents';
import Individual from './Individual';
import { Button, EndorsedIcon } from 'evergreen-ui';
import Summary from './Summary';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { addTraineeOneData, addTraineeTwoData, addTraineeThreeData,
    addSyncDelay, addPredictedMove, addDancerIds, addAccuracy } from '../../../actions';

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
            this.props.addAccuracy(result);
            this.props.addDancerIds(result);
            this.props.addPredictedMove(result);
            this.props.addSyncDelay(result);
            this.updatePositions(result.dancerIds);
            this.updateCurrentMove(result.predictedMove)
            console.log('result: '+ JSON.stringify(result));
        })

        socket.on("disconnect", () => {
            console.log('Frontend socket disconnected')
        })
    }
    state = {
        preDashboard: true, 
        postDashboard: false,
        posTraineeOne: 1,
        posTraineeTwo: 2,
        posTraineeThree: 3,
        currentMove: 0
    }

    updateCurrentMove = async (move) => {
        if (move == '1') {
            await this.setState({
                currentMove: 1
            });
        } else if (move == '2') {
            await this.setState({
                currentMove: 2
            });
        } else if (move == '3') {
            await this.setState({
                currentMove: 3
            });
        } else if (move == '4') {
            await this.setState({
                currentMove: 4
            });
        } else if (move == '5') {
            await this.setState({
                currentMove: 5
            });
        } else if (move == '6') {
            await this.setState({
                currentMove: 6
            });
        } else if (move == '7') {
            await this.setState({
                currentMove: 7
            });
        } else if (move == '8') {
            await this.setState({
                currentMove: 8
            });
        }
    }

    updatePositions = async (positions) => {
        if (positions == '1 2 3') {
            await this.setState({
                posTraineeOne: 1
            });
            await this.setState({
                posTraineeTwo: 2
            });
            await this.setState({
                posTraineeThree: 3
            })
        } else if (positions == '1 3 2') {
            await this.setState({
                posTraineeOne: 1
            });
            await this.setState({
                posTraineeTwo: 3
            });
            await this.setState({
                posTraineeThree: 2
            })
        } else if (positions == '2 1 3') {
            await this.setState({
                posTraineeOne: 2
            });
            await this.setState({
                posTraineeTwo: 1
            });
            await this.setState({
                posTraineeThree: 3
            })
        } else if (positions == '2 3 1') {
            await this.setState({
                posTraineeOne: 3
            });
            await this.setState({
                posTraineeTwo: 1
            });
            await this.setState({
                posTraineeThree: 2
            })
        } else if (positions == '3 1 2') {
            await this.setState({
                posTraineeOne: 2
            });
            await this.setState({
                posTraineeTwo: 3
            });
            await this.setState({
                posTraineeThree: 1
            })
        } else if (positions == '3 2 1') {
            await this.setState({
                posTraineeOne: 3
            });
            await this.setState({
                posTraineeTwo: 2
            });
            await this.setState({
                posTraineeThree: 1
            })
        }
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
                    <Individual data={this.props.traineeOneData} no='1' name='Jane' position={this.state.posTraineeOne} />
                    <Individual data={this.props.traineeTwoData} no='2' name='Mary' position={this.state.posTraineeTwo} />
                    <Individual data={this.props.traineeThreeData} no='3' name='Stacy' position={this.state.posTraineeThree} />
                </IndividualInputDiv>
                
                <SummaryDiv>
                    <Summary accuracy={this.props.accuracy} dancerIds={this.props.dancerIds} predictedMoves={this.props.predictedMoves} syncDelay={this.props.syncDelay} currentMove={this.state.currentMove} />
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
        traineeThreeData: state.traineeThreeData,
        syncDelay: state.syncDelay,
        predictedMove: state.predictedMove,
        dancerIds: state.dancerIds,
        accuracy: state.accuracy
    }
}

// connect actions to the mapstatetoprops
export default connect(mapStateToProps, {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData,
    addDancerIds,
    addPredictedMove,
    addAccuracy,
    addSyncDelay
})(Dashboard);
