import React from "react";
import {SearchInputHome,Login,OTPForm,Search,EditProfile} from "./styles"


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