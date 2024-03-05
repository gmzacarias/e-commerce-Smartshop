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
    const response = data?.message as any
    console.log(response)
    return response
}

export function useSearch(query:string,offset?:string,limit?:string) {
    // console.log("query",query)
    const { data, error } = useSWR(`/search?q=${query}&offset=${offset}&limit=${limit}`, fetchApi as any)
    if (error) {
        return error
    }
    const response = data?.message as object
    // console.log(response)
    return response
}







