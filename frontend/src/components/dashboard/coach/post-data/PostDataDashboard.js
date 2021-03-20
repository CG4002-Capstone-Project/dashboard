import React, { Component } from 'react';
import { PostDashboardDiv, PostResultsDiv } from './PostDataStyledComponents';

export class PostDataDashboard extends Component {
    render() {
        return (
            <PostDashboardDiv>
                <PostResultsDiv>
                    <h1> Results </h1>
                </PostResultsDiv>
            </PostDashboardDiv>
        )
    }
}

export default PostDataDashboard
