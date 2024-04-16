import router from "next/router"
import Link from 'next/link'
import { useState } from "react"
import { deleteToken } from "@/lib/api"
import { useMe } from "lib/hooks"
import { useSetUserData, useReset, useAppData } from "lib/atoms"
import { logoutToast } from "@/lib/sonner"
import { NavBody, NavContainer, LogoContainer, HamburguerMenu, MenuContainer, ItemListMenu, LinkItemList, ButtonsContainer } from "./styles"
import { UserIcon, CartIcon, BrandIcon, CloseHamburguerIcon, HamburguerIcon } from "ui/icons"
import { Paragraph } from "@/ui/typography"
import { LoginButton, LogoutButton } from "@/ui/buttons"

export function NavBar() {
  const [data, setData] = useAppData()
  const setUserData = useSetUserData()
  const resetCart = useReset()
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

    resetCart()
    logoutToast()
  }

  return (
    <NavBody>
      <NavContainer>
        <LogoContainer>
          <Link href={"/"}>
            <BrandIcon />
          </Link>
        </LogoContainer>
        <HamburguerMenu onClick={setShowMenu}>
          {showMobileMenu ? <CloseHamburguerIcon /> : <HamburguerIcon />}
        </HamburguerMenu>
        <MenuContainer open={showMobileMenu}>
          <ItemListMenu>
            <LinkItemList onClick={setShowMenu}>
              <Link href={isLogged ? "/cart" : "/login"} className="links">
                <CartIcon />
                <Paragraph>CARRITO</Paragraph>
              </Link>
            </LinkItemList>
          </ItemListMenu>
          <ItemListMenu>
            <LinkItemList onClick={setShowMenu}>
              <Link href={isLogged ? "/me" : "/login"} className="links">
                <UserIcon />
                {isLogged ? upperEmail : <Paragraph>MI PERFIL</Paragraph>}
              </Link>
            </LinkItemList>
          </ItemListMenu>
          <ButtonsContainer>
            {isLogged ?
              <LogoutButton onClick={handleLogOut}>
                <Paragraph>SALIR</Paragraph>
              </LogoutButton>
              :
              <LoginButton onClick={handleLogin}>
                <Paragraph>INGRESAR</Paragraph>
              </LoginButton>
            }
          </ButtonsContainer>
        </MenuContainer>
      </NavContainer>
    </NavBody>
  )
}