import { ProfileData } from "@/features/user/components/profileData/profileData"
import { SubTitle } from "@/ui/typography"
import { ProfileBody, PageContainer } from "./styles"

export function Profile() {

    return (
        <ProfileBody>
            <PageContainer>
                <SubTitle>Mi perfil</SubTitle>
                <ProfileData />
            </PageContainer>
        </ProfileBody>
    )
}