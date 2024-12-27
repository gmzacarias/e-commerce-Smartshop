import styled from "styled-components"
import UserSvg from "./user.svg"
import SmartPhoneSvg from "./smartphone.svg"
import CartSvg from "./cart.svg"
import SearchSvg from "./search.svg"
import LoginSvg from "./login.svg"
import LogoutSvg from "./logout.svg"
import TrashSvg from "./trash.svg"
import BrandSvg from "./brand.svg"
import Logout2Svg from "./logoutnew.svg"
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

