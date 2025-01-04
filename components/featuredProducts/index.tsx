import { SubTitle } from "@/ui/typography"
import { FeaturedProductsCard } from "@/components/cards/featuredProductsCard"
import { FeaturedProductsSection } from "./styles"
export function FeaturedProducts() {

    return (
        <FeaturedProductsSection>
            <SubTitle>Productos destacados</SubTitle>
            <FeaturedProductsCard />
        </FeaturedProductsSection>
    )
}