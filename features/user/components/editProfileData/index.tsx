import { useUserData } from "@/store/zustand/useUserData"
import { ProfileDataCard } from "@/ui/cards/profileDataCard"
import { FormButton } from "@/ui/buttons"
import { useEditProfile } from "@/features/user/hooks/useEditProfile"

export function EditProfileData() {
    const { email, userName, address, phoneNumber } = useUserData()
    const { handleReset } = useEditProfile()

    return (
        <ProfileDataCard isEditing={true} email={email} userName={userName} address={address} phoneNumber={phoneNumber}>
            <FormButton title="guardar">
                Guardar
            </FormButton>
            <FormButton onClick={handleReset} title={"resetear formulario"}>
                Resetear
            </FormButton>
        </ProfileDataCard>
    )
}