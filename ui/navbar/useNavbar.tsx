"use client"

import router from "next/router"
import { useEffect, useState } from "react"
import { deleteToken } from "@/api/fetchApi"
import { useSetUserData, useReset, useAppData, useCartValue } from "@/hooks/recoil/atoms"
import { logoutToast } from "@/utils/sonner/toast"
import { useIsMobile } from "@/utils/useIsMobile"
import { useTheme } from "@/context/themeContext"
import { useAppDataStore } from "@/store/zustand/useAppData"

export function useNavbar() {
    const { isLogged, resetState } = useAppDataStore()
    const setUserData = useSetUserData()
    const currentCart = useCartValue()
    const [valueCart, SetValueCart] = useState("")
    const resetCart = useReset()
    const isMobile = useIsMobile(768)
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();


    useEffect(() => {
        if (currentCart) {
            const currentValue = currentCart.reduce((total, item) => {
                return total + item.quantity
            }, 0)
            if (currentValue > 10) {
                SetValueCart("+10")
            } else {
                SetValueCart(currentValue.toString())
            }
        } else {
            SetValueCart("")
        }
    }, [currentCart])

    function setShowMenu() {
        setShowMobileMenu(!showMobileMenu)
    }

    function handleLogin() {
        router.push("/login")
    }

    function handleLogOut() {
        deleteToken()

        resetState!({email:"",isLogged:false})

        setUserData((prevData) => ({
            ...prevData,
            email: "",
            userName: "",
            address: "",
            phoneNumber: 0,
        }))

        resetCart()
        logoutToast()
    }

    return { showMobileMenu, isLogged, valueCart, isMobile, isDarkMode, setShowMenu, handleLogin, handleLogOut, toggleTheme }


}