"use client"
import { useUserData } from "@/store/zustand/useUserData"
import { useEditProfile } from "@/features/user/hooks/useEditProfile"
import { ProfileDataCard } from "@/ui/cards/profileDataCard"
import { FormButton, DefaultButton } from "@/ui/buttons"

export function EditProfileData() {
    const { email, userName, address, phoneNumber } = useUserData()
    const { handleReset } = useEditProfile()

    return (
        <ProfileDataCard isEditing={true} email={email} userName={userName} address={address} phoneNumber={phoneNumber}>
            <DefaultButton type="submit" title={"guardar cambios"}>Guardar</DefaultButton>
            <DefaultButton onClick={handleReset} title={"resetear formulario"}>Resetear</DefaultButton>
        </ProfileDataCard>
    )
}