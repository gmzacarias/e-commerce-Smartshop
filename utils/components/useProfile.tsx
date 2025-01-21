import { useEffect } from "react"
import { useUserData } from "@/lib/atoms"
import { useMe } from "@/lib/hooks"
import router from "next/router"

export function useProfile() {
    const data = useMe()
    const [userData, setUserData] = useUserData()
    
    useEffect(() => {
        if (data) {
            setUserData({
                ...data,
                email: data.email,
                userName: data.userName,
                address: data.address,
                phoneNumber: data.phoneNumber,
            })
        }
    }, [data])

    console.log("userData", userData)

    function handleEdit() {
        router.push("/me/edit")
    }

    function handleCancel() {
        router.push("/")
    }

    function handleMyOrders() {
        router.push("/me/myorders")
    }

    return {userData,handleEdit,handleMyOrders,handleCancel}
}
