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
import SunSvg from "./sun.svg"
import MoonSvg from "./moon.svg"


import { FaBars, FaTimes, } from "react-icons/fa";

export const User = styled(UserSvg)`
     font-size:24px;
`;

export const Login = styled(LoginSvg)`
     font-size:24px;
`;

export const Logout = styled(LogoutSvg)`
     font-size:24px;    
     padding   :0 ;
`;




export const Hamburguer = styled(FaBars)`
    font-size: 24px;
`;

export const CloseHamburguer = styled(FaTimes)`
  font-size:24px;
`;

export const SmartPhone = styled(SmartPhoneSvg)`
     font-size:24px;
`;
export const Cart = styled(CartSvg)`
     font-size:28px;
      display:flex;
position:relative;
`;

export const CartContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:30px;
    height:30px;
position:relative;
`
export const CartText = styled.p`
    font-size: 12px;
    font-weight: bold;
    color:#dee3e8e1;
    /* position:absolute;
    z-index: 2;
top:-6px;
left:20px; */
`
export const CountContainer = styled.div`
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

export const Trash = styled(TrashSvg)`
fill: var(--red);
`

export const BrandHeader = styled(BrandSvg)`
fill: #000;
`

/*Header*/
export const Sun=styled(SunSvg)`
  font-size:24px;
`
export const Moon=styled(MoonSvg)`
  font-size:24px
`

/*Footer*/
export const BrandFooter = styled(BrandSvg)`
  fill:#EAEAEA;
  margin-left: 25px;

  @media (min-width: 769px){
      margin:none;
    }
`

export const Github = styled(GithubSvg)`
  fill: #ee7307;
  width: 20px;
  height: 20px;
`

export const Linkedin = styled(LinkedinSvg)`
  width: 20px;
  height: 20px;
`
export const Gmail=styled(GmailSvg)`  
  width: 20px;
  height: 20px;
`
