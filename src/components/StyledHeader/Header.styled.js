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
    img{
        width: 200px;
        height: auto;
        margin:0;
        padding:0;
    }
    @media screen and (max-width: 1000px){
        h2{
            display:none;
        }
    }
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
        font-size: 2rem;

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
    width: 7rem;
    height: 3rem;

`

export const HamBurger = styled.button`
    display:none;
    @media screen and (max-width:768px) {
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.5rem;
        height: 1.5rem;
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
            border-radius: 5px;
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

export const DropDown = styled.div`
    display:flex;
    justify-content: flex-start ;
    height: auto;
    ${({drop}) => drop ? "height: auto; " : "height: 0; display:none;"}
    ul{
        display:flex;
        flex-direction: column ;
        justify-content: flex-start ;
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
        height: 200px;
        li{
            display:flex;
            width: 100%;
            border-top:1px solid black;
            justify-content: center ;
            flex-basis: 33.3%;
            align-items: center ;
            font-size: 2rem;
        }
    }
`
