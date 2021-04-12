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
                t1Pos1: individualStats.t1Pos1,
                t1Pos1Corr1: individualStats.t1Pos1Corr1,
                t1Pos1Incorr2: individualStats.t1Pos1Incorr2,
                t1Pos1Incorr3: individualStats.t1Pos1Incorr3,
                t1Pos2: individualStats.t1Pos2,
                t1Pos2Corr2: individualStats.t1Pos2Corr2,
                t1Pos2Incorr1: individualStats.t1Pos2Incorr1,
                t1Pos2Incorr3: individualStats.t1Pos2Incorr3,
                t1Pos3: individualStats.t1Pos3,
                t1Pos3Corr3: individualStats.t1Pos3Corr3,
                t1Pos3Incorr1: individualStats.t1Pos3Incorr1,
                t1Pos3Incorr2: individualStats.t1Pos3Incorr2,
                t2Pos1: individualStats.t2Pos1,
                t2Pos1Corr1: individualStats.t2Pos1Corr1,
                t2Pos1Incorr2: individualStats.t2Pos1Incorr2,
                t2Pos1Incorr3: individualStats.t2Pos1Incorr3,
                t2Pos2: individualStats.t2Pos2,
                t2Pos2Corr2: individualStats.t2Pos2Corr2,
                t2Pos2Incorr1: individualStats.t2Pos2Incorr1,
                t2Pos2Incorr3: individualStats.t2Pos2Incorr3,
                t2Pos3: individualStats.t2Pos3,
                t2Pos3Corr3: individualStats.t2Pos3Corr3,
                t2Pos3Incorr1: individualStats.t2Pos3Incorr1,
                t2Pos3Incorr2: individualStats.t2Pos3Incorr2,
                t3Pos1: individualStats.t3Pos1,
                t3Pos1Corr1: individualStats.t3Pos1Corr1,
                t3Pos1Incorr2: individualStats.t3Pos1Incorr2,
                t3Pos1Incorr3: individualStats.t3Pos1Incorr3,
                t3Pos2: individualStats.t3Pos2,
                t3Pos2Corr2: individualStats.t3Pos2Corr2,
                t3Pos2Incorr1: individualStats.t3Pos2Incorr1,
                t3Pos2Incorr3: individualStats.t3Pos2Incorr3,
                t3Pos3: individualStats.t3Pos3,
                t3Pos3Corr3: individualStats.t3Pos3Corr3,
                t3Pos3Incorr1: individualStats.t3Pos3Incorr1,
                t3Pos3Incorr2: individualStats.t3Pos3Incorr2
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
        t3Pos3Incorr2: 0
    }

    render() {
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
