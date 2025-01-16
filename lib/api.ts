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

export async function getToken(email: string, code: string) {
    try {
        const response = await fetchApi("/auth/token", {
            method: "POST",
            body: {
                email,
                code: parseInt(code),
            },
        })
        if (response.message.includes("incorrecto")) {
            throw new Error(`error del servidor:${response.message}`)
        }

        if(response.message.includes("expirado")){
            throw new Error(`error del servidor:${response.message}`)
        }
        return response
    } catch (error:any) {
        console.log(`Hubo un problema al obtener el token:${error.message}`)
        throw error
    }
}

export async function editProfile(userName?: string, email?: string, address?: string, phoneNumber?: number) {
    console.log("editar", email, userName, address, phoneNumber)
    try {
        const data = await fetchApi("/me", {
            method: "PATCH",
            body: {
                userName,
                email,
                address,
                phoneNumber: phoneNumber,
            },
        })
        console.log(data)
        return data
    } catch (error) {
        console.error("GetToken Error", error)
    }
}



export async function addItemCart(productId: string, quantity: number) {
    console.log("add cart", productId)
    try {
        const data = await fetchApi(`/me/cart?productId=${productId}`, {
            method: "POST",
            body: {
                quantity,
            },
        })
        console.log(data)
        return data

    } catch (error) {
        console.error("Error al agregar el producto al carrito", error)
    }
}

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


export function saveToken(token: string) {
    return localStorage.setItem("auth_token", token)
}

export function getSavedToken() {
    return localStorage.getItem("auth_token")
}

export function deleteToken() {
    return localStorage.removeItem("auth_token")
}






