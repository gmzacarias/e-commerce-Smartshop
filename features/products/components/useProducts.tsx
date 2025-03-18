import router from "next/router"
import { useProductsList } from "@/hooks/swr/useSWR"


export function useProducts(){
    const { data, isLoading, error, isError } = useProductsList()

    function formatPrice(price) {
        return new Intl.NumberFormat('es-ES', {
            style: "decimal",
            minimumFractionDigits: 2,
        }
        ).format(price)
    }

    function handleRedirect(id) {
        router.push(`/product/${id}`)
    }

    return {data,isLoading,isError,error,formatPrice,handleRedirect}

}