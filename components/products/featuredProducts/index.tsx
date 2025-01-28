import { useProducts } from "@/utils/components/useProducts"
import { ProductsCard } from "@/components/cards/productsCard"
import { SkeletonProductsCard } from "@/components/skeletons/skeletonProductsCard"
import { Paragraph, ParagraphBold, SectionTitleBold, SubTitle } from "@/ui/typography"
import { FeaturedProductsSection, ProductsContainer, ErrorContainer } from "./styles"

export function FeaturedProducts() {
    const { data, isLoading, isError, error, formatPrice, handleRedirect } = useProducts()

    if (isLoading) {
        return (
            <FeaturedProductsSection>
                <SectionTitleBold>Destacados en Smartshop</SectionTitleBold>
                <ProductsContainer>
                    <SkeletonProductsCard length={3} />
                </ProductsContainer>
            </FeaturedProductsSection>
        )
    } else if (isError) {
        return (
            <FeaturedProductsSection>
                <SectionTitleBold>Destacados en Smartshop</SectionTitleBold>
                <ProductsContainer>
                    <ErrorContainer>
                        <ParagraphBold>Hubo un error al cargar los productos:</ParagraphBold>
                        <Paragraph>{error.message}</Paragraph>
                    </ErrorContainer>
                </ProductsContainer>
            </FeaturedProductsSection>
        )
    }

    return (
        <FeaturedProductsSection>
            <SectionTitleBold>Destacados en Smartshop</SectionTitleBold>
            <ProductsCard data={data} formatPrice={formatPrice} handleRedirect={handleRedirect} />
        </FeaturedProductsSection>
    )
}
