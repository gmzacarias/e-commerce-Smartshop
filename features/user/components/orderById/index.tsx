"use client"
import { ErrorDataCard } from "@/ui/cards/errorDataCard"
import { useMyOrderById } from "../../hooks/useMyOrderById"
import { OrderByIdDataCard } from "@/ui/cards/orderByIdDataCard"

export function OrderById({ orderId }) {
    const { data, isLoading, isError, error } = useMyOrderById(orderId)

    console.log("data", data.data)
    if (isLoading) {
        return (
            <div>
                cargando....
            </div>
        )
    } else if (isError || data === undefined) {
        return <ErrorDataCard text={`hubo un error al cargar la order:${orderId}`} error={error!.message} />
    }

    return (
        <>
            <OrderByIdDataCard data={data?.data} />
        </>
    )

}