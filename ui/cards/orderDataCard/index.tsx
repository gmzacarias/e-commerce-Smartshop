import { ButtonsContainer, ImageContainer, ImageContent, ProductsDataContainer } from "./styles"



export function OrderDataCard({ product, buttons }: OrderDataCardProps) {
    console.log("container", ProductsDataContainer)
    return (
        <>
            {product.map((item) => (
                <ProductsDataContainer key={item.productId}>
                    <ImageContainer>
                        <ImageContent src={item.photo} alt={`${item.brand} ${item.model} ${item.colour}`} />
                    </ImageContainer>
                    <div>
                        <h4 style={{ fontSize: 14 }}>{item.brand}</h4>
                        <p style={{ fontSize: 14 }}>{`${item.model} ${item.colour}`}</p>
                        <p style={{ fontSize: 14 }}>1 unidad</p>
                    </div>
                    <div>
                        {buttons && <ButtonsContainer>{buttons}</ButtonsContainer>}
                    </div>
                </ProductsDataContainer>
            ))}
        </>
    )
}