import styled from 'styled-components';

export const PostDashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
    '. . .'
    '. results .'
    '. . .';
    grid-gap: 1rem;
    grid-template-rows: 0.25fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #FFFFF2;
    margin: auto;
    width: 100vw;
    height: 100vh;
`;

export const PostResultsDiv = styled.div`
    grid-area: results;
    background-color: #ffece2;
`;