import React, { Component } from 'react';
import { PositionHeadlineDiv, TraineeOneDiv, TraineeTwoDiv, TraineeThreeDiv } from './PositionsControllerStyledComponents';
import { UserContext } from '../../../../../contexts/UserContext';
import { getPositionsSummary } from '../../../../../utils/Analytics';

export class PositionsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST Positions 1');

        try {
            console.log('POST Positions 2');
            const positionsSummary = await getPositionsSummary();
            console.log('POST Positions 3');
            await this.setState(prevState => ({
                ...prevState,
                totalPositions: positionsSummary.totalPositions,
                totalCorrectPositions: positionsSummary.totalCorrectPositions,
                totalIncorrectPositions: positionsSummary.totalIncorrectPositions,
                traineeOneCorrectPosition: positionsSummary.traineeOneCorrectPosition,
                traineeOneIncorrectPosition: positionsSummary.traineeOneIncorrectPosition,
                traineeTwoCorrectPosition: positionsSummary.traineeTwoCorrectPosition,
                traineeTwoIncorrectPosition: positionsSummary.traineeTwoIncorrectPosition,
                traineeThreeCorrectPosition: positionsSummary.traineeThreeCorrectPosition,
                traineeThreeIncorrectPosition: positionsSummary.traineeThreeIncorrectPosition
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post positions error', error);
            throw new Error(error);
        }
    }

    state = {
        totalPositions: 0,
        totalCorrectPositions: 0,
        totalIncorrectPositions: 0,
        traineeOneCorrectPosition: 0,
        traineeOneIncorrectPosition: 0,
        traineeTwoCorrectPosition: 0,
        traineeTwoIncorrectPosition: 0,
        traineeThreeCorrectPosition: 0,
        traineeThreeIncorrectPosition: 0
 
    };

    render() {
        return (
            <React.Fragment>
                <PositionHeadlineDiv>
                    {this.state.totalPositions}
                </PositionHeadlineDiv>

                <TraineeOneDiv>

                </TraineeOneDiv>

                <TraineeTwoDiv>

                </TraineeTwoDiv>

                <TraineeThreeDiv>

                </TraineeThreeDiv>
            </React.Fragment>
        )
    }
}

export default PositionsController
