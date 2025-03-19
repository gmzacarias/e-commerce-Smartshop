import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useProductSearch(query: string, offset?: string, limit?: string) {
    const { data, error, isLoading } = useSWR(`/search?q=${query}&offset=${offset}&limit=${limit}`, fetchApi as any)
    return {
        data,
        isLoading,
        isError: !!error,
        error
    }
}