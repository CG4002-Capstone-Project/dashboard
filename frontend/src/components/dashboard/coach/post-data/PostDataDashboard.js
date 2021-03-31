import React, { Component } from 'react';
import { PostDashboardDiv, MovesDiv, DataDiv, PositionsDiv } from './PostDataStyledComponents';
import IndividualController from './individual/IndividualController';
import MovesController from './moves/MovesController';
import PositionsController from './positions/PositionsController';

export class PostDataDashboard extends Component {

    render() {
        console.log('Post Dashboard');
        return (
            <React.Fragment>
                <PostDashboardDiv>
                    <DataDiv>
                        <IndividualController/>
                    </DataDiv>

                    <MovesDiv>
                        <MovesController />
                    </MovesDiv>

                    <PositionsDiv>
                        <PositionsController />
                    </PositionsDiv>
                </PostDashboardDiv>

            </React.Fragment>
        )
    }
}

export default PostDataDashboard
