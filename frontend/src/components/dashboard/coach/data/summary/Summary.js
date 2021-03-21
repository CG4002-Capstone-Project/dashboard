import React, { Component } from 'react';
import { SummaryDiv, StatusDiv, DanceMovePlayerDiv, EMGDiv, CorrectPositionDiv, SyncDelayMoveAccuracyDiv, HistoryDiv,
    GreenH4, RedH4 } from './SummaryStyledComponents';
import ReactPlayer from 'react-player';
import Table from 'react-bootstrap/Table';
import Fade from 'react-bootstrap/Fade';
import _ from 'lodash';
import EmgLineChart from './EmgLineChart';

let currentMove;
let videoComponent;
let currentMode;
let resultDisplay;
let positionDisplay;
let summaryDisplay;
let i = 0;

const moveIdToMove = ['Dab', 'Elbow Kick', 'Gun', 'Hair', 'Listen', 'Point High', 'Side Pump', 'Wipe Table']

// why mp4 videos need to be placed in public folder: https://stackoverflow.com/questions/60794257/react-js-react-player-how-to-play-local-video
// why tables need to be wary of whitespaces: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr
// how to check for empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

export class Summary extends Component {
    state = {
        summaryFirstRowDancerIds: null,
        summarySecondRowDancerIds: null,
        summaryThirdRowDancerIds: null,
        summaryFirstRowPredictedMove: null,
        summarySecondRowPredictedMove: null,
        summaryThirdRowPredictedMove: null,
        count: 0,
    }

    // static async getDerivedStateFromProps(props, state) {
    //     i += 1;
    //     console.log('im here ', state);
    //     if (state.count == 0) {
    //         console.log('woi');
    //         state = {
    //             count: 1,
    //             summaryFirstRowDancerIds: props.currentResult.dancerIds,
    //             summaryFirstRowPredictedMove: currentMove,
    //             summarySecondRowDancerIds: null,
    //             summaryThirdRowDancerIds: null,
    //             summarySecondRowPredictedMove: null,
    //             summaryThirdRowPredictedMove: null,
    //         }
    //         return state;
    //     } else if (state.count == 1) {
    //         const previousFirstRowDancerIds = state.summaryFirstRowDancerIds;
    //         const previousFirstRowPredictedMove = state.summaryFirstRowPredictedMove;

    //         return {
    //             count: 2,
    //             summaryFirstRowDancerIds: props.currentResult.dancerIds,
    //             summaryFirstRowPredictedMove: currentMove,
    //             summarySecondRowDancerIds: previousFirstRowDancerIds,
    //             summarySecondRowPredictedMove: previousFirstRowPredictedMove
    //         }
    //     } else if (state.count == 2) {
    //         const previousFirstRowDancerIds = state.summaryFirstRowDancerIds;
    //         const previousFirstRowPredictedMove = state.summaryFirstRowPredictedMove;
    //         const previousSecondRowDancerIds = state.summarySecondRowDancerIds;
    //         const previousSecondRowPredictedMove = state.summarySecondRowPredictedMove;

    //         return {
    //             summaryFirstRowDancerIds: props.currentResult.dancerIds,
    //             summaryFirstRowPredictedMove: currentMove,
    //             summarySecondRowDancerIds: previousFirstRowDancerIds,
    //             summarySecondRowPredictedMove: previousFirstRowPredictedMove,
    //             summaryThirdRowDancerIds: previousSecondRowDancerIds,
    //             summaryThirdRowPredictedMove: previousSecondRowPredictedMove
    //         }
    //     } else {
    //         return null;
    //     }
    // }

    async componentDidUpdate() {
        // this.handleHistoryState();
        i += 1;
        if (this.state.count == 0 && !_.isEmpty(this.props.currentResult)) {
            await this.setState({
                count: 1,
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
            })
        } else if (this.state.count == 1) {
            const previousFirstRowDancerIds = this.state.summaryFirstRowDancerIds;
            const previousFirstRowPredictedMove = this.state.summaryFirstRowPredictedMove;

            await this.setState({
                count: 2,
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
                summarySecondRowDancerIds: previousFirstRowDancerIds,
                summarySecondRowPredictedMove: previousFirstRowPredictedMove
            })
        } else if (this.state.count == 2) {
            const previousFirstRowDancerIds = this.state.summaryFirstRowDancerIds;
            const previousFirstRowPredictedMove = this.state.summaryFirstRowPredictedMove;
            const previousSecondRowDancerIds = this.state.summarySecondRowDancerIds;
            const previousSecondRowPredictedMove = this.state.summarySecondRowPredictedMove;

            await this.setState({
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
                summarySecondRowDancerIds: previousFirstRowDancerIds,
                summarySecondRowPredictedMove: previousFirstRowPredictedMove,
                summaryThirdRowDancerIds: previousSecondRowDancerIds,
                summaryThirdRowPredictedMove: previousSecondRowPredictedMove
            })
        }
    }

