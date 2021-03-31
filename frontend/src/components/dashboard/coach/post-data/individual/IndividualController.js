import React, { Component } from 'react';
import { getDataSummary } from '../../../../../utils/Analytics';
import { UserContext } from '../../../../../contexts/UserContext';
import { DropDownDiv } from './IndividualControllerStyledComponents';
import Individual from './Individual';

export class IndividualController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA 1');

        try {
            console.log('POST DATA 2');
            const resultsSummary = await getDataSummary();
            console.log('POST DATA 3');
            await this.setState(prevState => ({
                ...prevState,
                totalCorrectMoves: resultsSummary.totalCorrectMoves,
                totalCorrectPositions: resultsSummary.totalCorrectPositions,
                totalNoMoves: resultsSummary.totalNoMoves,
                traineeOneTimestamp: resultsSummary.traineeOneTimestamp,
                traineeOneAccx: resultsSummary.traineeOneAccx,
                traineeOneAccy: resultsSummary.traineeOneAccy,
                traineeOneAccz: resultsSummary.traineeOneAccz,
                traineeOneGccx: resultsSummary.traineeOneGccx,
                traineeOneGccy: resultsSummary.traineeOneGccy,
                traineeOneGccz: resultsSummary.traineeOneGccz,
                traineeTwoTimestamp: resultsSummary.traineeTwoTimestamp,
                traineeTwoAccx: resultsSummary.traineeTwoAccx,
                traineeTwoAccy: resultsSummary.traineeTwoAccy,
                traineeTwoAccz: resultsSummary.traineeTwoAccz,
                traineeTwoGccx: resultsSummary.traineeTwoGccx,
                traineeTwoGccy: resultsSummary.traineeTwoGccy,
                traineeTwoGccz: resultsSummary.traineeTwoGccz,
                traineeThreeTimestamp: resultsSummary.traineeThreeTimestamp,
                traineeThreeAccx: resultsSummary.traineeThreeAccx,
                traineeThreeAccy: resultsSummary.traineeThreeAccy,
                traineeThreeAccz: resultsSummary.traineeThreeAccz,
                traineeThreeGccx: resultsSummary.traineeThreeGccx,
                traineeThreeGccy: resultsSummary.traineeThreeGccy,
                traineeThreeGccz: resultsSummary.traineeThreeGccz,
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post dashboard error', error);
            throw new Error(error);
        }
    }

    state = {
        totalCorrectMoves: 0,
        totalCorrectPositions: 0,
        totalNoMoves: 0,
        traineeOneTimestamp: [],
        traineeOneAccx: [],
        traineeOneAccy: [],
        traineeOneAccz: [],
        traineeOneGccx: [],
        traineeOneGccy: [],
        traineeOneGccz: [],
        traineeTwoTimestamp: [],
        traineeTwoAccx: [],
        traineeTwoAccy: [],
        traineeTwoAccz: [],
        traineeTwoAccz: [],
        traineeTwoGccx: [],
        traineeTwoGccy: [],
        traineeTwoGccz: [],
        traineeThreeTimestamp: [],
        traineeThreeAccx: [],
        traineeThreeAccy: [],
        traineeThreeAccz: [],
        traineeThreeGccx: [],
        traineeThreeGccy: [],
        traineeThreeGccz: [],
    };
    render() {
        {/* <PostDashboardDiv>
                    <Individual 
                        name='Riyas'
                        no='1'
                        timestamp={this.state.traineeOneTimestamp} 
                        accx={this.state.traineeOneAccx} 
                        accy={this.state.traineeOneAccy}
                        accz={this.state.traineeOneAccz}
                        gccx={this.state.traineeOneGccx}
                        gccy={this.state.traineeOneGccy}
                        gccz={this.state.traineeOneGccz}
                    />
                    <Individual
                        name='Zeng Hao'
                        no='2'
                        timestamp={this.state.traineeTwoTimestamp}
                        accx={this.state.traineeTwoAccx}
                        accy={this.state.traineeTwoAccy}
                        accz={this.state.traineeTwoAccz}
                        gccx={this.state.traineeTwoGccx}
                        gccy={this.state.traineeTwoGccy}
                        gccz={this.state.traineeTwoGccz}
                    />
                    <Individual
                        name='Brandon'
                        no='3'
                        timestamp={this.state.traineeThreeTimestamp}
                        accx={this.state.traineeThreeAccx}
                        accy={this.state.traineeThreeAccy}
                        accz={this.state.traineeThreeAccz}
                        gccx={this.state.traineeThreeGccx}
                        gccy={this.state.traineeThreeGccy}
                        gccz={this.state.traineeThreeGccz}
                    />
                </IndividualControllerDiv> */}
        return (
            <React.Fragment>
                <DropDownDiv>
                    <h1> hello  </h1>
                </DropDownDiv>
                <Individual />
            </React.Fragment>
        )
    }
}

export default IndividualController
