import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDataValue } from "lib/atoms"

export function PrivateRoute({ children }) {
    const router = useRouter()
    const data = useAppDataValue()
    const { isLogged } = data
    // console.log(isLogged)
    useEffect(() => {
        if (isLogged == false) {
            // console.log("check", isLogged)
            router.push("/login")
        }
    }, [])

    return <>{children}</>
}


