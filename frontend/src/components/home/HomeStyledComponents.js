import styled from 'styled-components';

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 2px solid black; */

`;

export const CoverVideoDiv = styled.div`
    box-sizing: border-box;
    /* padding-top: 56px; */
    display: flex;
    height: calc(100vh - 56px);
    /* border: 5px solid red; */

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%);
        z-index: 2;
    }
`;

export const VideoBg = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const ContentDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid purple; */
    height: 100vh;
`;

