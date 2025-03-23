import { EditProfileData } from "../../components/editProfileData"
import { SubTitle } from "@/ui/typography"
import { EditProfileSection, PageContainer } from "./styles"



export function EditProfile() {

    return (
        <EditProfileSection>
            <PageContainer>
                <SubTitle>Editar mis datos</SubTitle>
                <EditProfileData />
            </PageContainer >
        </EditProfileSection >
    )
}