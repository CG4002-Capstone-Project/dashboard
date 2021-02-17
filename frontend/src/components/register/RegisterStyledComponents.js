import styled from 'styled-components';

// how to use grid with styled components: https://stackoverflow.com/questions/56900826/how-do-i-use-grid-template-areas-in-styled-components-with-react

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
        'input input input';
    grid-gap: 1rem;
    grid-template-rows: 0.25fr 0.5fr 2fr;
    grid-template-columns: 1fr 3fr 1fr;
    box-sizing: border-box;
    
`;   
export const HeaderTabDiv = styled.div`
    grid-area: header;
    border: 5px red solid;
    text-align: center;
    background-color: #f4f4f4;

`
export const InfoTabDiv = styled.div`
    grid-area: info;
    border: 5px green solid;
    background-color: #f5f5f5;


`
export const VerticalTabDiv = styled.div`
    grid-area: input;
    border: 5px blue solid;
    background-color: lightsteelblue;
    text-align: center;
`