import styled from "styled-components"
import { Search } from "ui/icons"

type inputProps = {
    type: "text" | "number" | "search" | "email" | "password",
    name?: string | any
    placeholder: string
    value?: string | any
    required?: boolean
    onChange?: (e?) => void
};

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

const SearchInput = styled(Input)`
position: relative;
`
const SearchIcon = styled(Search)`
    z-index: 1;
    color: var(--blue-dark);
    position: relative;
    top: 0;
    right: 34px;
`
const SearchInputHome = styled(Input)`
   padding:unset;
   margin:5px 0; 
`

const FormInputs = styled(Input)`
     text-align: left;
     padding: 0 5px;
`

export function SearchInputNav({ type,name,placeholder,value,onChange }:inputProps) {
    return (
        <>
            <SearchInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <SearchIcon />
        </>
    )
}

export function SearchInputIndex({ type,name,placeholder,value,onChange }:inputProps) {
    return <SearchInputHome type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
}

export function InputDefault({ type,name,placeholder,value,onChange }:inputProps) {
    return <FormInputs type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
}