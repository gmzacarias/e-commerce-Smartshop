import { ReactNode } from "react"
import { Label, ParagraphBold } from "@/ui/typography"
import { ProfileDataContainer, ButtonsContainer } from "./styles"
import { EditProfileForm } from "@/features/user/components/editProfileForm"

type ProfileDataProps = {
    isEditing: Boolean,
    email: string,
    userName: string,
    address: string,
    phoneNumber: number,
    children?: ReactNode,
}

export function ProfileDataCard({ isEditing, email, userName, address, phoneNumber, children }: ProfileDataProps) {

    return (
        <ProfileDataContainer>
            {isEditing ? (
                <EditProfileForm>
                    <ButtonsContainer>
                        {children}
                    </ButtonsContainer>
                </EditProfileForm>
            ) : (
                <>
                    <Label>
                        Email
                        <ParagraphBold>{email ? email : ""}</ParagraphBold>
                    </Label>
                    <Label>
                        Nombre Completo
                        <ParagraphBold>{userName ? userName : ""}</ParagraphBold>
                    </Label>
                    <Label>
                        Direccion
                        <ParagraphBold>{address ? address : ""}</ParagraphBold>
                    </Label>
                    <Label>
                        Celular
                        <ParagraphBold>{phoneNumber ? phoneNumber : ""}</ParagraphBold>
                    </Label>
                    <ButtonsContainer>
                        {children}
                    </ButtonsContainer>
                </>
            )
            }
        </ProfileDataContainer>
    )
}