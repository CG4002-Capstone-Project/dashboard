import React, { Component } from 'react';
import { PostDashboardDiv, PostResultsDiv } from './PostDataStyledComponents';
import { getResultsSummary } from '../../../../utils/Analytics';
import { UserContext } from '../../../../contexts/UserContext';

export class PostDataDashboard extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA 1');

        try {
            console.log('POST DATA 2');
            const resultsSummary = await getResultsSummary();
            console.log('POST DATA 3');
            await this.setState(prevState => ({
                totalCorrectMoves: resultsSummary.totalCorrectMoves,
                totalCorrectPositions: resultsSummary.totalCorrectPositions,
                totalNoMoves: resultsSummary.totalNoMoves
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
        totalNoMoves: 0
    };

    render() {
        console.log('POST DATA ', this.state);
        return (
            <PostDashboardDiv>
                <PostResultsDiv>
                    <h1> Results </h1>
                    {this.state.totalCorrectMoves}
                    {this.state.totalCorrectPositions}
                    {this.state.totalNoMoves}
                </PostResultsDiv>
            </PostDashboardDiv>
        )
    }
}

export default PostDataDashboard
