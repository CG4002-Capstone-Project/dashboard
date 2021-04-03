import styled from 'styled-components';

// how to mae video in background: https://jsfiddle.net/tkloht/y61s3vqk/3/
// additional: https://css-tricks.com/full-page-background-video-styles/


export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 2px solid black; */

`;

export const CoverVideoDiv = styled.div`
    box-sizing: border-box;
    height: calc(100vh - 56px);
    /* border: 5px solid red; */
`;

export const VideoBg = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
`;

export const VideoContent = styled.div`
    box-sizing: border-box;
    /* border: 2px solid yellow; */
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
`;

export const HeadlineDiv = styled.div`
    position: relative;
    top: 20%;
    left: 5%;
    box-sizing: border-box;
    /* border: 2px solid red; */
    width: fit-content;
    /* filter: blur(4px); */
    backdrop-filter: blur(4px);
    // https://css-tricks.com/almanac/properties/b/backdrop-filter/
`;

export const ContentH1 = styled.h1`
    color: 	#cdcdb4;
`;

export const SpanDanceEdge = styled.span`
    color: 	#8b0000;
`;

export const ContentH2 = styled.h2`
    color: #cdcdb4;
`;

export const YellowContentH2 = styled.h2`
    color: #cdcdb4;
`;


export const ContentH4 = styled.h4`
    color: #cdcdb4;
`;

export const ContentDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid purple; */
    height: 100vh;
`;

