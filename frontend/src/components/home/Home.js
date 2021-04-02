import React, { Component } from 'react';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import {
    HomeDiv,
    CoverVideoDiv,
    ContentDiv,
    VideoBg,
    VideoContent
} from './HomeStyledComponents';
import video from './Cover-Video.mp4';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginAndRegisterNavBar />
                <HomeDiv>
                    <CoverVideoDiv>
                        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                        <VideoContent>
                        <h1> Hello </h1>
                        </VideoContent>
                    </CoverVideoDiv>
   
                    <ContentDiv>

                    </ContentDiv>
                </HomeDiv>
            </React.Fragment>
        )
    }
}

export default Home
