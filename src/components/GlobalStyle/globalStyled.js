import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing: border-box;
        height: 100vh;
    }
    #root{
        display:flex;
        flex-direction: column;
        height: 100%;
    }
`;

export default GlobalStyle;