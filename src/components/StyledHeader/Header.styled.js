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
    align-items: center;
    margin-right: 30px;
    ul {
        display:flex;
        list-style: none;
        align-items: center;
    }
    li{
        margin: 0 10px;
    }
    @media screen and (max-width:768px) {
        ul{
            display:none;
        }
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

export const HamBurger = styled.button`
    display:none;
    @media screen and (max-width:768px) {
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        
        &:focus{
            outline: none;
        }
        div{
            width: 100%;
            height: 0.25rem;
            background: black;
            transition: all 0.3s linear;
            transform-origin: 1px; 
            :first-child{
               transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
            }
            :nth-child(2){
                opacity: ${({open}) => open ? "0" : "1"};
                transform: ${({ open }) => open ? "translateX(20px)" : "translate(0)"};
             
            }
            :last-child{
               transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
            }

        }
    }

   
`
