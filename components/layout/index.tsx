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
  flex: 1;
  width: 100%;
  height:max-content;
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