import styled from 'styled-components';

export const LoginDiv = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
`;

export const NavBarDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    max-height: 62px;
    width: 100%;
`;

export const MainDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    display: flex;
    background-color: black;
    /* border: 2px solid red; */
`;

export const ContentDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin: 2% auto auto auto;
    /* border: 2px solid green; */
    height: 75%;
    max-width: 60%;
    background-color: #333;
    display: flex;
    flex-direction: row;
`;

export const LoginMainFormDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 2px solid yellow; */
    display: flex;
`;

export const LoginFormDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin: auto;
    /* border: 2px solid yellow; */
    text-align: center;
    align-content: center;
`;

export const IndividualField = styled.div`
    margin: 15px auto;
    box-sizing: border-box;
    text-align: center;
    /* border: 2px solid green; */
`

export const SideContentDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 2px solid red; */
    display: flex;
`;

export const LoginH2Div = styled.div`
    width: 50%;
    margin: auto;
    box-sizing: border-box;
    /* border: 2px solid pink; */
    text-align: center;
    position: relative;
    flex: 1;
`;

export const LoginH1 = styled.h1`
    color: white; 
`;