import React, { Component } from 'react';
import { 
    IndividualStatsOverallDiv,
    IndividualStatDiv,
    H3,
    H4
} from './IndividualStatsControllerStyledComponents';

export class IndividualStatsController extends Component {

    state = {
    }

    render() {
        console.log('Individual Stats Controller ', this.props);
        return (
            <IndividualStatsOverallDiv>
                <IndividualStatDiv>
                    <H3> Trainee 1 </H3>
                    <H4> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H4>
                    <H4> Position Score: {this.props.overallStats.traineeOneCorrectPosition} / {this.props.overallStats.totalPositions} </H4>

                </IndividualStatDiv>

                <IndividualStatDiv>
                    <H3> Trainee 2 </H3>
                    <H4> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H4>
                    <H4> Position Score: {this.props.overallStats.traineeTwoCorrectPosition} / {this.props.overallStats.totalPositions} </H4>
                </IndividualStatDiv>

                <IndividualStatDiv>
                    <H3> Trainee 3 </H3>
                    <H4> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H4>
                    <H4> Position Score: {this.props.overallStats.traineeThreeCorrectPosition} / {this.props.overallStats.totalPositions} </H4>

                </IndividualStatDiv>
            </IndividualStatsOverallDiv>
        )
    }
}

export default IndividualStatsController
