import { SectionTitleBold, SubTitle } from "@/ui/typography"
import { FeaturedProductsCard } from "@/components/cards/featuredProductsCard"
import { FeaturedProductsSection } from "./styles"
export function FeaturedProducts() {

    return (
        <FeaturedProductsSection>
            <SectionTitleBold>Destacados en Smartshop</SectionTitleBold>
            <FeaturedProductsCard />
        </FeaturedProductsSection>
    )
}