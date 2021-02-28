import styled from 'styled-components';

export const SummaryDiv = styled.div`
    display: grid;
    padding: 1em;
    grid-template-areas: 
    'status correctPosition three video emg emg history';
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
`;

export const StatusDiv = styled.div`
    border: 5px solid brown;
    grid-area: status;
`;

export const CorrectPositionDiv = styled.div`
    grid-area: correctPosition;
    border: 5px solid black;
    text-align: center;
`;

export const SyncDelayMoveAccuracyDiv = styled.div`
    grid-area: three;
    border: 5px solid green;
    text-align: center;
`;

export const DanceMovePlayerDiv = styled.div`
    grid-area: video;
    border: 5px solid blue;
    text-align: center;
    background-color: black;
`;

export const EMGDiv = styled.div`
    grid-area: emg;
    border: 5px solid pink;
`; 

export const HistoryDiv = styled.div`
    grid-area: history;
    border: 5px solid purple;
    text-align: center;
`;

export const GreenH4 = styled.h4`
    color: green;
`;

export const RedH4 = styled.h4`
    color: red;
`;




