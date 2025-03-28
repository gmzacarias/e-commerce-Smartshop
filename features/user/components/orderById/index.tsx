"use client"
import { useOrderById } from "@/hooks/swr/useOrderById"
import { ErrorDataCard } from "@/ui/cards/errorDataCard"


export function OrderById({ orderId }) {



    const { data, isLoading, isError, error } = useOrderById(orderId)
    console.log("data a mostrar", data?.data.status)

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
            <div>soy la orden {orderId}</div>
        </>
    )

}