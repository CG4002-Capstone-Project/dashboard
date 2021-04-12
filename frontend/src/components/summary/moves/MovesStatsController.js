import React, { Component } from 'react';
import { MoveHeadlineDiv,
    MoveMainDiv,
    MovesDiv, 
    ChartDiv,
    ScoreDiv,
    DropdownDiv,
    H3,
    H4 } from './MovesStatsStyledComponents';
import { UserContext } from '../../../contexts/UserContext';
import { getMovesStats } from '../../../utils/Analytics';

import { Select } from 'evergreen-ui';

export class MovesStatsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA MOVES STATS 1');

        try {
            console.log('POST DATA MOVES STATS 2');
            const individualStats = await getMovesStats();
            console.log('POST DATA MOVES STATS 3');
            await this.setState(prevState => ({
                ...prevState,
                ...individualStats,
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('POST DATA MOVES STATS error', error);
            throw new Error(error);
        }
    }

    state = {
        activeIndex: 1,
        totalDab: 0,
        moveDabCorrDab: 0,
        moveDabIncorrElbowKick: 0,
        moveDabIncorrListen: 0,
        moveDabIncorrHair: 0,
        moveDabIncorrGun: 0,
        moveDabIncorrPointHigh: 0,
        moveDabIncorrSidepump: 0,
        moveDabIncorrWipeTable: 0,
        totalElbowKick: 0,
        moveElbowKickCorrElbowKick: 0,
        moveElbowKickIncorrDab: 0,
        moveElbowKickIncorrGun: 0,
        moveElbowKickIncorrHair: 0,
        moveElbowKickIncorrPointHigh: 0,
        moveElbowKickIncorrSidepump: 0,
        moveElbowKickIncorrListen: 0,
        moveElbowKickIncorrWipeTable: 0,
        totalHair: 0,
        moveHairCorrHair: 0,
        moveHairIncorrDab: 0,
        moveHairIncorrElbowKick: 0,
        moveHairIncorrGun: 0,
        moveHairIncorrListen: 0,
        moveHairIncorrPointHigh: 0,
        moveHairIncorrSidepump: 0,
        moveHairIncorrWipeTable: 0,
        totalListen: 0,
        moveListenCorrListen: 0,
        moveListenIncorrDab: 0,
        moveListenIncorrElbowKick: 0,
        moveListenIncorrGun: 0,
        moveListenIncorrHair: 0,
        moveListenIncorrPointHigh: 0,
        moveListenIncorrSidepump: 0,
        moveListenIncorrWipeTable: 0,
        totalGun: 0,
        moveGunCorrGun: 0,
        moveGunIncorrDab: 0,
        moveGunIncorrElbowKick: 0,
        moveGunIncorrHair: 0,
        moveGunIncorrListen: 0,
        moveGunIncorrPointHigh: 0,
        moveGunIncorrSidepump: 0,
        moveGunIncorrWipeTable: 0,
        totalSidepump: 0,
        moveSidepumpCorrSidepump: 0,
        moveSidempumpIncorrElbowKick: 0,
        moveSidepumpIncorrDab: 0,
        moveSidepumpIncorrGun: 0,
        moveSidepumpIncorrHair: 0,
        moveSidepumpIncorrListen: 0,
        moveSidepumpIncorrPointHigh: 0,
        moveSidepumpIncorrWipeTable: 0,
        totalPointHigh: 0,
        movePointHighCorrPointHigh: 0,
        movePointHighIncorrDab: 0,
        movePointHighIncorrElbowKick: 0,
        movePointHighIncorrGun: 0,
        movePointHighIncorrHair: 0,
        movePointHighIncorrSidepump: 0,
        movePointHighIncorrListen: 0,
        movePointHighIncorrWipeTable: 0,
        totalWipeTable: 0,
        moveWipeTableCorrWipeTable: 0,
        moveWipeTableIncorrDab: 0,
        moveWipeTableIncorrElbowKick: 0,
        moveWipeTableIncorrGun: 0,
        moveWipeTableIncorrHair: 0,
        moveWipeTableIncorrListen: 0,
        moveWipeTableIncorrPointHigh: 0,
        moveWipeTableIncorrSidepump: 0
    }
    render() {
        return (
                <MovesDiv>
                    <MoveMainDiv>
                        {/* <ScoreDiv>
                            <H4> Total Score: {this.state.totalCorrectMoves} / {this.state.totalMoves} </H4>
                            <H4> {respectiveScore} </H4>
                        </ScoreDiv> */}
                        <ChartDiv>
                            <DropdownDiv>
                                <Select width={120} height={40} onChange={this.onDropdownChange} >
                                    <option value={1}> Dab </option>
                                    <option value={2}> Elbow Kick </option>
                                    <option value={3}> Gun </option>
                                    <option value={4}> Hair </option>
                                    <option value={5}> Listen </option>
                                    <option value={6}> Point High </option>
                                    <option value={7}> Side Pump </option>
                                    <option value={8}> Wipe Table </option>
                                </Select>
                            </DropdownDiv>
                            {/* {chart} */}
                        </ChartDiv>
                    </MoveMainDiv>
            </MovesDiv>
        )
    }
}

export default MovesStatsController
