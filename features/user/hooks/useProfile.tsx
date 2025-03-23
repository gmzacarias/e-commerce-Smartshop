"use client"
import { useEffect } from "react"
import { useMe } from "@/hooks/swr/useMe"
import { useUserData } from "@/store/zustand/useUserData"
import { handleNavigation } from "@/utils/handleNavigation"

export function useProfile() {
    const { data, isLoading, error, isError } = useMe()
    const { updateData } = useUserData()

    useEffect(() => {
        if (data && updateData) {
            updateData({
                email: data.email,
                userName: data.userName,
                address: data.address,
                phoneNumber: data.phoneNumber
            })
        }
    }, [data])
    return { data, isLoading, error, isError, handleNavigation }
}
