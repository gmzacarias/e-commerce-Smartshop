import Link from 'next/link'
import { NavBody, NavContainer, HamburguerMenu, MenuContainer, ItemListMenu, LinkItemList, ButtonsContainer, UserContainer } from "./styles"
import { UserIcon, CartIcon, BrandHeaderIcon, CloseHamburguerIcon, HamburguerIcon, LogoutIcon, LoginIcon, SunIcon, MoonIcon } from "ui/icons"
import { Paragraph } from "@/ui/typography"
import { SessionButton, ThemeToggleButton } from "@/ui/buttons"
import { useNavbar } from "@/utils/components/useNavbar"

import { useTheme } from '@/utils/darkMode/themeContext'

export function NavBar() {
  const { showMobileMenu, isLogged, valueCart, isMobile, setShowMenu, handleLogin, handleLogOut } = useNavbar()
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <NavBody>
      <NavContainer>
        <Link href={"/"}>
          <BrandHeaderIcon />
        </Link>
        {!isMobile && (
          <UserContainer>
            <Link href={isLogged ? "/me" : "/login"} title={isLogged ? "mi cuenta" : "iniciar sesion"}>
              <UserIcon />
            </Link>
            <Link href={isLogged ? "/cart" : "/login"} title="mi carrito">
              <CartIcon state={valueCart} />
            </Link>
            <ThemeToggleButton onClick={toggleTheme} title={isDarkMode ? "modo claro" : "modo oscuro"}>
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </ThemeToggleButton>
          </UserContainer>
        )}

        {isMobile && (
          <UserContainer>
            <Link href={isLogged ? "/cart" : "/login"} title="mi carrito">
              <CartIcon state={valueCart} />
            </Link>
            <HamburguerMenu onClick={setShowMenu} title="menu">
              {showMobileMenu ? <CloseHamburguerIcon /> : <HamburguerIcon />}
            </HamburguerMenu>
          </UserContainer>
        )}

        {isMobile && showMobileMenu && (
          <MenuContainer open={showMobileMenu}>
            <ItemListMenu>
              <LinkItemList onClick={setShowMenu}>
                <Link href={isLogged ? "/me" : "/login"} className="links" title="mi cuenta">
                  <UserIcon />
                  <Paragraph>MI CUENTA</Paragraph>
                </Link>
              </LinkItemList>
            </ItemListMenu>
            <ItemListMenu>
              <LinkItemList onClick={setShowMenu}>
                <Link href={isLogged ? "/me/myorders" : "/login"} className="links" title="mis ordenes de compra">
                  <UserIcon />
                  <Paragraph>MIS ORDENES</Paragraph>
                </Link>
              </LinkItemList>
            </ItemListMenu>
            <ButtonsContainer>
              <ThemeToggleButton onClick={toggleTheme} title={isDarkMode ? "modo claro" : "modo oscuro"}>
                {isDarkMode ?
                  <>
                    <SunIcon />
                    <Paragraph>MODO CLARO</Paragraph>
                  </>
                  :
                  <>
                    <MoonIcon />
                    <Paragraph>MODO OSCURO</Paragraph>
                  </>
                }
              </ThemeToggleButton>
              <SessionButton onClick={isLogged ? handleLogOut : handleLogin} title={isLogged ? "cerrar sesion" : "ingresar o registrarse"}>
                {isLogged ?
                  <>
                    <LogoutIcon />
                    <Paragraph>CERRAR SESION</Paragraph>
                  </>
                  :
                  <>
                    <LoginIcon />
                    <Paragraph>INGRESAR</Paragraph>
                  </>
                }
              </SessionButton>
            </ButtonsContainer>
          </MenuContainer>
        )}
      </NavContainer>
    </NavBody>
  )
}