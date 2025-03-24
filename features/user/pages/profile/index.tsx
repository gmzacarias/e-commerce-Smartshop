import { ProfileData } from "@/features/user/components/profileData"
import { PagesContainer } from "@/ui/containers/pagesContainer"

export function Profile() {
    return (<PagesContainer $isAuth={false} subTitleText="Mis datos">
        <ProfileData />
    </PagesContainer>
    )
}