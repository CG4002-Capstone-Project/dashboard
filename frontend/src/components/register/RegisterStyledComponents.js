import styled from 'styled-components';

export const RegisterDiv = styled.div`
    position: relative;
    margin: auto;
    width: 100vw;
    height: 100vh;
    border: 5px black solid;
    display: grid;
    grid-template-areas: 
        'header header header'
        'info info info'
        'input input input'
        'input input input';
    grid-gap: 1rem;
`;   
export const HeaderTabDiv = styled.div`
    grid-area: header;
    border: 5px red solid;

`
export const InfoTabDiv = styled.div`
    grid-area: info;
    border: 5px green solid;

`
export const VerticalTabDiv = styled.div`
    grid-area: input;
    border: 5px blue solid;

`