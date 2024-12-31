import styled from "styled-components"
import { FeaturedProducts } from "@/components/featuredProducts"
import { Title, SectionTitle } from "@/ui/typography"
import { SearchQuery } from "../search"

import { PurchaseByBrand } from "../purchaseByBrand"

const HomeBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export function Home() {


    return (
        <HomeBody>
            <Title>Bievenido a Smartshop</Title>
            <SectionTitle>Encontra los mejores celulares del mercado</SectionTitle>
            <SearchQuery ></SearchQuery>
            <PurchaseByBrand/>
            <FeaturedProducts></FeaturedProducts>
        </HomeBody>

    )
}