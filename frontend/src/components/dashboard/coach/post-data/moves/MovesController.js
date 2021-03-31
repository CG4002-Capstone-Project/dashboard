import React, { Component } from 'react';
import { MoveHeadlineDiv, HairChartDiv, GunChartDiv, SidepumpChartDiv } from './MovesControllerStyledComponents';
import { UserContext } from '../../../../../contexts/UserContext';
import { getMovesSummary } from '../../../../../utils/Analytics';

export class MovesController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST MOVES 1');

        try {
            console.log('POST MOVES 2');
            const movesSummary = await getMovesSummary();
            console.log('POST MOVES 3');
            await this.setState(prevState => ({
                ...prevState,
                totalMoves: movesSummary.totalMoves,
                totalCorrectMoves: movesSummary.totalCorrectMoves,
                totalGun: movesSummary.totalGun,
                totalGunCorrect: movesSummary.totalGunCorrect,
                totalGunIncorrect: movesSummary.totalGunIncorrect,
                totalHair: movesSummary.totalHair,
                totalHairCorrect: movesSummary.totalHairCorrect,
                totalHairIncorrect: movesSummary.totalHairIncorrect,
                totalSidepump: movesSummary.totalSidepump,
                totalSidepumpCorrect: movesSummary.totalSidepumpCorrect,
                totalSidepumpIncorrect: movesSummary.totalSidepumpIncorrect
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post MOVES error', error);
            throw new Error(error);
        }
    }

    state = {
        totalMoves: 0,
        totalCorrectMoves: 0,
        totalGun: 0,
        totalGunCorrect: 0,
        totalGunIncorrect: 0,
        totalHair: 0,
        totalHairCorrect: 0,
        totalHairIncorrect: 0,
        totalSidepump: 0,
        totalSidepumpCorrect: 0,
        totalSidepumpIncorrect: 0
    };

    render() {
        return (
            <React.Fragment>
                <MoveHeadlineDiv>
                    {this.state.totalCorrectMoves}
                </MoveHeadlineDiv>

                <HairChartDiv>

                </HairChartDiv>

                <GunChartDiv>

                </GunChartDiv>

                <SidepumpChartDiv>

                </SidepumpChartDiv>
            </React.Fragment>
        )
    }
}

export default MovesController
