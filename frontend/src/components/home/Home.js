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
    SpanDanceEdge,
    NormalSpan,
    ContentMainDiv,
    ParaMainDiv,
    DemoMainDiv,
    DemoBg
} from './HomeStyledComponents';
import video from './Cover-Video-2.mp4';
import demo from './demo.MOV';
import { IconButton, ArrowRightIcon } from 'evergreen-ui';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('HOME Page Begin', arguments)
        })

        Events.scrollEvent.register('end', (to, element) => {
            console.log('HOME Page End', arguments)
        })
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    scrollTo = () => {
        scroll.scrollTo(100);
    }

    scrollMore = () => {
        scroll.scrollMore(100);
    }

    handleSetActive = (to) => {
        console.log(to);
    } 

    state = {
        onScrollDownButtonHover: false,
    }

    onScrollButtonClicked = event => {
        event.preventDefault();
        console.log('here');
        // not neccessary but just archiving it 
        // scroller.scrollTo('main-content', {
        //     duration: 500,
        //     offset: 50,
        //     smooth: true
        // })
    }

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
                                <ContentH4> 
                                        Check out our world-leading technology below
                                        <NormalSpan>
                                            <Link 
                                            activeClass="active"
                                            to="main-content"
                                            spy={true}
                                            offset={0}
                                            duration={500}
                                            smooth={true}
                                            onSetActive={this.handleSetActive}
                                            >
                                                <IconButton 
                                                appearance='primary'
                                                intent='success'
                                                icon={ArrowRightIcon}
                                                onClick={this.onScrollButtonClicked}
                                                // style={{ float: 'right'}}
                                                />    
                                            
                                            </Link>
                                        </NormalSpan>
                                </ContentH4> 
                            </HeadlineDiv>
                        </VideoContent>
                    </CoverVideoDiv>

                    <Element name="main-content">
                        <ContentDiv>
                            <ContentMainDiv>
                                <ParaMainDiv>
                                    <p> Macha </p>
                                </ParaMainDiv>
                                <DemoMainDiv>
                                    <DemoBg autoPlay loop muted src={demo} type='video/MOV' />
                                </DemoMainDiv>
                            </ContentMainDiv>
                        </ContentDiv>
                    </Element>
                    
                </HomeDiv>
            </React.Fragment>
        )
    }
}

export default Home