    settleMode() {
        let statusTraineeOne;
        let statusTraineeTwo;
        let statusTraineeThree;
        if (this.props.modeTraineeOne == 1) {
            statusTraineeOne = 'Idle';
        } else if (this.props.modeTraineeOne == 2) {
            statusTraineeOne = 'Moving';
        } else if (this.props.modeTraineeOne == 3) {
            statusTraineeOne = 'Dancing';
        }

        if (this.props.modeTraineeTwo == 1) {
            statusTraineeTwo = 'Idle';
        } else if (this.props.modeTraineeTwo == 2) {
            statusTraineeTwo = 'Moving';
        } else if (this.props.modeTraineeTwo == 3) {
            statusTraineeTwo = 'Dancing';
        }
        if (this.props.modeTraineeThree == 1) {
            statusTraineeThree = 'Idle';
        } else if (this.props.modeTraineeThree == 2) {
            statusTraineeThree = 'Moving';
        } else if (this.props.modeTraineeThree == 3) {
            statusTraineeThree = 'Dancing';
        }

        currentMode = (
            <React.Fragment>
                <br/>
                <h4> {this.props.traineeOneName} - {statusTraineeOne}  </h4>
                <br/>
                <h4> {this.props.traineeTwoName} - {statusTraineeTwo} </h4>
                <br/>
                <h4> {this.props.traineeThreeName} - {statusTraineeThree} </h4>
            </React.Fragment>
        )
    }

