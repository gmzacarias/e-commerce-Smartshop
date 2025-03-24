"use client"
import { useProfile } from "@/features/user/hooks/useProfile"
import { SkeletonProfile } from "@/ui/skeletons/skeletonProfile"
import { ProfileDataCard } from "@/ui/cards/profileDataCard"
import { ErrorDataCard } from "@/ui/cards/errorDataCard"
import { DefaultButton } from "@/ui/buttons"

export function ProfileData() {
    const { data, isLoading, error, isError, handleNavigation } = useProfile()

    if (isLoading) {
        return <SkeletonProfile />
    } else if (isError || data === undefined) {
        return <ErrorDataCard text="Hubo un error al cargar el perfil" error={error.message} />
    }

    return (
        <ProfileDataCard isEditing={false} email={data.email} userName={data.userName} address={data.address} phoneNumber={data.phoneNumber}>
            <DefaultButton onClick={() => handleNavigation("/me/edit")} title={"editar perfil"}>Editar</DefaultButton>
            <DefaultButton onClick={() => handleNavigation("/me/myorders")} title={"mis ordenes"}>Mis ordenes</DefaultButton>
        </ProfileDataCard>
    )
}