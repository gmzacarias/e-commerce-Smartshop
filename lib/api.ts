
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
        const res = await fetch(url, newOptions)
        console.log(res.url)
        if (res.status >= 200 && res.status < 300) {
            return res.json()
        } else {
            throw {
                message: "Hubo un error",
                status: res.status
            }
        }
    } catch (error) {
        console.log("Hubo un problema con fetch api", error)
    }
}




export async function sendCode(email: string) {
    console.log("email", email)
    try {
        const data = await fetchApi("/auth", {
            method: "POST",
            body: {
                email,
            }
        },)
        return data
    } catch (error) {
        console.error("SendCode Error", error)
    }
}

export async function getToken(email: string, code: string) {
    console.log(email, code)
    try {
        const data = await fetchApi("/auth/token", {
            method: "POST",
            body: {
                email,
                code: parseInt(code),
            },
        })
        console.log(data)
        return data
    } catch (error) {
        console.error("GetToken Error", error)
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



export async function addItemCart(productId: string) {
    console.log("add cart", productId)
    try {
        const data = await fetchApi(`/me/cart?productId=${productId}`, {
            method: "POST",
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
            method: "DELETE",
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






