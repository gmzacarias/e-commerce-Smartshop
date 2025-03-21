import { Paragraph, ParagraphBold } from "@/ui/typography"
import { ImageProductCard } from "@/ui/images"
import { CardButton } from "@/ui/buttons"
import { ProductsContainer, ProductCard,TextContainer } from "./styles"

type ProductsCardProps = {
    data: any[],
    formatPrice: (price: number) => string,
    handleRedirect: (id: string) => void,
}

export function ProductsCard({data, formatPrice, handleRedirect}:ProductsCardProps) {

    return (
        <ProductsContainer>
            {data.map((item) => (
                <ProductCard key={item.id} onClick={() => handleRedirect(item.id)}>
                    <ImageProductCard src={item.photo} alt={`${item.brand} ${item.model}`} title={`${item.brand} ${item.model}`} />
                    <TextContainer>
                    <ParagraphBold>{item.brand}</ParagraphBold>
                    <Paragraph>{`${item.model} ${item.storage}`}</Paragraph>
                    <ParagraphBold>${formatPrice(item.price)}</ParagraphBold>
                    </TextContainer>
                </ProductCard>

            ))}
        </ProductsContainer>
    )
}