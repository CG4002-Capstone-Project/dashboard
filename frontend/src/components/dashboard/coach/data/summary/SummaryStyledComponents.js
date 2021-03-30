import styled from 'styled-components';

export const SummaryDiv = styled.div`
    box-sizing: border-box;
    border: 2px solid lightblue;
    width: 100%;
    height: 32%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
`;

export const StatusDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    text-align: center;
    box-sizing: border-box;
    margin: auto;
    background-color: ${props => props.inputColor || ""};
`;

export const CorrectPositionDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    text-align: center;
    box-sizing: border-box;
    margin: auto;
    background-color: ${props => props.inputColor || ""};
`;

export const SyncDelayMoveAccuracyDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    text-align: center;
    box-sizing: border-box;
    margin: auto;
`;

export const DanceMovePlayerDiv = styled.div`
    flex: 1;
    text-align: center;
    background-color: black;
    box-sizing: border-box;
    /* max-height: 200px; */
`;

export const EMGDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    box-sizing: border-box;
    margin: auto;
`; 

export const HistoryDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    text-align: center;
    box-sizing: border-box;
    margin: auto;
`;

export const GreenH4 = styled.h4`
    color: green;
`;

export const RedH4 = styled.h4`
    color: red;
`;




