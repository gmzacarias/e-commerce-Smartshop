import { useOrderById } from "@/hooks/swr/useOrderById";

export function useMyOrderById(orderId: string) {
    const { data, isLoading, isError, error } = useOrderById(orderId)
    return { data, isLoading, isError, error }
}