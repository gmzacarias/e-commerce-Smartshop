import { EditProfileData } from "@/features/user/components/editProfileData"
import { PagesContainer } from "@/ui/containers/pagesContainer"

export function EditProfile() {
    return (
        <PagesContainer $isAuth={false} subTitleText="Editar mis datos">
            <EditProfileData />
        </PagesContainer>
    )
}