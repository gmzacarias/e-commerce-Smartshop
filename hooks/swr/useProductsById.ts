import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useProductById(id: string) {

    const { data, error, isLoading } = useSWR(`/product/${id}`, fetchApi as any)
    return {
        data,
        isLoading,
        isError: !!error,
        error
    }
}