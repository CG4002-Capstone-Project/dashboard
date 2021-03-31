import React, { Component } from 'react';
import { MoveHeadlineDiv, HairChartDiv, GunChartDiv, SidepumpChartDiv } from './MovesControllerStyledComponents';
import { UserContext } from '../../../../../contexts/UserContext';
import { getMovesSummary } from '../../../../../utils/Analytics';
import PieChart from './PieChart';

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
                    <br />
                    <h2> Overall Dance Move Statistics </h2>
                    <h3> Total {this.state.totalMoves} moves </h3>
                    <h3> The group had {this.state.totalCorrectMoves} correct dance moves.  </h3>
                </MoveHeadlineDiv>

                <HairChartDiv>
                    <div> Hair: No of correct - {this.state.totalHairCorrect}, No of incorrect - {this.state.totalHairIncorrect} </div>
                    <PieChart name='Hair' totalCorrect={this.state.totalHairCorrect} totalIncorrect={this.state.totalHairIncorrect} />
                </HairChartDiv>

                <GunChartDiv>
                    <div> Hair: No of correct - {this.state.totalGunCorrect}, No of incorrect - {this.state.totalGunIncorrect} </div>
                    <PieChart name='Gun' totalCorrect={this.state.totalGunCorrect} totalIncorrect={this.state.totalGunIncorrect} />

                </GunChartDiv>

                <SidepumpChartDiv>
                    <div> Hair: No of correct - {this.state.totalSidepumpCorrect}, No of incorrect - {this.state.totalSidepumpIncorrect} </div>
                    <PieChart name='Sidepump' totalCorrect={this.state.totalSidepumpCorrect} totalIncorrect={this.state.totalSidepumpIncorrect} />
                </SidepumpChartDiv>
            </React.Fragment>
        )
    }
}

export default MovesController
