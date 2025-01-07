import {ProductsCard } from "@/components/cards/productsCard"
import { SectionTitleBold, SubTitle } from "@/ui/typography"
import { FeaturedProductsSection } from "./styles"

export function FeaturedProducts() {

    return (
        <FeaturedProductsSection>
            <SectionTitleBold>Destacados en Smartshop</SectionTitleBold>
            <ProductsCard />
        </FeaturedProductsSection>
    )
}