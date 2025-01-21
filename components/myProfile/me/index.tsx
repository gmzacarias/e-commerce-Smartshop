import { useProfile } from "@/utils/components/useProfile"
import { SubTitle, Label, Small, Paragraph, ParagraphBold } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import { ProfileBody, PageContainer, ProfileDataContainer } from "./styles"

export function Me() {
    const { userData, handleEdit, handleMyOrders, handleCancel } = useProfile()

    return (
        <ProfileBody>

            <PageContainer>
                <SubTitle>Mi perfil</SubTitle>
                <ProfileDataContainer>
                    <Label>
                        Email
                        <ParagraphBold>{userData.email}</ParagraphBold>
                    </Label>
                    <Label>
                        Nombre Completo
                        <ParagraphBold>{userData.userName}</ParagraphBold>
                    </Label>
                    <Label>
                        Direccion
                        <ParagraphBold>{userData.address}</ParagraphBold>
                    </Label>
                    <Label>
                        Celular
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
                </ProfileDataContainer>
            </PageContainer>
        </ProfileBody>
    )
}