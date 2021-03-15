import React, { Component } from 'react';
import { SummaryDiv, StatusDiv, DanceMovePlayerDiv, EMGDiv, CorrectPositionDiv, SyncDelayMoveAccuracyDiv, HistoryDiv,
    GreenH4, RedH4 } from './SummaryStyledComponents';
import ReactPlayer from 'react-player';
import Table from 'react-bootstrap/Table';
import Fade from 'react-bootstrap/Fade';
import _ from 'lodash';
import EmgLineChart from './EmgLineChart';

const moveIdToMove = ['Dab', 'Elbow Kick', 'Gun', 'Hair', 'Listen', 'Point High', 'Side Pump', 'Wipe Table']

// why mp4 videos need to be placed in public folder: https://stackoverflow.com/questions/60794257/react-js-react-player-how-to-play-local-video
// why tables need to be wary of whitespaces: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr
// how to check for empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

export class Summary extends Component {

    render() {
        // console.log(JSON.stringify(this.props.currentResult));
        console.log(JSON.stringify(this.props.modeTraineeOne));

        let videoComponent;
        let currentMove;

        if (this.props.currentMove == 'dab') {
            currentMove = 'Dab';
            videoComponent = (
                <ReactPlayer url='./video/dab.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        } else if (this.props.currentMove == 'elbowkick') {
            currentMove = 'Elbow Kick';
            videoComponent = (
                <ReactPlayer url='./video/elbowkick.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 'gun') {
            currentMove = 'Gun';
            videoComponent = (
                <ReactPlayer url='./video/gun.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            );
        }  else if (this.props.currentMove == 'hair') {
            currentMove = 'Hair';
            videoComponent = (
                <ReactPlayer url='./video/hair.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 'listen') {
            currentMove = 'Listen';
            videoComponent = (
                <ReactPlayer url='./video/listen.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 'pointhigh') {
            currentMove = 'Point High';
            videoComponent = (
                <ReactPlayer url='./video/pointhigh.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 'sidepump') {
            currentMove = 'Side Pump';
            videoComponent = (
                <ReactPlayer url='./video/sidepump.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 'wipetable') {
            currentMove = 'Wipe Table';
            videoComponent = (
                <ReactPlayer url='./video/wipetable.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        }

        let summaryFirstRowDancerIds = null;
        let summarySecondRowDancerIds = null;
        let summaryThirdRowDancerIds = null;

        let summaryFirstRowPredictedMove = null;
        let summarySecondRowPredictedMove = null;
        let summaryThirdRowPredictedMove = null;

        let summaryDisplay;
        if (this.props.dancerIds.length == 0) {
            summaryDisplay = ( 
                <h4> No Data Yet! </h4>
            )
        } else {
            if (this.props.dancerIds.length == 1) {
                summaryFirstRowDancerIds = this.props.dancerIds[0];
                summaryFirstRowPredictedMove = moveIdToMove[this.props.predictedMove[0] - 1];

                summarySecondRowDancerIds = null;
                summarySecondRowPredictedMove = null;
                summaryThirdRowDancerIds = null;
                summaryThirdRowPredictedMove = null;
            } else if (this.props.dancerIds == 2) {
                summaryFirstRowDancerIds = this.props.dancerIds[1];
                summaryFirstRowPredictedMove = moveIdToMove[this.props.predictedMove[1] - 1];

                summarySecondRowDancerIds = this.props.dancerIds[0];
                summarySecondRowPredictedMove = moveIdToMove[this.props.predictedMove[0] - 1];

                summaryThirdRowDancerIds = null;
                summaryThirdRowPredictedMove = null;
            } else {
                summaryFirstRowDancerIds = this.props.dancerIds[this.props.dancerIds.length - 1];
                summaryFirstRowPredictedMove = moveIdToMove[this.props.predictedMove[this.props.dancerIds.length - 1] - 1];

                summarySecondRowDancerIds = this.props.dancerIds[this.props.dancerIds.length - 2];
                summarySecondRowPredictedMove = moveIdToMove[this.props.predictedMove[this.props.dancerIds.length - 2] - 1];

                summaryThirdRowDancerIds = this.props.dancerIds[this.props.dancerIds.length - 3];
                summaryThirdRowPredictedMove = moveIdToMove[this.props.predictedMove[this.props.dancerIds.length - 3] - 1];
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

        let currentResultDisplay;
        let positionDisplay; 
        let currentPosition;
        let correctPosition;
        let currentStatus;
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
        currentStatus = (
            <React.Fragment>
                <br/>
                <h4> Riyas - {statusTraineeOne}  </h4>
                <br/>
                {/* <h4> Mary - Active </h4>
                <br/>
                <h4> Stacy - Active </h4> */}
            </React.Fragment>
        )
        if (_.isEmpty(this.props.currentResult)) {
            currentResultDisplay = (
                <React.Fragment>
                    <h4> Statistics </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </React.Fragment>
            )
            positionDisplay = (
                <React.Fragment>
                    <h4> Positions </h4>
                    <h4> Waiting for incoming data! Be Patient. </h4>
                </React.Fragment>
            )
        } else {
            currentResultDisplay = (
                <React.Fragment>
                    <br/>
                    <h4> Current Move - {currentMove}  </h4>
                    <br/>
                    {/* <h4> Sync Delay - {this.props.currentResult.syncDelay}s</h4>
                    <br/>
                    <h4> Accuracy - {this.props.currentResult.accuracy}% </h4> */}
                </React.Fragment>
            )
            currentPosition = this.props.currentResult.dancerIds;
            correctPosition = this.props.currentResult.correctDancerIds;

            if (currentPosition == correctPosition) {
                positionDisplay = (
                    <React.Fragment>
                        <br />
                        <br/>
                        <GreenH4> Current Positions - {currentPosition} </GreenH4>
                        <br/>
                        <br/>
                        <GreenH4> Correct Positions - {correctPosition} </GreenH4>
                    </React.Fragment>
                )
            } else {
                positionDisplay = (
                    <React.Fragment>
                        <br/>
                        <br/>
                        <RedH4> Current Positions - {currentPosition} </RedH4>
                        <br/>
                        <br/>
                        <GreenH4> Correct Positions - {correctPosition} </GreenH4>
                    </React.Fragment>
                )
            }
        }


        return (
          <SummaryDiv>
              <StatusDiv>
                {currentStatus}
              </StatusDiv>
              <CorrectPositionDiv>
                {positionDisplay}
              </CorrectPositionDiv>

              <SyncDelayMoveAccuracyDiv>
                {currentResultDisplay}
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
