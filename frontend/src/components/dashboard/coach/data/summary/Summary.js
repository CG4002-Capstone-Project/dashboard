import React, { Component } from 'react';
import { SummaryDiv, StatusDiv, DanceMovePlayerDiv, EMGDiv, CorrectPositionDiv, SyncDelayMoveAccuracyDiv, HistoryDiv,
    GreenH4, RedH4 } from './SummaryStyledComponents';
import ReactPlayer from 'react-player';
import Table from 'react-bootstrap/Table';
import Fade from 'react-bootstrap/Fade';
import _ from 'lodash';
import io from "socket.io-client";
import EmgController from './EmgController';
import { Button, EndorsedIcon } from 'evergreen-ui';



let currentMove;
let videoComponent;
let currentMode;
let resultDisplay;
let positionDisplay;
let summaryDisplay;
let i = 0;
let m = 0;
let j = 0;

const moveIdToMove = ['Dab', 'Elbow Kick', 'Gun', 'Hair', 'Listen', 'Point High', 'Side Pump', 'Wipe Table']

// why mp4 videos need to be placed in public folder: https://stackoverflow.com/questions/60794257/react-js-react-player-how-to-play-local-video
// why tables need to be wary of whitespaces: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr
// how to check for empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

export class Summary extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`[SUMMARY] Frontend Summary socket connected to backend ${socket.id}`);
        })

        socket.on("newResult", async (result) => {
            m += 1;
            console.log(`${j}th result: `+ JSON.stringify(result));

            // this.updatePositions(result.dancerIds);
            // this.updateCurrentMove(result.predictedMove);


            await this.setState(prevState => ({
                currentResult: {
                    ...prevState.currentResult,
                    timestamp: result.timestamp,
                    dancerIds: result.dancerIds,
                    correctDancerIds: result.correctDancerIds,
                    predictedMove: result.predictedMove,
                    syncDelay: result.syncDelay,
                    accuracy: result.accuracy
                }
            }))

            await this.handleHistoryState(result);  
        })

        socket.on("newMode", async (result) => {
            await this.setState(prevState => ({
                mode: result.mode
            }))
            console.log('Mode Changed in Result! ', result.mode);
        })

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
              }
            console.log('Frontend socket disconnected. Reason: ' + reason);
        })
    }

    state = {
        history: [],
        currentResult: {},
        mode: ''
    }

    handleHistoryState = async (result) => {
        if (this.state.history.length == 0) {
            await this.setState(prevState => {
                const history = [];
                history.push(result);
                return { history };
            })
        } else if (this.state.history.length == 1) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0]];
                return { history };
            })
        } else if (this.state.history.length == 2) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0], prevState.history[1]];
                return { history };
            })
        } else if (this.state.history.length == 3) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0], prevState.history[1]];
                return { history };
            })
        }

        // console.log('history', this.state.history);
    }
    
    settleMode() {
        if (this.state.mode == '') {
            currentMode = (
                <React.Fragment>
                    <h4> Trainee Instructions </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
            </React.Fragment>
            )
        } else {
                // <React.Fragment>
                //     <br/>
                //     <h4> {this.props.traineeOneName} - {statusTraineeOne}  </h4>
                //     <br/>
                //     <h4> {this.props.traineeTwoName} - {statusTraineeTwo} </h4>
                //     <br/>
                //     <h4> {this.props.traineeThreeName} - {statusTraineeThree} </h4>
                // </React.Fragment>
            let color =''
            console.log('Mode Changed in Summary! ', this.state.mode);
            // currentMode = (
            //     <React.Fragment>
            //         <br/>
            //         <h1> {this.state.mode} </h1>
            //         <br/>
            //     </React.Fragment>
            // )
            if (this.state.mode == 'CHANGE POSITIONS') {
                color = 'yellow';
            } else if (this.state.mode == 'START DANCING') {
                color = 'green';
            } else if (this.state.mode == 'RESETTING... DO NOT MOVE...') {
                color = 'red';
            }
            currentMode = (
                <StatusDiv inputColor={color}>
                    <br/>
                    <h1> {this.state.mode} </h1>
                    <br />
                </StatusDiv>
            )
        }
    }

    settleVideoAndMove() {
        if (this.state.currentResult.predictedMove == 0) {
            currentMove = 'Dab';
            videoComponent = (
                <ReactPlayer url='./video/dab.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        } else if (this.state.currentResult.predictedMove == 1) {
            currentMove = 'Elbow Kick';
            videoComponent = (
                <ReactPlayer url='./video/elbowkick.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.state.currentResult.predictedMove == 2) {
            currentMove = 'Gun';
            videoComponent = (
                <ReactPlayer url='./video/gun.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        }  else if (this.state.currentResult.predictedMove == 3) {
            currentMove = 'Hair';
            videoComponent = (
                <ReactPlayer url='./video/hair.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.state.currentResult.predictedMove == 4) {
            currentMove = 'Listen';
            videoComponent = (
                <ReactPlayer url='./video/listen.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.state.currentResult.predictedMove == 5) {
            currentMove = 'Point High';
            videoComponent = (
                <ReactPlayer url='./video/pointhigh.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.state.currentResult.predictedMove ==  6) {
            currentMove = 'Side Pump';
            videoComponent = (
                <ReactPlayer url='./video/sidepump.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.state.currentResult.predictedMove == 7) {
            currentMove = 'Wipe Table';
            videoComponent = (
                <ReactPlayer url='./video/wipetable.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        }
    }

    settleResult() {
        // console.log('here ', this.props.currentResult);

        if (_.isEmpty(this.state.currentResult)) {
            // positionDisplay = (
            //     <React.Fragment>
            //         <h4> Positions </h4>
            //         <h4> Waiting for incoming data! Be Patient. </h4>
            //     </React.Fragment>
            // );
            positionDisplay = (
                <CorrectPositionDiv>
                    <h4> Positions </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </CorrectPositionDiv>
            )
            resultDisplay = (
                <React.Fragment>
                    <h4> Statistics </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </React.Fragment>
            );
        } else {
            if (this.state.currentResult.correctDancerIds == this.state.currentResult.dancerIds) {
                // positionDisplay = (
                //     <React.Fragment>
                //         <br />
                //         <br/>
                //         <GreenH4> Current Positions - {this.state.currentResult.dancerIds} </GreenH4>
                //         <br/>
                //         <br/>
                //         <GreenH4> Correct Positions - {this.state.currentResult.correctDancerIds} </GreenH4>
                //     </React.Fragment>
                // )
                positionDisplay = (
                    <CorrectPositionDiv inputColor='lightgreen'>
                        <h4> Current Positions - {this.state.currentResult.dancerIds} </h4>
                        <br />
                        <h4> Correct Positions - {this.state.currentResult.correctDancerIds} </h4>
                    </CorrectPositionDiv>
                )
            } else {
                // positionDisplay = (
                //     <React.Fragment>
                //         <br/>
                //         <br/>
                //         <RedH4> Current Positions - {this.state.currentResult.dancerIds} </RedH4>
                //         <br/>
                //         <br/>
                //         <GreenH4> Correct Positions - {this.state.currentResult.correctDancerIds} </GreenH4>
                //     </React.Fragment>
                // )
                positionDisplay = (
                    <CorrectPositionDiv inputColor='lightsalmon'>
                        <h4> Current Positions - {this.state.currentResult.dancerIds} </h4>
                        <br />
                        <h4> Correct Positions - {this.state.currentResult.correctDancerIds} </h4>
                    </CorrectPositionDiv>
                )
            }

            resultDisplay = (
                    <React.Fragment>
                        <h4> Current Move - {currentMove}  </h4>
                        <h4> Sync Delay - {this.state.currentResult.syncDelay}s</h4>
                        <h4> Confidence - {this.state.currentResult.accuracy}%</h4>
                        <Button appearance='primary' marginRight={30} onClick={this.onDanceEndClicked} iconAfter={EndorsedIcon}> End Dance! </Button>
                    </React.Fragment>
            )
        }
    }

    onDanceEndClicked = event => {
        event.preventDefault();
        this.props.onDanceEnd();
    }

    settleHistory() {
        let summaryFirstRowDancerIds = null;
        let summarySecondRowDancerIds = null;
        let summaryThirdRowDancerIds = null;

        let summaryFirstRowPredictedMove = null;
        let summarySecondRowPredictedMove = null;
        let summaryThirdRowPredictedMove = null;

        // console.log('History ', JSON.stringify(this.props.history));
        if (_.isEmpty(this.state.history)) {
            summaryDisplay = ( 
                <h4> No Data Yet! </h4>
            )
        } else if (this.state.history.length == 1) {
            summaryFirstRowDancerIds = this.state.history[0].dancerIds;
            summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];
            
        } else if (this.state.history.length == 2) {
            summaryFirstRowDancerIds = this.state.history[0].dancerIds;
            summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];

            summarySecondRowDancerIds = this.state.history[1].dancerIds;
            summarySecondRowPredictedMove = moveIdToMove[this.state.history[1].predictedMove];

        } else if (this.state.history.length == 3) {
            summaryFirstRowDancerIds = this.state.history[0].dancerIds;
            summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];

            summarySecondRowDancerIds = this.state.history[1].dancerIds;
            summarySecondRowPredictedMove = moveIdToMove[this.state.history[1].predictedMove];

            summaryThirdRowDancerIds = this.state.history[2].dancerIds;
            summaryThirdRowPredictedMove = moveIdToMove[this.state.history[2].predictedMove];
        }

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

    render() {

        this.settleResult();
        this.settleVideoAndMove();
        this.settleHistory();
        this.settleMode();

        return (
          <SummaryDiv>
              
              <CorrectPositionDiv>
                {positionDisplay}
              </CorrectPositionDiv>

              <SyncDelayMoveAccuracyDiv>
                {resultDisplay}
              </SyncDelayMoveAccuracyDiv>

              <StatusDiv>
                {currentMode}
              </StatusDiv>

              <EMGDiv>
                <EmgController />
              </EMGDiv>
              
              {/* <DanceMovePlayerDiv>
                {videoComponent}
              </DanceMovePlayerDiv> */}

              <HistoryDiv>
                <h4> History </h4>
                {summaryDisplay}
              </HistoryDiv>
          </SummaryDiv>
        )
    }
}

export default Summary
