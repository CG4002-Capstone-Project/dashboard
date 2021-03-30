import styled from 'styled-components';

// how to use grid with styled components: https://stackoverflow.com/questions/56900826/how-do-i-use-grid-template-areas-in-styled-components-with-react

export const RegisterDiv = styled.div`
    display: grid;
    grid-template-areas: 
        'nav nav nav'
        '. header .'
        '. input .';    
    grid-gap: 1rem;
    grid-template-rows: 62px 0.5fr 1.5fr 0.25fr;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: #FFFFF2;
    margin: auto;
    width: 100vw;
    height: 100vh;
    /* border: 5px black solid; */
    
`;   

export const NavBarDiv = styled.div`
    grid-area: nav;
    /* border: 5px red solid; */
    box-sizing: border-box;
`;

export const HeaderTabDiv = styled.div`
    grid-area: header;
    /* border: 5px red solid; */
    text-align: center;
    background-color: #FBF7F5;
    box-shadow: 1em;
`

export const HeaderH1 = styled.h1`
    font-size: 3em;
    /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; */
`;

export const InfoP = styled.p`
    text-align: center;
    font-size: 1.25rem;
`
export const VerticalTabDiv = styled.div`
    grid-area: input;
    /* border: 5px blue solid; */
    text-align: center;
    background-color: #ffece2
`