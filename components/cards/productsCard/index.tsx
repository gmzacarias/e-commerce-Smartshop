import { useProductsList } from "@/lib/hooks"
import router from "next/router"
import Skeleton from "react-loading-skeleton"
import { ProductsContainer, ProductCard, PhotoCard, ButtonCard } from "./styles"
import { Paragraph, ParagraphBold } from "@/ui/typography"


export function ProductsCard() {
    const {data,isLoading,error,isError} = useProductsList()
    console.log("data destacada", data)

    function formatPrice(price) {
        return new Intl.NumberFormat('es-ES', {
            style: "decimal",
            minimumFractionDigits: 2,
        }
        ).format(price)
    }

    function handleRedirect(id) {
        confirm(`redirigir al producto ${id}`)
        router.push(`/product/${id}`)

    }

    return (
        <ProductsContainer>
            {data ? (
                data.map((item) => (
                    <ProductCard key={item.id}>
                        <PhotoCard src={item.photo} title={`${item.brand} ${item.model}`} />
                        <ParagraphBold>{item.brand}</ParagraphBold>
                        <Paragraph>{`${item.model} ${item.storage}`}</Paragraph>
                        <ParagraphBold>${formatPrice(item.price)}</ParagraphBold>
                        <ButtonCard onClick={() => handleRedirect(item.id)}>
                            <ParagraphBold>COMPRAR</ParagraphBold>
                        </ButtonCard>
                    </ProductCard>

                ))
        
            ) : (
                Array.from({ length: 3 }).map((_, index) => (
                    <ProductCard key={index}>
                        <Skeleton width={200} height={200} borderRadius={5} baseColor="#eaeaea" />
                        <Skeleton width={80} height={20} borderRadius={5} baseColor="#eaeaea" />
                        <Skeleton width={120} height={20} borderRadius={5} baseColor="#eaeaea" />
                        <Skeleton width={190} height={44} borderRadius={4} baseColor="#eaeaea" />
                    </ProductCard>
                ))
            )}
        </ProductsContainer>
    )


}