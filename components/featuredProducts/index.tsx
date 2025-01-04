
import { SubTitle } from "@/ui/typography"
import { useProductsList } from "@/lib/hooks"
import Skeleton from "react-loading-skeleton"
import router from "next/router"
import { FeaturedProductsSection, ProductsContainer, ProductCard, PhotoCard, ButtonCard } from "./styles"





export function FeaturedProducts() {
    const data = useProductsList()
    console.log("data destacada", data)


function handleRedirect(id){
    confirm(`redirigir al producto ${id}`)
    router.push(`/product/${id}`)
    
}

    return (
        <FeaturedProductsSection>
            <SubTitle>Productos destacados</SubTitle>
            <ProductsContainer>
                {data ? (
                    data.map((item) => (
                        <ProductCard key={item.id}>
                            <PhotoCard src={item.photo} />
                            <h3 style={{ fontSize: 14, fontWeight: "normal" }}>{`${item.brand} ${item.model} ${item.storage}`}</h3>
                            <h3 style={{ fontSize: 16, fontWeight: "bold" }}>{`$${item.price}`}</h3>
                            <ButtonCard onClick={()=>handleRedirect(item.id)}>¡Lo quiero!</ButtonCard>
                        </ProductCard>
                        
                    ))
              
                ) : (
                    Array.from({ length:3}).map((_, index) => (
                        <ProductCard key={index}>
                            <Skeleton width={200} height={180} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={150} height={27} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={80} height={27} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={158} height={44} borderRadius={4} baseColor="#fff" />
                        </ProductCard>
                    ))
                )}
            </ProductsContainer>
        </FeaturedProductsSection>
    )
}