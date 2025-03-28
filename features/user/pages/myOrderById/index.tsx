import { PagesContainer } from "@/ui/containers/pagesContainer";
import { OrderById } from "@/features/user/components/orderById";





export function MyOrderById({ orderId }) {
    return (
        <PagesContainer $isAuth={false} subTitleText="detalles de la orden">
            <OrderById orderId={orderId} />
        </PagesContainer>
    )
}