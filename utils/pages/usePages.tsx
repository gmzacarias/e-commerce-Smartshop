"use client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type StatusType = "success" | "pending" | "failure" | undefined;

export function useCheckoutPages() {
    const router = useRouter()
    const { status, payment_id, orderId } = router.query
    const orderIdType = typeof orderId === "string" ? orderId : undefined
    const validStatuses: StatusType[] = ["success", "pending", "failure"];
    const statusType: StatusType = typeof status === "string" && validStatuses.includes(status as StatusType)
        ? (status as StatusType)
        : undefined;
    const paymentIdType = typeof payment_id === "string" ? payment_id : undefined
    const [statusMessage, SetStatusMessage] = useState("Estado de la compra");
    const [description, SetDescription] = useState(`estado de la compra`)
    const [isLoading, SetIsLoading] = useState(true)

    useEffect(() => {
        if (statusType) {
            if (statusType == "success") {
                SetStatusMessage("Compra aprobada")
                SetDescription("Compra realizada con exito")
            } else if (statusType == "pending") {
                SetStatusMessage("Compra pendiente de pago")
                SetDescription("compra pendiente de pago")
            } else if (statusType === "failure") {
                SetStatusMessage("Fallo al realizar el pago")
                SetDescription("fallo al realizar el pago,reintente con otro medio de pago")
            }
            SetIsLoading(false)
        } else {
            SetStatusMessage("Estado no válido");
            SetDescription("No se pudo determinar el estado de la compra");
        }
    }, [statusType])

    return { orderIdType, statusType, paymentIdType, statusMessage, description, isLoading }
}