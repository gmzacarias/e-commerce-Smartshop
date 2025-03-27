import { OrdersCardContainer, OrdersCardContent } from "./styles";

export function OrdersCard({ data, children }: OrdersCardProps) {

    return (
        <>
            {data.map((item) => (
                <OrdersCardContainer key={item.id}>
                    <OrdersCardContent>
                        <h4>{item.created}</h4>
                        <h5>{item.status === "pending" ? "Pago pendiente" : "Pago Exitoso"}</h5>
                    </OrdersCardContent>
                    {item.products?.map((product) => (
                        <div key={product.productId}>
                            {children(product, item.status)}
                        </div>
                    ))}
                </OrdersCardContainer>
            ))}
        </>
    )
}