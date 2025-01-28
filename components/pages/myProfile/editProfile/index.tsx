import styled from "styled-components"
import router from "next/router"
import { SubTitle, Label, Small, Paragraph } from "@/ui/typography"
import { InputDefault } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useUserDataValue } from "lib/atoms"
import { useState, useEffect } from "react"
import { editProfile } from "lib/api"
import { emptyInputToast } from "@/lib/sonner"
import { ButtonsContainer, EditProfileDataContainer, EditProfileSection, PageContainer } from "./styles"




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
        setValue((data) => ({
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
        <EditProfileSection>
            <PageContainer>
                <SubTitle>Editar mis datos</SubTitle>
                <EditProfileDataContainer>
                    <form onSubmit={handleSubmit}>
                        <Label>
                            Email
                            <InputDefault type="email" name="email" placeholder="ingresa tu email" value={value.email} onChange={handleChange} />
                        </Label>
                        <Label>
                            Nombre Completo
                            <InputDefault type="text" name="userName" placeholder="ingresa tu nombre completo" value={value.userName} onChange={handleChange} />
                        </Label>
                        <Label>
                            Direccion
                            <InputDefault type="text" name="address" placeholder="ingresa tu direccion" value={value.address} onChange={handleChange} />
                        </Label>
                        <Label>
                            Celular
                            <InputDefault type="number" name="phoneNumber" placeholder="ingresa tu numero" value={value.phoneNumber} onChange={handleChange} />
                        </Label>
                        <ButtonsContainer>
                            <DefaultButton type="submit">
                                Guardar
                            </DefaultButton>
                            <DefaultButton type="reset" onClick={handleReset}>
                                Resetear
                            </DefaultButton>
                            <DefaultButton type="button" onClick={handleCancel}>
                                Cancelar
                            </DefaultButton>
                        </ButtonsContainer>
                    </form>
                </EditProfileDataContainer>
            </PageContainer >
        </EditProfileSection >
    )
}