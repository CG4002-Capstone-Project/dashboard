import React, { Component } from 'react';
import { SummaryDiv, DanceMovePlayerDiv, EMGDiv, CorrectPositionDiv, SyncDelayDiv, HistoryDiv } from './SummaryStyledComponents';
import ReactPlayer from 'react-player';

export class Summary extends Component {
    render() {

        let videoComponent;
        console.log(this.props.currentMove);
        if (this.props.currentMove == 0) {
            videoComponent = (
                <React.Fragment> </React.Fragment>
            )
        } else if (this.props.currentMove == 1) {
            videoComponent = (
                <ReactPlayer url='./video/dab.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 2) {
            videoComponent = (
                <ReactPlayer url='./video/elbowkick.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 3) {
            videoComponent = (
                <ReactPlayer url='./video/gun.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 4) {
            videoComponent = (
                <ReactPlayer url='./video/hair.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 5) {
            videoComponent = (
                <ReactPlayer url='./video/listen.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 6) {
            videoComponent = (
                <ReactPlayer url='./video/pointhigh.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 7) {
            videoComponent = (
                <ReactPlayer url='./video/sidepump.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        } else if (this.props.currentMove == 8) {
            videoComponent = (
                <ReactPlayer url='./video/wipetable.mp4' controls={true} loop={true} playing={true}  volume={0} width={300} height={200} />
            )
        }

        return (
          <SummaryDiv>

              <CorrectPositionDiv>

              </CorrectPositionDiv>

              <SyncDelayDiv>


              </SyncDelayDiv>

              <EMGDiv>


              </EMGDiv>
              <DanceMovePlayerDiv>
                {videoComponent}
              </DanceMovePlayerDiv>

              <HistoryDiv>


              </HistoryDiv>


          </SummaryDiv>
        )
    }
}

export default Summary
