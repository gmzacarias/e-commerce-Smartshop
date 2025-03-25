const BASE_URL = "https://e-commerce-backend-lake.vercel.app/api"

export async function fetchApi<T = unknown>(
    endpoint: RequestInfo,
    options?: {},
): Promise<T> {
    const url = `${BASE_URL}${endpoint}`
    const token = getSavedToken()
    const newOptions: any = options || {}
    newOptions.headers ||= {}
    newOptions.headers["content-type"] = "application/json"

    if (token) {
        newOptions.headers["authorization"] = `Bearer ${token}`
    }

    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body)
    }

    try {
        const response = await fetch(url, newOptions)
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






