import router from "next/router"
import { useEffect, useState } from "react"



export function useSearchQuery() {

    function redirectToSearch(query: string,offset?:string,limit?:string) {
        const querySearch = query
        const currentOffset = offset ??  "0"
        const currentLimit = limit ?? "10"
        router.push(`/search?q=${querySearch}&offset=${currentOffset}&limit=${currentLimit}`)
    }

    return { redirectToSearch }

}