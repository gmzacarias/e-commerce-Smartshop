import { useOrders } from "@/hooks/swr/useOrders"

export function useMyOrders() {
    const { data, isLoading, isError, error }: UseOrderData = useOrders()
    return { data, isLoading, isError, error }
}
