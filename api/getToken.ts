import { fetchApi } from "./fetchApi"

export async function getToken(email: string, code: string): Promise<GetTokenResponse> {
    try {
        const response = await fetchApi<GetTokenResponse>("/auth/token", {
            method: "POST",
            body: {
                email,
                code: parseInt(code)
            }
        })
        if (response.message.includes("incorrecto")) {
            throw new Error(`error del servidor:${response.message}`)
        }

        if (response.message.includes("expirado")) {
            throw new Error(`error del servidor:${response.message}`)
        }
        return response
    } catch (error: any) {
        console.log(`Hubo un problema al obtener el token:${error.message}`)
        throw error
    }
}