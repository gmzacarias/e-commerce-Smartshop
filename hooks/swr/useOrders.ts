import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useOrders() {
    const { data, error, isLoading } = useSWR("/order/myorders", fetchApi as any)
    return {
        data:data?.data,
        isLoading,
        isError: !!error,
        error
    }
}