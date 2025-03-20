import { fetchApi } from "./fetchApi"

export async function createPurchaseOrder(additionalInfo?: string) {
    try {
        const data = await fetchApi(`/order`, {
            method: "POST",
            body: {
                additionalInfo,
            },
        })
        console.log(data)
        return data

    } catch (error) {
        console.error("Error al agregar el producto al carrito", error)
    }
}
