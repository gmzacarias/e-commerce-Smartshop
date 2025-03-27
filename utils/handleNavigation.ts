import router from "next/router"

export function handleNavigation(path: string, params?: string) {
    if (params) {
     return   router.push(`${path}${params}`)
    }
    router.push(path)
}