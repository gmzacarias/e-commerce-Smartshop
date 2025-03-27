import { ImageContainer, ImageContent, ProductsDataContainer } from "./styles"



export function OrderDataCard({ product,status }: OrderDataCardProps) {
   console.log("container",ProductsDataContainer)
    return (
        <>
            {product.map((item) => (
                <ProductsDataContainer key={item.productId}>
                    <ImageContainer>
                        <ImageContent src={item.photo} alt={`${item.brand} ${item.model} ${item.colour}`}/>
                    </ImageContainer>
                    <div>
                        <h4 style={{ fontSize: 14 }}>{item.brand}</h4>
                        <p style={{ fontSize: 14 }}>{`${item.model} ${item.colour}`}</p>
                        <p style={{ fontSize: 14 }}>1 unidad</p>
                    </div>
                    <div>
                        <p>{status}</p>
                        <button>ver compra</button>
                        <button>volver a comprar</button>
                    </div>
                </ProductsDataContainer>
            ))}
        </>
    )
}