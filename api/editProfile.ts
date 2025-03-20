import { fetchApi } from "./fetchApi"

export async function editProfile(userName?: string, email?: string, address?: string, phoneNumber?: number) {
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