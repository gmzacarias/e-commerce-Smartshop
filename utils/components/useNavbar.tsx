"use client"

import router from "next/router"
import { useEffect, useState } from "react"
import { deleteToken } from "@/lib/api"
import { useSetUserData, useReset, useAppData, useCartValue } from "lib/atoms"
import { logoutToast } from "@/lib/sonner"
import { useIsMobile } from "@/utils/useIsMobile"
import { useTheme } from "@/utils/darkMode/themeContext"
import { TiCogOutline } from "react-icons/ti"
{}

export function useNavbar() {
    const [data, setData] = useAppData()
    const { isLogged } = data
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

        setData({
            ...data,
            isLogged: false,
            email: "",
        })

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

    return { showMobileMenu, isLogged, valueCart, isMobile,isDarkMode, setShowMenu, handleLogin, handleLogOut ,toggleTheme }


}