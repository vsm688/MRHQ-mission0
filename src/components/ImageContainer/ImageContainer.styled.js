import styled from "styled-components"

export const ImageCenteringDiv = styled.div`
    display:grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 10px;
    grid-column-gap: 40px;
    width: 80%;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    justify-content: center;
`


export const ImageContentContainer = styled.div`
    display:flex;
    flex-direction: column;  
    margin: 0 10px;
    border: 1px solid grey;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #FFFFFF;
   
    
    
`

export const ImageText = styled.h1`
    display:flex;
    background-color: #f4f4fc;
    color:#1278a5;
    font: 400 forma-djr-micro,Arial,sans-serif;
    justify-content: center;
    margin: 0;
    font-size: 2rem;
`
export const TestDiv = styled.img`
    height: 200px;

    width: 100%;
   
`
export const BottomText = styled.p`
    background-color: #f4f4fc;
    font-size: 2rem;
    color:black;
    font: 400 forma-djr-micro,Arial,sans-serif;
    margin: 0;
    display:flex;
    justify-content: center;
    padding-bottom: 20px;
`

export const FlexWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex: 1 1 auto;
    padding-bottom: 50px;
    background-color: #323d4c;
`