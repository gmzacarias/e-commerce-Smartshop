import { fetchApi } from "./fetchApi"

export async function resetCart() {
    try {
        const data = await fetchApi(`/me/cart`, {
            method: "PUT",
        })
        console.log(data)
        return data

    } catch (error) {
        console.error("Error al agregar el producto al carrito", error)
    }
}