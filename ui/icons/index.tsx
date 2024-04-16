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

const CloseHamburguer=styled(FaTimes)`
  font-size:24px;
`;

const SmartPhone = styled(SmartPhoneSvg)`
     font-size:24px;
`;
const Cart = styled(CartSvg)`
     font-size:24px; 
`;

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

export function CartIcon() {
    return <Cart />
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

export function HamburguerIcon(){
    return <Hamburguer/>
}

export function CloseHamburguerIcon(){
    return <CloseHamburguer/>
}

export function TrashIcon() {
    return <Trash />
}

