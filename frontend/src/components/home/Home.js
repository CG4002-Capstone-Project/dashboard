import React, { Component } from 'react';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import {
    HomeDiv,
    CoverVideoDiv,
    ContentDiv,
    VideoBg,
    VideoContent,
    HeadlineDiv,
    ContentH1,
    ContentH2,
    ContentH4,
    YellowContentH2,
    SpanDanceEdge
} from './HomeStyledComponents';
import video from './Cover-Video-2.mp4';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginAndRegisterNavBar />
                <HomeDiv>
                    <CoverVideoDiv>
                        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                        <VideoContent>
                            <HeadlineDiv>
                                <ContentH1> Tired of Dancing Alone?  </ContentH1>
                                <br />
                                <ContentH1> Dying to Dance in a Group?  </ContentH1>
                                <br/>
                                <br/>
                                <YellowContentH2> Don't Worry, <SpanDanceEdge> DanceEdge </SpanDanceEdge>, has got you covered </YellowContentH2>
                                <ContentH4> Check out our world-leading technology below </ContentH4>
                            </HeadlineDiv>
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
