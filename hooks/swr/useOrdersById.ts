import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useOrdersById(id: string) {
    const { data, error, isLoading } = useSWR(`/order/myorders/${id}`, fetchApi as any)
    return{
        data,
        isLoading,
        isError:!!error,
        error
    }
}