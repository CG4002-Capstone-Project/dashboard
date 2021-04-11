import styled from 'styled-components';

export const SummaryDiv = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const NavbarDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    max-height: 56px;
    width: 100%;
`;

export const SummaryMainDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 3px solid lightgoldenrodyellow;
    width: 100%;
    height: 100%;
    /* max-width: 100%;
    max-height: 70%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: #FFFFF2;
    border: 1px solid black;
`;

export const DataDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

export const MovesDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
`;

export const PositionsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
`;