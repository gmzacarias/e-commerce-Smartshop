import styled from "styled-components"
import router from "next/router"
import { SubTitle, Label, Small, Paragraph, ParagraphBold } from "@/ui/typography"
import { InputDefault } from "ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useMe } from "@/lib/hooks"
import { useUserData } from "@/lib/atoms"
import { useEffect } from "react"


const MeBody = styled.div`
    display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:30px;
`
const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export function Me() {
    const data = useMe()
    const [userData, setUserData] = useUserData()
    useEffect(() => {
        if (data) {
            setUserData({
                ...data,
                email: data.email,
                userName: data.userName,
                address: data.address,
                phoneNumber: data.phoneNumber,
            })
        }
    }, [data])

    console.log("datita", userData)

    function handleEdit() {
        router.push("/me/edit")
    }

    function handleCancel() {
        router.push("/")
    }

    function handleMyOrders() {
        router.push("/me/myorders")
    }

    return (
        <MeBody>
            <DataContainer>
                <SubTitle>Perfil</SubTitle>
                <Label>
                    <Small>Email</Small>
                    <ParagraphBold>{userData.email}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Nombre Completo</Small>
                    <ParagraphBold>{userData.userName}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Direccion</Small>
                    <ParagraphBold>{userData.address}</ParagraphBold>
                </Label>
                <Label>
                    <Small>Celular</Small>
                    <ParagraphBold>{userData.phoneNumber}</ParagraphBold>
                </Label>
                <DefaultButton onClick={handleEdit}>
                    <Paragraph>Editar</Paragraph>
                </DefaultButton>
                <DefaultButton onClick={handleMyOrders}>
                    <Paragraph>Mis ordenes</Paragraph>
                </DefaultButton>
                <DefaultButton onClick={handleCancel}>
                    <Paragraph>Regresar</Paragraph>
                </DefaultButton>
            </DataContainer>
        </MeBody>
    )
}