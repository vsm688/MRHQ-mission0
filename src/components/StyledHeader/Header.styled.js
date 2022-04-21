import styled from "styled-components";


export const StyledHeader = styled.header`
    width: 100%;
    display:flex;
    background-color:  #323d4c;;
    justify-content: space-between;
 
    @media screen and (max-width: 1500px){
        margin:0;
    }
`

export const LogoDiv = styled.div`
    display:flex;
    width:auto;
    align-items: center;
    margin-left: 30px;
    padding: 30px;
    img{
        height: 100px;        
    }
    h2{
        margin:0;
        margin-left: 20px;
        font-size: 1.5rem;
        color:white;
        
    }
    @media screen and (max-width: 1050px){
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
        margin:0;
        padding:0;
     

    }
    li{
        margin: 0 10px;
        font-size: 2rem;
        color:white;
        :hover{
            opacity: 0.2;
            cursor: pointer;
        }

    }
    @media screen and (max-width:1050px) {
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
    font-size: 2rem;
    margin-left: 20px;
    width: 9rem;
    height: 3rem;
    :hover{
            transform: scale(0.9);
            cursor: pointer;
    }
    

`

export const HamBurger = styled.button`
    display:none;
    @media screen and (max-width:1050px) {
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
            border-radius: 5px;
            background-color: white;
            :first-child{
               transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
            }
            :nth-child(2){
                opacity: ${({ open }) => open ? "0" : "1"};
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
    ${({ drop }) => drop ? "height: auto; " : "display:none;"}
    ul{
        display:flex;
        flex-direction: column ;
        justify-content: flex-start ;
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
        height: 200px;
        :last-child{
            border-bottom: 1px solid black;
        }
        @media screen and (min-width:1050px) {
            display:none;
        }

        li{
            display:flex;
            width: 100%;
            border-top:1px solid black;
            justify-content: center ;
            flex-basis: 33.3%;
            align-items: center ;
            font-size: 2rem;
            :hover{
                cursor: pointer;
            }
        }
    }
`
