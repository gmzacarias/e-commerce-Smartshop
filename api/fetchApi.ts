const BASE_URL = "https://e-commerce-backend-lake.vercel.app/api"

export async function fetchApi(
    input: RequestInfo,
    options?: any,
) {
    const url = BASE_URL + input;
    const token = getSavedToken();
    const newOptions: any = options || {}
    //si me pasan un options  usalo, sino crealo
    //si headers esta creado en options usalo, sino newoption es nulo o undefined crea un objeto vacio dentro de newoptions.headers
    newOptions.headers ||= {}
    newOptions.headers["content-type"] = "application/json"

    if (token) {
        newOptions.headers.authorization = "Bearer " + token
    }

    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body)
    }

    try {
        const response = await fetch(url, newOptions)
        if (response.status >= 200 && response.status < 300) {
            return response.json()
        } else {
            const errorData = await response.json();
            const errorMessage = errorData?.message || `status:${response.status}`;
            throw new Error(errorMessage);
        }
    } catch (error: any) {
        console.log(`Hubo un problema:${error.message}`)
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






