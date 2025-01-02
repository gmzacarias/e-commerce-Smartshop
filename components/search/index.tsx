import { useForm, Controller } from "react-hook-form";
import { FormContainer, InputSearch2 } from "./styles";
import { useSearchQuery } from "@/utils/components/useSearchQuery"
import { InputSearch } from "@/ui/inputs";
import { SearchIcon } from "@/ui/icons";
import { ProductSearch } from "@/components/productSearch";
import styled from "styled-components"
import { useSearch } from "@/utils/components/useSearch";





const SearchContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
width:300px;
height: fit-content;
margin:10px auto;

@media (min-width:769px){
    width: 450px;
}
`




export function Search() {
    const { handleSearchSubmit, control, handleSearchForm,handleIconClick, onErrorSearch } = useSearch()

    return (
        <div>
            <form onSubmit={handleSearchSubmit(handleSearchForm, onErrorSearch)}>
                <Controller
                    control={control}
                    name="query"
                    rules={{
                        required: "ingrese una busqueda",
                        pattern: {
                            value: /^[a-zA-Z0-9\s]+$/, // Expresión regular que no permite un valor vacío o solo espacios
                            message: "no se permiten caracteres especiales",
                        },
                    }
                    }
                    render={({ field: { onChange, value } }) => (
                        <SearchContainer>

                            <InputSearch type="search"
                                placeholder="Que estas buscando..."
                                onChange={onChange}
                                value={value}
                            />
                            <SearchIcon onClick={handleIconClick} />
                        </SearchContainer>
                   
                   
                )}

                />



            </form>
        </div >
    )
}



