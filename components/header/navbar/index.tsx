import Link from 'next/link'
import { NavBody, NavContainer, LogoContainer, HamburguerMenu, MenuContainer, ItemListMenu, LinkItemList, ButtonsContainer, UserContainer, SessionContainer } from "./styles"
import { UserIcon, CartIcon, BrandHeaderIcon, CloseHamburguerIcon, HamburguerIcon } from "ui/icons"
import { Paragraph } from "@/ui/typography"
import { LoginButton, LogoutButton } from "@/ui/buttons"
import { useNavbar } from "@/utils/components/useNavbar"
import {ThemeToggle} from "utils/darkMode/button"

export function NavBar() {
  const { showMobileMenu, isLogged, valueCart, isMobile, setShowMenu, handleLogin, handleLogOut } = useNavbar()

  return (
    <NavBody>
      <NavContainer>
        <LogoContainer>
          <Link href={"/"}>
            <BrandHeaderIcon />
          </Link>
        </LogoContainer>

        {!isMobile && (
          <UserContainer>
            <Link href={isLogged ? "/cart" : "/login"} className="link">
              <CartIcon state={valueCart} />
            </Link>

            <SessionContainer>

              <Link href={isLogged ? "/me" : "/login"} className="link">
                <UserIcon />
                {isLogged ? <Paragraph>MI CUENTA</Paragraph> : <Paragraph>INGRESA O REGISTRATE</Paragraph>}
              </Link>
                <ButtonsContainer>
                 {isLogged? <LogoutButton onClick={handleLogOut}><Paragraph>SALIR</Paragraph></LogoutButton>: <></> } 
                </ButtonsContainer>
                <ThemeToggle/>
            </SessionContainer>
          </UserContainer>
        )}

        {isMobile && (
          <UserContainer>
            <Link href={isLogged ? "/cart" : "/login"} className="link">
              <CartIcon state={valueCart} />
            </Link>
            <HamburguerMenu onClick={setShowMenu}>
              {showMobileMenu ? <CloseHamburguerIcon /> : <HamburguerIcon />}
            </HamburguerMenu>
          </UserContainer>
        )}

        {isMobile && showMobileMenu && (
          <MenuContainer open={showMobileMenu}>
            <ItemListMenu>
              <LinkItemList onClick={setShowMenu}>
                <Link href={isLogged ? "/me" : "/login"} className="link">
                  <UserIcon />
                  <Paragraph>MI CUENTA</Paragraph>
                </Link>
              </LinkItemList>
            </ItemListMenu>
            <ItemListMenu>
              <LinkItemList onClick={setShowMenu}>
                <Link href={isLogged ? "/me/myorders" : "/login"} className="link">
                  <UserIcon />
                  <Paragraph>MIS ORDENES</Paragraph>
                </Link>
              </LinkItemList>
            </ItemListMenu>
            <ButtonsContainer>
              {isLogged ?
                <LogoutButton onClick={handleLogOut}>
                  <Paragraph>CERRAR SESION</Paragraph>
                </LogoutButton>
                :
                <LoginButton onClick={handleLogin}>
                  <Paragraph>INGRESAR</Paragraph>
                </LoginButton>
              }
            </ButtonsContainer>
          </MenuContainer>
        )}
      </NavContainer>
    </NavBody>
  )
}