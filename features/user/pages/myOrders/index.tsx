import { PagesContainer } from "@/ui/containers/pagesContainer"
import { MyOrdersData } from "@/features/user/components/myOrdersData"

export function MyOrders() {
    return (
        <PagesContainer $isAuth={false} subTitleText="Mis ordenes">
            <MyOrdersData />
        </PagesContainer>
    )
}