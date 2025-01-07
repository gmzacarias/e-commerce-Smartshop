import { useProducts } from "@/utils/components/useProducts"
import { SkeletonProductsCard } from "@/components/cards/skeletonProductsCard"
import { Paragraph, ParagraphBold } from "@/ui/typography"
import { ImageProductCard } from "@/ui/images"
import { ProductsContainer,ErrorContainer, ProductCard, ButtonCard } from "./styles"


export function ProductsCard() {
    const { data, isLoading, isError, error, formatPrice, handleRedirect } = useProducts()


    if (isLoading) {
        return (
            <ProductsContainer>
                <SkeletonProductsCard length={3} />
            </ProductsContainer>
        )
    } else if (isError) {
        return (
            <ProductsContainer>
                <ErrorContainer>
                <ParagraphBold>Hubo un error al cargar los productos:</ParagraphBold>
                <Paragraph>{error.message}</Paragraph>
                </ErrorContainer>
            </ProductsContainer>
        )
    }

    return (
        <ProductsContainer>
            {data.map((item) => (
                <ProductCard key={item.id}>
                    <ImageProductCard src={item.photo} alt={`${item.brand} ${item.model}`} title={`${item.brand} ${item.model}`} />
                    <ParagraphBold>{item.brand}</ParagraphBold>
                    <Paragraph>{`${item.model} ${item.storage}`}</Paragraph>
                    <ParagraphBold>${formatPrice(item.price)}</ParagraphBold>
                    <ButtonCard onClick={() => handleRedirect(item.id)}>
                        <ParagraphBold>COMPRAR</ParagraphBold>
                    </ButtonCard>
                </ProductCard>

            ))}
        </ProductsContainer>
    )
}