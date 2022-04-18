import styled from "styled-components"

export const ImageCenteringDiv = styled.div`
    display:grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-column-gap: 0px;
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
    
`

export const ImageText = styled.h1`
    display:flex;
    background-color: #c4c4c4;

    margin: 0;
    font-size: 1rem;
`
export const TestDiv = styled.div`
    height: 200px;

    background-color: #e5e5e5;
    width: 100%;
   
`
export const BottomText = styled.p`

    font-size: 1rem;
    background-color: #c4c4c4;
    margin: 0;
`

export const FlexWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex: 1 1 auto;
`