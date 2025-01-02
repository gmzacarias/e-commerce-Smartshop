import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSearchQuery } from "@/utils/components/useSearchQuery"
import { InputSearch } from "@/ui/inputs";
import { SearchIcon } from "@/ui/icons";
import { ProductSearch } from "@/components/productSearch";
import styled from "styled-components"


interface SearchFormValue {
    query: string
}

export function useSearch() {
    const { redirectToSearch } = useSearchQuery()
    const {
        handleSubmit: handleSearchSubmit,
        formState: { errors: searchErrors },
        control,
        trigger,
        getValues
    } = useForm<SearchFormValue>({
        defaultValues: { query: "" }
    })


    function onErrorSearch() {
        if (searchErrors.query) {
            alert(searchErrors.query.message)
        }
    }



    async function handleSearchForm(dataForm: SearchFormValue) {
        const { query } = dataForm
        console.log("la query", query)
        if (!query) {
            onErrorSearch()
            return
        }
        redirectToSearch(query)
        console.log(dataForm.query)
        return
    }




async function handleIconClick() {
    const isValid = await trigger("query"); // Valida el campo "query"
    if (isValid) {
      const query = getValues("query"); // Obtiene el valor actual del input
      handleSearchForm({ query });
    } else {
      onErrorSearch(); // Ejecuta la lógica de error si no es válido
    }
  }
 
    return { handleSearchSubmit, control, handleSearchForm, handleIconClick, onErrorSearch }
}



