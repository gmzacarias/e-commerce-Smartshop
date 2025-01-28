import { useProfile } from "@/utils/components/useProfile"
import { SubTitle, Label, Small, Paragraph, ParagraphBold } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import { ProfileBody, PageContainer, ProfileDataContainer, ButtonsContainer } from "./styles"
import { SkeletonProfile } from "@/components/skeletons/skeletonProfile"

export function Profile() {
    const { data, isLoading, error, isError, handleEdit, handleMyOrders, handleCancel } = useProfile()

    if (isError) {
        return <div>no hay productos</div>
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