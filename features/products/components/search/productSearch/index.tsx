import styled from "styled-components"
import { InputSearch } from "@/ui/inputs";
import { SearchIcon } from "@/ui/icons";

const ProductSearchContainer = styled.div`
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

export function ProductSearch({ type, placeholder, value, onChange, onClick }) {
    return (
        <ProductSearchContainer>
            <InputSearch type={type} placeholder={placeholder} value={value} onChange={onChange} />
            <SearchIcon onClick={onClick} />
        </ProductSearchContainer>
    )
}