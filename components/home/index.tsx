import styled from "styled-components"
import { FeaturedProducts } from "@/components/featuredProducts"
import {Title,SubTitle } from "@/ui/typography"
import { Search} from "../search"
import { PurchaseByBrand } from "../purchaseByBrand"

const HomeBody = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* gap:10px; */
`

export function Home() {

    return (
        <HomeBody>
            <Title>Bienvenido a Smartshop</Title>            
            <Search/>
            <FeaturedProducts></FeaturedProducts>
            <PurchaseByBrand/>
        </HomeBody>

    )
}