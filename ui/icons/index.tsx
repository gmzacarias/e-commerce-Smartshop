import styled from "styled-components"
import UserSvg from "./user.svg"
import SmartPhoneSvg from "./smartphone.svg"
import CartSvg from "./cart.svg"
import SearchSvg from "./search.svg"
import LoginSvg from "./login.svg"
import LogoutSvg from "./logout.svg"
import TrashSvg from "./trash.svg"
import BrandSvg from "./brand.svg"
import GithubSvg from "./github.svg"
import LinkedinSvg from "./linkedin.svg"
import GmailSvg from "./gmail.svg"


import { FaBars, FaTimes, } from "react-icons/fa";

const User = styled(UserSvg)`
     font-size:24px;
`;

const Login = styled(LoginSvg)`
     font-size:24px;
`;

const Logout = styled(LogoutSvg)`
     font-size:24px;    
     padding   :0 ;
`;




const Hamburguer = styled(FaBars)`
    font-size: 24px;
`;

const CloseHamburguer = styled(FaTimes)`
  font-size:24px;
`;

const SmartPhone = styled(SmartPhoneSvg)`
     font-size:24px;
`;
const Cart = styled(CartSvg)`
     font-size:28px;
      display:flex;
position:relative;
`;

const CartContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:30px;
    height:30px;
position:relative;
`
const CartText = styled.p`
    font-size: 12px;
    font-weight: bold;
    color:#dee3e8e1;
    /* position:absolute;
    z-index: 2;
top:-6px;
left:20px; */
`
const CountContainer = styled.div`
    background-color:#137be4;
    width:20px;
    height:20px;
    border-radius: 50%;
    position:absolute;
    z-index: 1;
    top:-8px;
    left:16px;
    display:flex;
    justify-content: center;
    align-items: center;
 `


export const Search = styled(SearchSvg)`
     font-size:24px;
`

const Trash = styled(TrashSvg)`
fill: var(--red);
`

const BrandHeader = styled(BrandSvg)`
fill: #000;
`

const BrandFooter = styled(BrandSvg)`
fill:#EAEAEA;
margin-left: 20px;

@media(min-width: 769px){
    margin:none;
}
`

const Github = styled(GithubSvg)`
   width: 20px;
   height: 20px;
   fill: #faf5f5;
   display: flex;
`



const Linkedin = styled(LinkedinSvg)`
    width: 20px;
   height: 20px;
   fill: #faf5f5;
   display: flex;
`
const Gmail=styled(GmailSvg)`
 width: 20px;
   height: 20px;
 display: flex;
 fill: #faf5f5;   
`

export function BrandHeaderIcon() {
    return <BrandHeader />
}


export function BrandFooterIcon() {
    return <BrandFooter />
}


export function SmartPhoneIcon() {
    return <SmartPhone />
}

export function CartIcon({ state }) {
    if (state > 0) {
        return (
            <CartContainer >
                <CountContainer>
                    <CartText>{state}</CartText>
                </CountContainer>
                <Cart />
            </CartContainer>
        )
    } else {
        return (
            <CartContainer >
                <Cart />
            </CartContainer>
        )
    }
}

export function UserIcon() {
    return <User />
}

export function LoginIcon() {
    return <Login />
}

export function LogoutIcon() {
    return <Logout />
}

export function HamburguerIcon() {
    return <Hamburguer />
}

export function CloseHamburguerIcon() {
    return <CloseHamburguer />
}

export function TrashIcon() {
    return <Trash />
}



export function GithubIcon() {
    return <Github />
}

export function LinkedinIcon() {
    return <Linkedin />
}

export function GmailIcon() {
    return <Gmail />
}