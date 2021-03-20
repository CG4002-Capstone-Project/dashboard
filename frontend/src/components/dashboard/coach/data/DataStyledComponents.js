import styled from 'styled-components';

export const CoverDiv = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 2px solid pink;
`;

export const DashboardDiv = styled.div`
    box-sizing: border-box;
    border: 3px solid lightgoldenrodyellow;
    width: 100%;
    height: 68%;
    /* max-width: 100%;
    max-height: 70%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: #FFFFF2;
`;

export const SummaryDiv = styled.div`
    box-sizing: border-box;
    border: 2px solid lightblue;
    width: 100%;
    height: 32%;
    /* max-width: 100%;
    max-height: 30%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
`;
