import { useRouter } from "next/router"
import { useEffect,useState } from "react"

export function useCheckoutPages(){
        const router = useRouter()
        const { status, payment_id, orderId } = router.query
        const orderIdType = typeof orderId === "string" ? orderId : undefined
        const statusType = (status === "success" || status === "pending" || status === "failure") ? status : undefined
        const paymentIdType = typeof payment_id === "string" ? payment_id : undefined
        const [statusMessage, SetStatusMessage] = useState("Estado de la compra");
        const [description, SetDescription] = useState(`estado de la compra`)
        const [isLoading, SetIsLoading] = useState(true)
    
        useEffect(() => {
            if (status) {
                if (status == "success") {
                    SetStatusMessage("Compra aprobada")
                    SetDescription("Compra realizada con exito")
                } else if (status == "pending") {
                    SetStatusMessage("Compra pendiente de pago")
                    SetDescription("compra pendiente de pago")
                } else if (status === "failure") {
                    SetStatusMessage("Fallo al realizar el pago")
                    SetDescription("fallo al realizar el pago,reintente con otro medio de pago")
                }
                SetIsLoading(false)
            }
        }, [status])

        return {orderIdType,statusType,paymentIdType,statusMessage,description,isLoading}
}