import useSWR from 'swr'
import useSWRImmutable from "swr/immutable"
import { fetchApi } from "lib/api"
import { useUserData } from './atoms'

export function useMe() {
    const { data, error } = useSWR("/me", fetchApi as any)
    if (error) {
        return error
    }
    return data?.data
}

export function useProduct(id: string) {
    //usan la funcion inmutable de swr,por que los productos no suelen variar.
    const { data, error } = useSWRImmutable("/product/" + id, fetchApi as any)
    // console.log("id",id)
    if (error) {
        return error
    }
    const products = data as any
    return products
}

export function useSearch(query: string, offset?: string, limit?: string) {
    // console.log("query",query)
    const { data, error } = useSWR(`/search?q=${query}&offset=${offset}&limit=${limit}`, fetchApi as any)
    if (error) {
        return error
    }
    const response = data as any
    // console.log(response)
    return response
}

export function useCart() {
    const { data, error } = useSWR("/me/cart", fetchApi as any)
    if (error) {
        return error
    }
    const response = data?.cart
    console.log("soy el carrito",response)
    return response
}


export function useOrders(){
    const {data,error}=useSWR("/order/myorders", fetchApi as any)
    if(error){
        return error
    }
    const response=data?.data as any
    console.log("mis ordenes",response)
    return response
}

export function useOrderById(id:string){
const{data,error}=useSWR(`/order/myorders/${id}`, fetchApi as any)
if (error){
    return error
}
const response=data
console.log("orden por id",response)
return response
}






