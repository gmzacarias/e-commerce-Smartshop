import useSWR from "swr"
import { fetchApi } from "@/api/fetchApi"

export function useMe() {
    const { data, error, isLoading } = useSWR("/me", fetchApi as any)
    return {
        data: data?.data,
        isLoading,
        isError: !!error,
        error
    }
}