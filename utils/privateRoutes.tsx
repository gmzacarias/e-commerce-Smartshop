"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDataValue } from "lib/atoms"
import { LoaderApp } from '@/ui/loader';

type RoutesProps = {
    children: React.ReactNode
}
function PrivateRoutes({ children }: RoutesProps) {
    const [isLoading, setIsLoading] = useState(true)
    const data = useAppDataValue()
    const { isLogged } = data
    const router = useRouter()

    useEffect(() => {
        if (isLogged === false) {
            router.replace("/")
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


