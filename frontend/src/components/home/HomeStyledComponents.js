import styled from 'styled-components';

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
    border: 2px solid yellow;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
`;

export const ContentDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid purple; */
    height: 100vh;
`;

