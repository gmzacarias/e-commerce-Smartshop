"use client"
import { useMyOrders } from "@/features/user/hooks/useMyOrders";
import { ErrorDataCard } from "@/ui/cards/errorDataCard";
import { OrdersCard } from "@/ui/cards/ordersCard";
import { OrderDataCard } from "@/ui/cards/orderDataCard";

export function MyOrdersData() {
    const { data, isLoading, isError, error } = useMyOrders()
    if (isLoading) {
        return (
            <div>
                cargando....
            </div>
        )
    } else if (isError || data === undefined) {
        return <ErrorDataCard text="Hubo un error al cargar las ordenes" error={error!.message} />
    }

    return (
        <>
            {data.map((item) => (
                <OrdersCard key={item.id} data={data}>
                    {(product) => (
                        <OrderDataCard key={product.productId} product={[product]} status={item.status} />
                    )}
                </OrdersCard>
            ))}
        </>
    )
}