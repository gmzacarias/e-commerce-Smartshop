import styled from "styled-components"
import router from "next/router"
import { SubTitle, Label, Small, Paragraph } from "ui/texts"
import { InputDefault } from "ui/inputs"
import { DefaultButton } from "ui/buttons"

const EditProfileBody = styled.div`
    display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:30px;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
gap:10px;
`

export function EditProfile() {

function handleSubmit(e){
e.preventDefault()

}
function handleEdit() {
    //guardar datos modificados
    router.push("/cart")
}

function handleCancel() {
    router.push("/me")
}

return (
        <EditProfileBody>
            <FormContainer onSubmit={handleSubmit}>
                <SubTitle>Perfil</SubTitle>

                <Label>
                    <Small>Email</Small>
                    <InputDefault type="email" placeholder="ingresa tu email" />
                </Label>
                <Label>
                    <Small>Nombre Completo</Small>
                    <InputDefault type="text" placeholder="ingresa tu nombre completo" />
                </Label>
                <Label>
                    <Small>Direccion</Small>
                    <InputDefault type="text" placeholder="ingresa tu direccion" />
                </Label>
                <Label>
                    <Small>Celular</Small>
                    <InputDefault type="number" placeholder="ingresa tu numero" />
                </Label>
                <DefaultButton onClick={handleEdit}>
                    <Paragraph>Guardar</Paragraph>
                </DefaultButton>
                <DefaultButton onClick={handleCancel}>
                    <Paragraph>Cancelar</Paragraph>
                </DefaultButton>
            </FormContainer>
        </EditProfileBody>
    )
}