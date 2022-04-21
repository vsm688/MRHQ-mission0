import styled from "styled-components"

export const MainDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    background: url("/images/company/parts.jpg");
    width: 100%;
    @media screen and (max-width:768px) {
        justify-content: center;
    }
   
  
`
export const TextDiv = styled.div`
    display:flex;
    width: 50%;
    font-size: 2rem;
    padding: 140px 0;
    color:white;
   
    h1{
        margin-left: 10%;
    }
    @media screen and (max-width:768px) {
        font-size: 80%;
        justify-content: center;
       
    
    }
    
`
export const SearchContainer = styled.div`
    display:flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
   
 

`

export const InputCenter = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    @media screen and (max-width:768px){
        width: 90%;
    }
`

export const SearchInput = styled.input`
    margin: 0;
    padding: 1rem;
    width: 30%;
    border: 0;
    font-size: 2rem;
    border: 2px solid black;
    border-right: none;
    @media screen and (max-width:768px){
        width: 100%;
    }
  
    

`
export const SearchButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: 2px solid black;
    padding: 0 20px;
    font-weight: 500;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width:768px){
  
        width: 30%;
        padding: 0 50px;
    }
   
`
export const CompanyImg = styled.img`
    z-index: 3;
 `
