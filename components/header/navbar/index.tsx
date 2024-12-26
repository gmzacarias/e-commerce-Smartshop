"use client"

import router from "next/router"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { deleteToken } from "@/lib/api"
import { useMe } from "lib/hooks"
import { useSetUserData, useReset, useAppData } from "lib/atoms"
import { logoutToast } from "@/lib/sonner"
import { NavBody, NavContainer, LogoContainer, HamburguerMenu, MenuContainer, ItemListMenu, LinkItemList, ButtonsContainer } from "./styles"
import { UserIcon, CartIcon, BrandIcon, CloseHamburguerIcon, HamburguerIcon } from "ui/icons"
import { Paragraph } from "@/ui/typography"
import { LoginButton, LogoutButton } from "@/ui/buttons"
import { useCartValue } from "lib/atoms"

export function NavBar() {
  const [data, setData] = useAppData()
  const setUserData = useSetUserData()
  const currentCart = useCartValue()
  console.log("data del carro", currentCart)
  const resetCart = useReset()
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isLogged } = data
  // console.log("login", isLogged)
  const myData = useMe()
  const email = myData?.email
  const upperEmail = email ? email.toUpperCase() : null;
  const [valueCart, SetValueCart] = useState("")
  const [textCart,SetTextCart]=useState("")
  console.log("actualizate", valueCart)

  useEffect(() => {
    if (currentCart) {
      const currentValue = currentCart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
      console.log("carrito", currentValue)
      if(currentValue > 10){
        SetValueCart("+10")
      }else{
        SetValueCart(currentValue.toString())
      }
      SetTextCart("Mi Compra")
    } else {
      SetValueCart("")
      SetTextCart("Mi carrito")
    }
  }, [currentCart])





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
                <CartIcon  state={valueCart}/>
    
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