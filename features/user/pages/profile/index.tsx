import { useProfile } from "@/features/user/components/useProfile"
import { SubTitle, Label, Paragraph, ParagraphBold } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import { ProfileBody, PageContainer, ErrorContainer, ProfileDataContainer, ButtonsContainer } from "./styles"
import { SkeletonProfile } from "@/ui/skeletons/skeletonProfile"

export function Profile() {
    const { data, isLoading, error, isError, handleEdit, handleMyOrders, handleCancel } = useProfile()

    if (isError) {
        return (
            <ProfileBody>
                <PageContainer>
                    <SubTitle>Mi Perfil</SubTitle>
                    <ErrorContainer>
                        <ParagraphBold>Hubo un error al cargar el perfil</ParagraphBold>
                        {/* <Paragraph>{error.message}</Paragraph> */}
                    </ErrorContainer>
                </PageContainer>
            </ProfileBody>
        )
    }

    return (
        <ProfileBody>
            <PageContainer>
                <SubTitle>Mi perfil</SubTitle>
                {isLoading ? (
                    <SkeletonProfile />
                ) : (
                    <ProfileDataContainer>
                        <Label>
                            Email
                            <ParagraphBold>{data.email}</ParagraphBold>
                        </Label>
                        <Label>
                            Nombre Completo
                            <ParagraphBold>{data.userName}</ParagraphBold>
                        </Label>
                        <Label>
                            Direccion
                            <ParagraphBold>{data.address}</ParagraphBold>
                        </Label>
                        <Label>
                            Celular
                            <ParagraphBold>{data.phoneNumber}</ParagraphBold>
                        </Label>
                        <ButtonsContainer>
                            <DefaultButton onClick={handleEdit} title={"editar perfil"}>Editar</DefaultButton>
                            <DefaultButton onClick={handleMyOrders} title={"mis ordenes"}>Mis ordenes</DefaultButton>
                            <DefaultButton onClick={handleCancel} title={"volver al inicio"}>Regresar</DefaultButton>
                        </ButtonsContainer>
                    </ProfileDataContainer>
                )}
            </PageContainer>
        </ProfileBody>
    )
}