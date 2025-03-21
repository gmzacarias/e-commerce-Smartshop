const BASE_URL = "https://e-commerce-backend-lake.vercel.app/api"

export async function fetchApi<T = unknown>(
    endpoint: RequestInfo,
    options: RequestInit = {},
): Promise<T> {
    const url = `${BASE_URL}${endpoint}`
    const token = getSavedToken()
    const headers = new Headers(options.headers)
    headers.set("Content-Type", "application/json")

    if (token) {
        headers.set("Authorization", `Bearer ${token}`)
    }

    const fetchOptions: RequestInit = {
        ...options,
        headers,
        body:typeof options.body === "object" ? JSON.stringify(options.body) : options.body
    }

    try {
        const response = await fetch(url, fetchOptions)
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data?.message || `Error:${response.status}`)
        }
        return data
    } catch (error) {
        console.log(`Hubo un problema al obtener de los datos:${(error as Error).message}`)
        throw error
    }
}

export function saveToken(token: string) {
    return localStorage.setItem("auth_token", token)
}

export function getSavedToken() {
    return localStorage.getItem("auth_token")
}

export function deleteToken() {
    return localStorage.removeItem("auth_token")
}






