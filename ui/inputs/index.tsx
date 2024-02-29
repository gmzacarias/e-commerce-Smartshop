import styled from "styled-components"
import { Search } from "ui/icons"

const Input = styled.input`
background-color: var(--white);
border:solid 1px var(--grey);
border-radius: 3px;
min-width: 200px;
height: 30px;
text-align: center;
padding-right: 30px;

@media screen and (min-width:400px) {
    &{
        width: 250px;
    }
}

@media screen and (min-width:1000px){
    &{
        width: 350px;
    }
}
`

export const SearchInput = styled(Input)`
position: relative;

`
export const SearchIcon = styled(Search)`
    z-index: 1;
    color: var(--blue-dark);
    position: relative;
    top: 0;
    right: 34px;
`
const SearchInputHome = styled(Input)`
    padding-right: 0;
`

const FormInputs = styled(Input)`
text-align: left;
padding: 0 5px;


`

export function SearchInputNav({ type, placeholder, }) {
    return (
        <>
            <SearchInput type={type} placeholder={placeholder} />
            <SearchIcon />
        </>
    )
}

export function SearchInputIndex({ type, placeholder }) {
    return (
        <SearchInputHome type={type} placeholder={placeholder} />
    )
}

export function InputDefault({ type, placeholder }) {
    return <FormInputs type={type} placeholder={placeholder} />
}