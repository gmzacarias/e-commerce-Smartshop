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
import MotorolaSvg from "./motorola.svg"
import SamsungSvg from "./samsung.svg"
import XiaomiSvg from "./xiaomi.svg"


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

export const Motorola = styled(MotorolaSvg)`
  width:75px;
  height:75px;
  fill:var(--grey);
  
  path:nth-child(2){
    fill:${({ theme }) => theme.backgroundSecondary};
  }

  path:first-child:hover{
    fill:#33A1FD;
  }
`

export const Samsung = styled(SamsungSvg)`
  width: 200px;
  height: 50px;
  fill:var(--grey);
  
  :hover{
    fill:${({ theme }) => theme.mode === "dark" ? "#EAEAEA": "#1428a0"};
  }
`

export const Xiaomi = styled(XiaomiSvg)`
  width: 75px;
  height: 75px;
  fill:var(--grey);
  
  :hover{
   fill:#FF6900;
  }
  
  path:nth-child(2){
    fill:${({ theme }) => theme.backgroundSecondary};
  }
`;



/*Header*/
export const BrandHeader = styled(BrandSvg)`
  fill:${({ theme }) => theme.logoBg};
`

export const Sun = styled(SunSvg)`
 width: 32px;
  height: 32px;
  stroke: var(--grey);
  
`
export const Moon = styled(MoonSvg)`
  width: 32px;
  height: 32px;
  stroke: var(--grey);
  
 :hover{
  stroke: "#000";

 }

`

/*Footer*/
export const BrandFooter = styled(BrandSvg)`
  fill:${({ theme }) => theme.logoBg};
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
export const Gmail = styled(GmailSvg)`  
  width: 20px;
  height: 20px;
`

