export function OrdersCard({ data, children }: OrdersCardProps) {

    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <h4>{item.created}</h4>
                    <h5>{item.status === "pending" ? "Pago pendiente" : ""}</h5>
                    {item.products?.map((product) => (
                        <div key={product.productId}>
                            {children(product, item.status)}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}