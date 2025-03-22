import { useProfile } from "@/features/user/hooks/useProfile"
import { SkeletonProfile } from "@/ui/skeletons/skeletonProfile"
import { Label, ParagraphBold } from "@/ui/typography"
import { DefaultButton } from "@/ui/buttons"
import { ProfileDataContainer, ButtonsContainer } from "./styles"
import { ErrorDataCard } from "@/ui/cards/errorDataCard"


export function ProfileData() {
    const { data, isLoading, error, isError, handleNavigation } = useProfile()

    if (isLoading) {
        return <SkeletonProfile />
    } else if (isError || data === undefined) {
        return <ErrorDataCard text="Hubo un error al cargar el perfil" error={error.message} />
    }

    return (
        <ProfileDataContainer>
            <Label>
                Email
                <ParagraphBold>{data ? data.email : ""}</ParagraphBold>
            </Label>
            <Label>
                Nombre Completo
                <ParagraphBold>{data ? data.userName : ""}</ParagraphBold>
            </Label>
            <Label>
                Direccion
                <ParagraphBold>{data ? data.address : ""}</ParagraphBold>
            </Label>
            <Label>
                Celular
                <ParagraphBold>{data ? data.phoneNumber : ""}</ParagraphBold>
            </Label>
            <ButtonsContainer>
                <DefaultButton onClick={() => handleNavigation("/me/edit")} title={"editar perfil"}>Editar</DefaultButton>
                <DefaultButton onClick={() => handleNavigation("/me/myorders")} title={"mis ordenes"}>Mis ordenes</DefaultButton>
            </ButtonsContainer>
        </ProfileDataContainer>
    )
}