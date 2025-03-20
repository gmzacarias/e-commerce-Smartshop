import { fetchApi } from "./fetchApi"

export async function addItemCart(productId: string, quantity: number) {
    console.log("add cart", productId)
    try {
        const data = await fetchApi(`/me/cart?productId=${productId}`, {
            method: "POST",
            body: { quantity }
        })
        console.log(data)
        return data

    } catch (error) {
        console.error("Error al agregar el producto al carrito", error)
    }
}