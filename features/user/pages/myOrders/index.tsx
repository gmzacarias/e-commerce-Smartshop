import { useOrders } from "@/hooks/swr/useOrders"
import router from "next/router"
import { MyOrdersBody, TableOrders } from "./styles"
import { OrderDataCard } from "@/ui/cards/orderDataCard"


import { PagesContainer } from "@/ui/containers/pagesContainer"
import { OrdersCard } from "@/ui/cards/ordersCard"
import { ErrorDataCard } from "@/ui/cards/errorDataCard"

export function MyOrders() {
    const { data, isLoading, isError, error }: UseOrderData = useOrders()

    function handleOrderById(orderId: string) {
        // console.log("orderid", orderId)
        router.push(`/me/myorders/${orderId}`)
    }

    function goToProduct(productId) {
        // console.log("id", productId)
        const id = productId
        router.push(`/product/${id}`)
    }

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
        <PagesContainer $isAuth={false} subTitleText="Mis ordenes">
            <>
                {data.map((item) => (
                    <OrdersCard key={item.id} data={data}>
                        {(product) => (
                            <OrderDataCard key={product.productId} product={[product]} status={item.status} />
                        )}
                    </OrdersCard>
                ))}
            </>
        </PagesContainer>
    )
}