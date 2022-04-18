import styled from "styled-components"

export const MainDiv = styled.div`
    display:flex;
    background-color: grey;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    width: 100%;
    @media screen and (max-width:768px) {
        justify-content: center;
    }
  
`
export const TextDiv = styled.div`
    display:flex;
    width: 100%;
    font-size: 2rem;
    padding: 140px 0;
    h1{
        margin-left: 10%;
    }
    @media screen and (max-width:768px) {
        font-size: 80%;
        justify-content: center;
        h1{
            margin:0;
        }
    }
`
export const SearchContainer = styled.div`
    display:flex;
    width: 50%;
    background-color: pink;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const SearchInput = styled.input`
    margin: 0;
    padding: 1rem;
    width: 70%;
    border: 0;
    font-size: 2rem;
    

`
export const SearchButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    width: 30%;
    font-size: 2rem;
`

