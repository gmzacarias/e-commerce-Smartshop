import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useCart() {
    const { data, error, isLoading } = useSWR("/me/cart", fetchApi as any)
    return {
        data,
        isLoading,
        isError: !!error,
        error
    }
}