    settleVideoAndMove() {
        if (this.props.currentResult.predictedMove == 'dab') {
            currentMove = 'Dab';
            videoComponent = (
                <ReactPlayer url='./video/dab.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        } else if (this.props.currentResult.predictedMove == 'elbowkick') {
            currentMove = 'Elbow Kick';
            videoComponent = (
                <ReactPlayer url='./video/elbowkick.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentResult.predictedMove == 'gun') {
            currentMove = 'Gun';
            videoComponent = (
                <ReactPlayer url='./video/gun.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        }  else if (this.props.currentResult.predictedMove == 'hair') {
            currentMove = 'Hair';
            videoComponent = (
                <ReactPlayer url='./video/hair.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentResult.predictedMove == 'listen') {
            currentMove = 'Listen';
            videoComponent = (
                <ReactPlayer url='./video/listen.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentResult.predictedMove == 'pointhigh') {
            currentMove = 'Point High';
            videoComponent = (
                <ReactPlayer url='./video/pointhigh.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentResult.predictedMove == 'sidepump') {
            currentMove = 'Side Pump';
            videoComponent = (
                <ReactPlayer url='./video/sidepump.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentResult.predictedMove == 'wipetable') {
            currentMove = 'Wipe Table';
            videoComponent = (
                <ReactPlayer url='./video/wipetable.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        }
    }

    settleResult() {
        console.log('here ', this.props.currentResult);

        if (_.isEmpty(this.props.currentResult)) {
            positionDisplay = (
                <React.Fragment>
                    <h4> Positions </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </React.Fragment>
            );
            resultDisplay = (
                <React.Fragment>
                    <h4> Statistics </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </React.Fragment>
            );
        } else {
            if (this.props.currentResult.correctDancerIds == this.props.currentResult.dancerIds) {
                positionDisplay = (
                    <React.Fragment>
                        <br />
                        <br/>
                        <GreenH4> Current Positions - {this.props.currentResult.dancerIds} </GreenH4>
                        <br/>
                        <br/>
                        <GreenH4> Correct Positions - {this.props.currentResult.correctDancerIds} </GreenH4>
                    </React.Fragment>
                )
            } else {
                positionDisplay = (
                    <React.Fragment>
                        <br/>
                        <br/>
                        <RedH4> Current Positions - {this.props.currentResult.dancerIds} </RedH4>
                        <br/>
                        <br/>
                        <GreenH4> Correct Positions - {this.props.currentResult.correctDancerIds} </GreenH4>
                    </React.Fragment>
                )
            }

            resultDisplay = (
                    <React.Fragment>
                        <br/>
                        <h4> Current Move - {currentMove}  </h4>
                        <br/>
                        <h4> Sync Delay - {this.props.currentResult.syncDelay}s</h4>
                    </React.Fragment>
            )
        }
    }

    async handleHistoryState() {
        i += 1;
        if (this.state.count == 0) {
            await this.setState({
                count: 1,
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
            })
        } else if (this.state.count == 1) {
            const previousFirstRowDancerIds = this.state.summaryFirstRowDancerIds;
            const previousFirstRowPredictedMove = this.state.summaryFirstRowPredictedMove;

            await this.setState({
                count: 2,
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
                summarySecondRowDancerIds: previousFirstRowDancerIds,
                summarySecondRowPredictedMove: previousFirstRowPredictedMove
            })
        } else if (this.state.count == 2) {
            const previousFirstRowDancerIds = this.state.summaryFirstRowDancerIds;
            const previousFirstRowPredictedMove = this.state.summaryFirstRowPredictedMove;
            const previousSecondRowDancerIds = this.state.summarySecondRowDancerIds;
            const previousSecondRowPredictedMove = this.state.summarySecondRowPredictedMove;

            await this.setState({
                summaryFirstRowDancerIds: this.props.currentResult.dancerIds,
                summaryFirstRowPredictedMove: currentMove,
                summarySecondRowDancerIds: previousFirstRowDancerIds,
                summarySecondRowPredictedMove: previousFirstRowPredictedMove,
                summaryThirdRowDancerIds: previousSecondRowDancerIds,
                summaryThirdRowPredictedMove: previousSecondRowPredictedMove
            })
        }
    }

    settleHistory() {

        console.log('History ', JSON.stringify(this.state));
        if (_.isEmpty(this.props.currentResult)) {
            summaryDisplay = ( 
                <h4> No Data Yet! </h4>
            )
        } else {
            let summaryFirstRowDancerIds = this.state.summaryFirstRowDancerIds;
            let summarySecondRowDancerIds = this.state.summarySecondRowDancerIds;
            let summaryThirdRowDancerIds = this.state.summaryThirdRowDancerIds;

            let summaryFirstRowPredictedMove = this.state.summaryFirstRowPredictedMove;
            let summarySecondRowPredictedMove = this.state.summarySecondRowPredictedMove;
            let summaryThirdRowPredictedMove = this.state.summaryThirdRowPredictedMove;
            summaryDisplay = (
                <Table borderless size='sm'>
                    <thead><tr><th>Positions</th><th>Move</th></tr></thead>
                    <tbody>
                        {/* <Fade appear={true} in={true}></Fade> */}
                        <tr><td style={{ color: 'green' }} >{summaryFirstRowDancerIds}</td><td style={{ color: 'green' }}>{summaryFirstRowPredictedMove}</td></tr>
                        <tr><td style={{ color: 'red' }}>{summarySecondRowDancerIds}</td><td style={{ color: 'red' }}>{summarySecondRowPredictedMove}</td></tr>
                        <tr><td>{summaryThirdRowDancerIds}</td><td>{summaryThirdRowPredictedMove}</td></tr></tbody>
                </Table>
            );
        }
    }


    render() {
        console.log(`Count ${i} Current Move!!`, JSON.stringify(this.props.currentResult));
        /**
         * Move and Video Component
         */
        
        this.settleMode();
        this.settleVideoAndMove();
        this.settleResult();
        this.settleHistory();




        return (
          <SummaryDiv>
              <StatusDiv>
                {currentMode}
              </StatusDiv>
              <CorrectPositionDiv>
                {positionDisplay}
              </CorrectPositionDiv>

              <SyncDelayMoveAccuracyDiv>
                {resultDisplay}
              </SyncDelayMoveAccuracyDiv>

              <EMGDiv>
                <EmgLineChart data={this.props.emgs}/>
              </EMGDiv>
              
              <DanceMovePlayerDiv>
                {videoComponent}
              </DanceMovePlayerDiv>

              <HistoryDiv>
                <h4> History </h4>
                {summaryDisplay}
              </HistoryDiv>
          </SummaryDiv>
        )
    }
}

export default Summary
