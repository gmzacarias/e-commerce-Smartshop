import { useProfile } from "@/utils/components/useProfile"
import { SubTitle, Label, Small, Paragraph, ParagraphBold } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import styled from "styled-components"


const MeBody = styled.div`
    display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:30px;
`
const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export function Me() {
    const { userData, handleEdit, handleMyOrders, handleCancel } = useProfile()

    return (
        <MeBody>
            <DataContainer>
                <SubTitle>Perfil</SubTitle>
                <Label>
                    <Small>Email</Small>
                    <ParagraphBold>{userData.email}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Nombre Completo</Small>
                    <ParagraphBold>{userData.userName}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Direccion</Small>
                    <ParagraphBold>{userData.address}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Celular</Small>
                    <ParagraphBold>{userData.phoneNumber}</ParagraphBold>
                </Label>
                <DefaultButton onClick={handleEdit}>
                    <Paragraph>Editar</Paragraph>
                </DefaultButton>
                <DefaultButton onClick={handleMyOrders}>
                    <Paragraph>Mis ordenes</Paragraph>
                </DefaultButton>
                <DefaultButton onClick={handleCancel}>
                    <Paragraph>Regresar</Paragraph>
                </DefaultButton>
            </DataContainer>
        </MeBody>
    )
}