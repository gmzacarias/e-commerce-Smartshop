"use client"
import { useMyOrders } from "@/features/user/hooks/useMyOrders";
import { ErrorDataCard } from "@/ui/cards/errorDataCard";
import { OrdersCard } from "@/ui/cards/ordersCard";
import { OrderDataCard } from "@/ui/cards/orderDataCard";
import { DefaultButton } from "@/ui/buttons";
import { handleNavigation } from "@/utils/handleNavigation";

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
                <OrdersCard
                    key={item.id}
                    data={data}
                >
                    {(product) => (
                        <OrderDataCard key={product.productId} product={[product]} buttons={(
                            <>
                                <DefaultButton onClick={() => handleNavigation(`${"/me/myorders/"}${item.id}`)} title={"ver compra"}>Ver compra</DefaultButton>
                                <DefaultButton onClick={() => handleNavigation(`${"/product/"}${product.productId}`)} title={"volver a comprar"}>Volver a comprar</DefaultButton>
                            </>
                        )} />
                    )}
                </OrdersCard>
            ))}
        </>
    )
}