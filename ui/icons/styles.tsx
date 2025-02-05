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
import HamburguerSvg from "./hamburguer.svg"
import CloseHamburguerSvg from "./closeHamburguer.svg"
import ListSvg from "./list.svg"

export const User = styled(UserSvg)`
  stroke: ${({ theme }) => theme.strokeBg};
  width:24px;
  height:24px;
    
  @media(min-width:769px){
    width:32px;
    height: 32px;
  }
`;







export const SmartPhone = styled(SmartPhoneSvg)`
     font-size:24px;
`;



export const Search = styled(SearchSvg)`
 stroke: ${({ theme }) => theme.strokeBg};
 width: 24px;
 height: 24px;
 position:absolute;
 top: 10px;
 right: 10px;
 cursor:pointer;

 @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
     `

export const Trash = styled(TrashSvg)`
fill: var(--red);
`

export const Motorola = styled(MotorolaSvg)`
  width:75px;
  height:75px;
  fill:#33a1fd;
  
  path:nth-child(2){
    fill:${({ theme }) => theme.backgroundSecondary};
  }
  
  @media(min-width:769px){
    fill:${({ theme }) => theme.mode === "dark" ? "#EAEAEA" : "var(--grey)"};
  
    path:first-child:hover{
      fill:#33A1FD;
   } 
  }
`

/*Purchase by brand*/
export const Samsung = styled(SamsungSvg)`
  width: 200px;
  height: 50px;
  fill:${({ theme }) => theme.mode === "dark" ? "#EAEAEA" : "#1033f5"};
  
  @media(min-width:769px){
    fill:${({ theme }) => theme.mode === "dark" ? "#EAEAEA" : "var(--grey)"};
    
    :hover{
      fill:#1033f5;
    }
  }
`

export const Xiaomi = styled(XiaomiSvg)`
  width: 75px;
  height: 75px;
  fill:#FF6900;
  
  path:nth-child(2){
    fill:${({ theme }) => theme.backgroundSecondary};
  }
  
  @media(min-width:769px){
    fill:${({ theme }) => theme.mode === "dark" ? "#EAEAEA" : "var(--grey)"};
  
    :hover{
      fill:#FF6900;
    }
  }
`

/*Header*/
export const BrandHeader = styled(BrandSvg)`
  
     width:156px;
     height:auto;

   
 fill:${({ theme }) => theme.logoBg};
`

export const Sun = styled(SunSvg)`
 stroke: ${({ theme }) => theme.strokeBg};
 width: 24px;
 height: 24px;

 @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
`

export const Moon = styled(MoonSvg)`
  stroke: ${({ theme }) => theme.strokeBg};
  width: 24px;
  height: 24px;

  @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
`

export const Hamburguer = styled(HamburguerSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width: 32px;
  height: 32px;
  `

export const CloseHamburguer = styled(CloseHamburguerSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width: 32px;
  height: 32px;
  
  @media(min-width){
    width: 24px;
    height: 24px;
  }
`

export const Login = styled(LoginSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width: 24px;
  height: 24px;
  
  @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
`

export const Logout = styled(LogoutSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width: 24px;
  height: 24px;
  
  @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
`

export const List = styled(ListSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width: 24px;
  height: 24px;
  
  @media(min-width:769px){
   width: 32px;
   height: 32px;
  }
`

export const CartContainer = styled.div`
  display:flex;
  flex-direction: column;
  
`

export const Cart = styled(CartSvg)`
  stroke: ${({ theme }) => theme.strokeBg}; 
  width:32px;
  height: 32px;
  display:flex;
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

/*Footer*/
export const BrandFooter = styled(BrandSvg)`
  width:156px;
  height:auto;
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

export const BrandPages=styled(BrandSvg)`
width:228px;
height:auto;
fill:${({ theme }) => theme.logoBg};
`