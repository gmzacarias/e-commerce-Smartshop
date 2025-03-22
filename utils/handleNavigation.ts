import router from "next/router"

export function handleNavigation(path: string) {
    router.push(path)
}