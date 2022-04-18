import styled from "styled-components"

export const MainDiv = styled.div`
    display:flex;
    background-color: grey;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  
    width: 100%;
  
`
export const TextDiv = styled.div`
    width: 100%;
    padding: 140px 0;
    h1{
        margin-left: 10%;
    }
`
export const SearchContainer = styled.div`
    display:flex;
    width: 50%;
    height: 60px;
    background-color: pink;
    margin-top: 20px;
    margin-bottom: 20px;
    
`

export const SearchInput = styled.input`
    margin: 0;
    padding: 0;
    width: 70%;
    border: 0;
    

`
export const SearchButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    width: 30%;
`

