import styled from 'styled-components';

// how to account for navbar and landing page vh: https://stackoverflow.com/questions/45537828/need-a-fixed-navbar-and-landing-page-vh-that-incorporates-navbar-height

export const PreDashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
    '. . .'
    '. question .'
    '. . .';
    grid-gap: 1rem;
    grid-template-rows: 0.25fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #FFFFF2;
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

export const DashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
        '.'
        'individual'
        'summary';    
    grid-gap: 1rem;
    grid-template-rows: 62px 2fr 1fr;
    /* grid-template-columns: 1fr 3fr 1fr; */
    background-color: #FFFFF2;
    margin: auto;
    width: 100vw;
    height: 100vh;
`;

export const IndividualInputDiv = styled.div`
    grid-area: individual;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-around;
    /* border: 5px red solid; */
    /* text-align: center; */
    background-color: #ffece2;
`

export const SummaryDiv = styled.div`
    grid-area: summary;
    border-top: 5px lightgray solid;
    /* text-align: center; */
    background-color: #ffece2;
`;

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