import styled from 'styled-components';

export const PreDashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
    '. . .'
    '. question .'
    '. . .';
    grid-gap: 1rem;
    grid-template-rows: 62px 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: black;
    margin: auto;
    width: 100vw;
    height: 100vh;
`;

export const QuestionDiv = styled.div`
    grid-area: question;
    /* background-color: #ffece2; */
    text-align: center;
    margin: auto;
`;

export const WhiteH1 = styled.h1`
    color: white;
`