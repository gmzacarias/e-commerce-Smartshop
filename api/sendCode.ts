import { fetchApi } from "./fetchApi"

export async function sendCode(email: string) {
    try {
        const response = await fetchApi("/auth", {
            method: "POST",
            body: { email }
        },)
        if (!response) {
            throw new Error(`error del servidor:${response}`)
        }
        return response
    } catch (error) {
        console.error(`Hubo un problema al enviar el codigo:${error}`)
        throw error
    }
}