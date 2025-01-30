import React from "react";
import styled from "styled-components"


type InputProps = {
    type: "text" | "number" | "search" | "email" | "password",
    name?: string | any
    placeholder?: string
    value?: string | any
    required?: boolean
    onChange?: (e?) => void
};

type OTPProps = InputProps & {
    maxLength: number,
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}



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
const SearchInputHome = styled(Input)`
   padding:unset;
   margin-top:5px;; 
   `

const FormInputs = styled(Input)`
     padding:unset;
    text-align: left;
    margin-top:5px;
`

const CountInput = styled(Input)`
    min-width: 30px;
    width: 30px;
    padding: unset;
 
    &input[type=number]::-webkit-inner-spin-button,
&input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    
    
    `




export const SearchContainer = styled.div`
  display: flex;
`


const Search = styled.input`
    width: 100%;
    min-width: 300px;
    height: 50px;
    padding: 10px 50px 10px 5px;
  
    
    border: none;
    border-radius: 4px;
      box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
      outline: none;
      background-color:${({ theme }) => theme.backgroundSecondary} ;
      color:${({ theme }) => theme.color};
    position:relative;
    font-size:24px;
    caret-color: ${({ theme }) => theme.color};

    @media (min-width:769px){

    }
    `


const SearchIcon = styled(Search)`
          z-index: 1;
          color: var(--blue-dark);
          position: relative;
          top: 0;
          right: 34px;
      `
const searchContainer = styled.div`
    display: flex;
    flex-direction: row;

`

const Login = styled(Input)`
  border-radius: 4px;
  border:solid 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  outline: none;
  width:260px;
  height: 48px;
  padding:0 16px;
  text-align:left;
   
  &:focus {
      border-color: #0091ea;
   }

  @media(min-width:769px){
      width:312px;
   }
`

const OTPForm = styled(Input)`
   border-radius: 4px;
   border:solid 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
   outline: none;
   width: 44px;
   min-width: unset;
   height: 40px;
   padding: unset;
   text-align:center;
   font-size: 24px;

   &:valid,
   &:focus{
      border-color: #0091ea;
    }
   
   &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

& {
  -moz-appearance: textfield;
}
   @media(min-width:769px){
      width:54px;
      height:50px;
   }
`
const EditProfile = styled(Input)`
  border-radius: 4px;
  border:solid 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  outline: none;
  width:260px;
  height: 48px;
  padding:0 16px;
  text-align:left;
   
  &:focus {
      border-color: #0091ea;
   }

  @media(min-width:769px){
      width:312px;
   }
`


/*inputs */
export function SearchInputIndex({ type, name, placeholder, value, onChange }: InputProps) {
    return <SearchInputHome type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
}

export function LoginInput({ type, name, placeholder, value, required, onChange }: InputProps) {
    return <Login type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />
}

export function EditProfileInput({ type, name, placeholder, value, required, onChange }: InputProps) {
    return <EditProfile type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />
}

export function OTPInput({ type, name, placeholder, value, maxLength, required, onChange, onKeyUp }: OTPProps, ref: React.Ref<HTMLInputElement>) {
    return <OTPForm type={type} name={name} ref={ref} placeholder={placeholder} value={value} maxLength={maxLength} onChange={onChange} onKeyUp={onKeyUp} required={required} />
}

export const RefOTPInput = React.forwardRef(OTPInput)

// export function CountInputCart({ type, min, max, value, onChange }: inputProps) {
//     return <CountInput type={type} min={min} max={max} value={value} onChange={onChange} />

// }


export function InputSearch({ type, placeholder, value, onChange }: InputProps) {
    return (
        <Search type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}