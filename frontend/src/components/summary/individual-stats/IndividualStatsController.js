import React, { Component } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import IndividualStats from './IndividualStats';

export class IndividualStatsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA SUMMARY INDIVIDUAL STATS 1');

        try {
            console.log('POST DATA SUMMARY INDIVIDUAL STATS 2');
            // const positionsSummary = await getPositionsSummary();
            console.log('POST DATA SUMMARY INDIVIDUAL STATS 3');
            await this.setState(prevState => ({
                ...prevState,
                
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('POST DATA SUMMARY INDIVIDUAL STATS error', error);
            throw new Error(error);
        }
    }

    state = {
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
