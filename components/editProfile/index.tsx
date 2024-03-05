import styled from "styled-components"
import router from "next/router"
import { SubTitle, Label, Small, Paragraph } from "@/ui/typography"
import { InputDefault } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useUserDataValue } from "lib/atoms"
import { useState, useEffect } from "react"
import { editProfile } from "lib/api"
import { emptyInputToast } from "@/lib/sonner"

const EditProfileBody = styled.div`
    display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export function EditProfile() {
    const [value, setValue] = useState({
        email: "",
        userName: "",
        address: "",
        phoneNumber: "",
    })
    const { userName, email, address, phoneNumber } = useUserDataValue()

    useEffect(() => {
        setValue({
            email,
            userName,
            address,
            phoneNumber,
        });
    }, [email, userName, address, phoneNumber]);

    function handleChange(e) {
        const { name, value } = e.target;
        setValue((data) =>({
            ...data,
            [name]: value,
        })
        );
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (!value.email || !value.userName || !value.address || !value.phoneNumber) {
            // Handle the case where any input is empty (you can show an error message or perform any other action)
            console.log("input vacio")
            emptyInputToast()
            return
        }

        const parsePhoneNumber = parseInt(value.phoneNumber)
        await editProfile(value.userName, value.email, value.address, parsePhoneNumber)
        //sonner
        router.push("/me")
    }

    function handleReset() {
        setValue({
            email: "",
            userName: "",
            address: "",
            phoneNumber: "",
        });
    }

    function handleCancel() {
        router.push("/me")
    }

    return (
        <EditProfileBody>
            <SubTitle>Perfil</SubTitle>
            <FormContainer onSubmit={handleSubmit}>
                <Label>
                    <Small>Email</Small>
                    <InputDefault type="email" name="email" placeholder="ingresa tu email" value={value.email} onChange={handleChange} />
                </Label>
                <Label>
                    <Small>Nombre Completo</Small>
                    <InputDefault type="text" name="userName" placeholder="ingresa tu nombre completo" value={value.userName} onChange={handleChange} />
                </Label>
                <Label>
                    <Small>Direccion</Small>
                    <InputDefault type="text" name="address" placeholder="ingresa tu direccion" value={value.address} onChange={handleChange} />
                </Label>
                <Label>
                    <Small>Celular</Small>
                    <InputDefault type="number" name="phoneNumber" placeholder="ingresa tu numero" value={value.phoneNumber} onChange={handleChange} />
                </Label>
                <DefaultButton type="submit">
                    <Paragraph>GUARDAR</Paragraph>
                </DefaultButton>
                <DefaultButton type="reset" onClick={handleReset}>
                    <Paragraph>RESETEAR</Paragraph>
                </DefaultButton>
                <DefaultButton type="button" onClick={handleCancel}>
                    <Paragraph>CANCELAR</Paragraph>
                </DefaultButton>
            </FormContainer>
        </EditProfileBody>
    )
}