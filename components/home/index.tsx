import styled from "styled-components"
import router from "next/router"
import { FeaturedProducts } from "components/featured-products"
import { Title, SectionTitle, Paragraph } from "ui/texts"
import { SearchInputIndex } from "ui/inputs"
import { DefaultButton } from "ui/buttons"

const HomeBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export function Home() {
    function handleSearch() {
        router.push("/search")
    }

    return (
        <HomeBody>
            <Title>Bievenido a Smartshop</Title>
            <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
            < SearchInputIndex type="search" placeholder="" />
            <DefaultButton onClick={handleSearch}>
                <Paragraph>BUSCAR</Paragraph>
            </DefaultButton>
            <FeaturedProducts></FeaturedProducts>
        </HomeBody>

    )
}