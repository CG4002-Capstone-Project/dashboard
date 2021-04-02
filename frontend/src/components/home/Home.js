import React, { Component } from 'react';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import {
    HomeDiv,
    CoverVideoDiv,
    ContentDiv
} from './HomeStyledComponents';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginAndRegisterNavBar />
                <HomeDiv>
                    <CoverVideoDiv>

                    </CoverVideoDiv>
                    <ContentDiv>

                    </ContentDiv>
                </HomeDiv>
            </React.Fragment>
        )
    }
}

export default Home
