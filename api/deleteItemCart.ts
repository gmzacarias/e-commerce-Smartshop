import { fetchApi } from "./fetchApi"

export async function deleteItemCart(productId: string) {
    console.log("add cart", productId)
    try {
        const data = await fetchApi(`/me/cart?productId=${productId}`, {
            method: "DELETE",
        })
        console.log(data)
        return data

    } catch (error) {
        console.error("Error al agregar el producto al carrito", error)
    }
}