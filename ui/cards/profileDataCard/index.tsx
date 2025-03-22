import { ReactNode } from "react"
import { Label, ParagraphBold } from "@/ui/typography"
import { ProfileDataContainer, ButtonsContainer } from "./styles"

type ProfileDataProps = {
    email: string,
    userName: string,
    address: string,
    phoneNumber: number,
    children: ReactNode,
}

export function ProfileDataCard({ email, userName, address, phoneNumber, children }: ProfileDataProps) {

    return (
        <ProfileDataContainer>
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
        </ProfileDataContainer>
    )
}