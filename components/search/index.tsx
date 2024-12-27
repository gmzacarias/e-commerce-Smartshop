import { useForm } from "react-hook-form";
import { FormContainer, InputSearch } from "./styles";
import { useSearchQuery } from "utils/components/useSearch"

interface SearchFormValue {
    query: string
}

export function SearchQuery() {
    const { redirectToSearch } = useSearchQuery()
    const {
        register: registerSearch,
        handleSubmit: handleSearchSubmit,
        formState: { errors: searchErrors }
    } = useForm<SearchFormValue>()

    async function handleSearchForm(dataForm: SearchFormValue) {
        const { query } = dataForm
        if (!query) {
            alert("ingresa una busqueda")
        }
        redirectToSearch(query)
        return
    }

    function onErrorSearch() {
        if (searchErrors.query) {
            alert(searchErrors.query.message)
        }
    }

    return (
        <div>
            <FormContainer onSubmit={handleSearchSubmit(handleSearchForm, onErrorSearch)}>
                <InputSearch type="search"{...registerSearch("query", {
                    required: "ingrese una busqueda",
                    pattern: {
                        value: /^[a-zA-Z0-9\s]+$/, // Expresión regular que no permite un valor vacío o solo espacios
                        message: "no se permiten caracteres especiales",
                    },
                }
                )}
                    placeholder="Que estas buscando"/>
                    
            </FormContainer>
        </div >
    )
}



