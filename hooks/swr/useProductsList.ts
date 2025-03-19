import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useProductsList() {
    const { data, error, isLoading } = useSWR("/product", fetchApi as any)
    return {
        data,
        isLoading,
        isError: !!error,
        error
    }
}