"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDataStore } from '@/store/zustand/useAppData';
import { LoaderApp } from '@/ui/loader';

type RoutesProps = {
    children: React.ReactNode
}
function PrivateRoutes({ children }: RoutesProps) {
    const [isLoading, setIsLoading] = useState(true)
    const {isLogged}=useAppDataStore()
    const router = useRouter()

    useEffect(() => {
        if (!isLogged) {
           
           setTimeout(() => {
               router.replace("/")
           }, 10000);
            return
        }
        else {
            setIsLoading(false)
        }
    }, [isLogged])

    if (isLoading) {
        return <LoaderApp />
    }

    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoutes


