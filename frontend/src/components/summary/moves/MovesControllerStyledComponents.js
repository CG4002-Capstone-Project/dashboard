import styled from 'styled-components';

export const MovesDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;



export const MoveHeadlineDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid red; */
    text-align: center;
`;

export const MoveMainDiv = styled.div`
    flex: 9;
    display: flex;
    flex-direction: row;    
    box-sizing: border-box;
    border: 1px solid black;
`;

export const ScoreDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid red;
    text-align: center;
    margin: auto;
`;

export const DropdownDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid blue;
    text-align: center;
    margin: auto;
`;

export const ChartDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid green;
    text-align: center;
    margin: auto;
`;

export const H3 = styled.h3`
    margin-top: 12px ;
`;
