import React, { Component } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { getIndividualStats } from '../../../utils/Analytics';
import IndividualStats from './IndividualStats';

export class IndividualStatsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA SUMMARY INDIVIDUAL STATS 1');

        try {
            console.log('POST DATA SUMMARY INDIVIDUAL STATS 2');
            const individualStats = await getIndividualStats();
            console.log('POST DATA SUMMARY INDIVIDUAL STATS 3');
            await this.setState(prevState => ({
                ...prevState,
                ...individualStats,
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('POST DATA SUMMARY INDIVIDUAL STATS error', error);
            throw new Error(error);
        }
    }

    state = {
        t1Pos1: 0,
        t1Pos1Corr1: 0,
        t1Pos1Incorr2: 0,
        t1Pos1Incorr3: 0,
        t1Pos2: 0,
        t1Pos2Corr2: 0,
        t1Pos2Incorr1: 0,
        t1Pos2Incorr3: 0,
        t1Pos3: 0,
        t1Pos3Corr3: 0,
        t1Pos3Incorr1: 0,
        t1Pos3Incorr2: 0,
        t2Pos1: 0,
        t2Pos1Corr1: 0,
        t2Pos1Incorr2: 0,
        t2Pos1Incorr3: 0,
        t2Pos2: 0,
        t2Pos2Corr2: 0,
        t2Pos2Incorr1: 0,
        t2Pos2Incorr3: 0,
        t2Pos3: 0,
        t2Pos3Corr3: 0,
        t2Pos3Incorr1: 0,
        t2Pos3Incorr2: 0,
        t3Pos1: 0,
        t3Pos1Corr1: 0,
        t3Pos1Incorr2: 0,
        t3Pos1Incorr3: 0,
        t3Pos2: 0,
        t3Pos2Corr2: 0,
        t3Pos2Incorr1: 0,
        t3Pos2Incorr3: 0,
        t3Pos3: 0,
        t3Pos3Corr3: 0,
        t3Pos3Incorr1: 0,
        t3Pos3Incorr2: 0,
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
        console.log('Individual Stats Controller ', this.state);
        return (
            <React.Fragment>
                <IndividualStats /> 
                <IndividualStats />
                <IndividualStats />
            </React.Fragment>
        )
    }
}

export default IndividualStatsController
