import styled from "styled-components";


export const StyledHeader = styled.header`
    width: 100%;
    display:flex;
    justify-content: space-between;
`

export const LogoDiv = styled.div`
    display:flex;
    width:auto;
    align-items: center;
    margin-left: 30px;
`;

export const MenuDiv = styled.nav`
    display:flex;
    width: auto;
    margin-right: 30px;
    ul {
        display:flex;
        list-style: none;
        align-items: center;
    }
    li{
        margin: 0 10px;
    }

`
export const LoginButton = styled.button`
    display:flex;
    border: 1px solid black;
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: white;

`