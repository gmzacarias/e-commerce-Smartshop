
import router, { useRouter } from "next/router"
import styled from "styled-components"
import { useMe } from "lib/hooks"
import { logoutToast } from "@/lib/sonner"
import { UserIcon, CartIcon, SmartPhoneIcon } from "ui/icons"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { FaBattleNet, FaBars, FaTimes, } from "react-icons/fa";
import { IconContext } from "react-icons";
import { LogoutButton, LoginButton } from "@/ui/buttons"
import { SearchInputNav } from "@/ui/inputs"
import { deleteToken } from "@/lib/api"
import { Paragraph } from "@/ui/typography"
import { useSetUserData, useSetCart, useAppData, useSetProductsData } from "lib/atoms"



export const NavBackground = styled.div`
  background-color: var(--light);
  border-bottom:solid 1px var(--grey);
  width: 100%;
  height: fit-content;
  padding:10px 20px;
  margin-bottom: 10px;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: var(--grey-dark);
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color:var(--orange);
    }
  }

  svg {
    fill:var(--orange);
    margin-right: 0.5rem;
  }

  .link-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5px 10px;
    color: var(--grey-dark);
    font-size:16px;
    text-decoration: none;
    transition: transform 250ms;
    cursor: pointer;

  }
`;

export const Menu = styled.ul<{ open: any }>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media(max-width: 1000px) {
    background-color: var(--light);
    border-bottom:solid 1px var(--grey);
    position: absolute;
    top: 58px;
    left:  ${({ open }) => (open ? "0" : "-100%")};
    padding:10px 0 ;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    transition: 0.5s all ease-in-out;
  }
  
`;

export const MenuItem = styled.li`
  height: 100%;

  @media(max-width: 1000px) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchNavContainer = styled.div`
  display: flex;
  align-items: center;
  
@media screen and (max-width:1000px){
  margin-left: 25px;
}


`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const MenuItemLink = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  

  @media(max-width: 1000px) {
    &{
      margin-left:15px;
      justify-content: left;
    }
      svg {
        display: flex;
      }
    
  }

  
  .links{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5px 10px;
    color: var(--grey-dark);
    font-size:16px;
    text-decoration: none;
    transition: transform 250ms;
    cursor: pointer;

  }

  .links:hover {
    color: var(--blue);
   font-weight: 400;
   transform: translateY(-2px);
  }

`;

export const MobileIcon = styled.div`
  display: none;

  @media(max-width: 1000px) {
    display: flex;
    font-size: 24px;
    align-items: center;
    cursor: pointer;

    svg {
      fill:var(--grey-dark);
      margin-right: 0.5rem;
    }

    svg:hover{
      fill:var(--blue);
    }
  }
`;

export function NavBar() {
  const setUserData = useSetUserData()
  const setCart = useSetCart()
  const setProductCart = useSetProductsData()
  const [data, setData] = useAppData()

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isLogged } = data
  // console.log("login", isLogged)
  const myData = useMe()
  const email = myData?.email
  const upperEmail = email ? email.toUpperCase() : null;


  function setShowMenu() {
    setShowMobileMenu(!showMobileMenu)
  }


  function handleLogin() {
    router.push("/login")
  }

  function handleLogOut() {
    deleteToken()

    setData({
      ...data,
      isLogged: false,
      email: "",
    })
    setUserData((prevData) => ({
      ...prevData,
      email: "",
      userName: "",
      address: "",
      phoneNumber: 0,
    }))

    setProductCart((prevData) => ({
      ...prevData,
      id: "",
      photo: "",
      model: "",
      brand: "",
      colour: "",
      price: "",
      quantity: 0,
    }))

    setCart([])
    logoutToast()
  }

  return (
    <NavBackground>
      <NavContainer>
        <LogoContainer>
          <Link href={"/"} className="link-logo">
            <FaBattleNet />
            <p>Vector -</p>
            <p>F(X)</p>
          </Link>
        </LogoContainer>
        <MobileIcon onClick={setShowMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={setShowMenu}>
              <Link href={isLogged ? "/cart" : "/login"} className="links">
                <CartIcon />
                <Paragraph>CARRITO</Paragraph>
              </Link>

            </MenuItemLink>
          </MenuItem>
          {isLogged ?
            (
              <>
                <MenuItem>
                  <MenuItemLink onClick={setShowMenu}>
                    <Link href={isLogged ? "/me" : "/login"} className="links">
                      <UserIcon />
                      {upperEmail}
                    </Link>
                  </MenuItemLink>
                </MenuItem>
                <ButtonsContainer>
                  <LogoutButton onClick={handleLogOut}>
                    <Paragraph>CERRAR SESION</Paragraph>
                  </LogoutButton>
                </ButtonsContainer>
              </>
            ) : (
              <>
                <MenuItem>
                  <MenuItemLink onClick={setShowMenu}>
                    <Link href={isLogged ? "/me" : "/login"} className="links">
                      <UserIcon />
                      MI PERFIL
                    </Link>
                  </MenuItemLink>
                </MenuItem>
                <ButtonsContainer>
                  <LoginButton onClick={handleLogin}>
                    <Paragraph>INGRESAR</Paragraph>
                  </LoginButton>
                </ButtonsContainer>
              </>
            )
          }
        </Menu>
      </NavContainer>
    </NavBackground>
  )
}