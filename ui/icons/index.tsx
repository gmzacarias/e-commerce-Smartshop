import styled from "styled-components"
import UserSvg from "./user.svg"
import SmartPhoneSvg from "./smartphone.svg"
import CartSvg from "./cart.svg"
import SearchSvg from "./search.svg"
import LoginSvg from "./login.svg"
import LogoutSvg from "./logout.svg"
import TrashSvg from "./trash.svg"
import BrandSvg from "./brand.svg"
import { FaBars, FaTimes, } from "react-icons/fa";

const User = styled(UserSvg)`
     font-size:24px;
`;

const Login = styled(LoginSvg)`
     font-size:24px;
`;

const Logout = styled(LogoutSvg)`
     font-size:24px;       
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
    position:absolute;
    z-index: 2;
color:#dee3e8e1;
top:-6px;
left:20px;
`
const CountContainer = styled.div`
    background-color:#137be4;
    width:18px;
    height:18px;
    border-radius: 50%;
    position:absolute;
    z-index: 1;
    top:-8px;
    left:16px;
 `


export const Search = styled(SearchSvg)`
     font-size:24px;
`

const Trash = styled(TrashSvg)`
fill: var(--red);
`

const Brand = styled(BrandSvg)`
color: var(--red);
`

export function BrandIcon() {
    return <Brand />
}

export function SmartPhoneIcon() {
    return <SmartPhone />
}

export function CartIcon({ state }) {
    return (
        <CartContainer >
            <CartText>{state}</CartText>
            <CountContainer>
            </CountContainer>
            <Cart />
        </CartContainer>
    )
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

