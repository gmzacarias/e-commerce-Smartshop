import styled from "styled-components"
import { Header } from "components/header"
import { Footer } from "components/footer"

const BodyLayout=styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items: center;
`

const MainContent = styled.main`
  flex: 1; /* Hace que el contenido principal ocupe el espacio restante */
  width: 100%;
  height: fit-content;
`

export function Layout({ children }) {
    return (
        <BodyLayout>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
        </BodyLayout>

    )
}