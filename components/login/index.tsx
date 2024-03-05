import router from "next/router"
import { sendCode, getToken, saveToken } from "lib/api"
import { sendCodeToast, loginToast } from "lib/sonner"
import { useAppData } from "lib/atoms"
import styled from "styled-components"
import { Title, SubTitle, Label, Small, Paragraph } from "ui/typography"
import { InputDefault } from "@/ui/inputs"
import { DefaultButton } from "ui/buttons"

const LoginBody = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`

const FormContainer=styled.form`
flex-direction: column;
`

export function Login() {
    const [data, setData] = useAppData()
    async function handleEmailForm(e) {
        e.preventDefault()
        const email = e.target.email.value
        setData({
            ...data,
            email: email
        })
        await sendCode(email)
        sendCodeToast(email)
        return
    }

    async function handleCodeForm(e) {
        e.preventDefault()
        const email = data.email
        const code = e.target.code.value
        try {
            const res = await getToken(email, code)
            setData({
                ...data,
                isLogged: true,
            })
            const token = res.token
            loginToast()
            saveToken(token)
            router.push("/")
            return
        } catch (error) {
            console.error(error)
        }
    }

    const emailFormStyle = {
        display: data.email ? "none" : "flex"
    };

    const codeFormStyle = {
        display: data.email ? "block" : "none"
    };



    return (
        <LoginBody>
            <LoginContainer style={emailFormStyle}>
                <SubTitle>INGRESAR</SubTitle>
                <FormContainer onSubmit={handleEmailForm}>
                    <Label >
                        <Small>Email</Small>
                        <InputDefault type="email" name="email" placeholder="Ingresa tu email" />
                    </Label>
                    <DefaultButton>
                        <Paragraph>CONTINUAR</Paragraph>
                    </DefaultButton>
                </FormContainer>
            </LoginContainer>
            <LoginContainer style={codeFormStyle}>
                <SubTitle>CÓDIGO</SubTitle>
                <FormContainer onSubmit={handleCodeForm}>
                    <Label>
                        <Small>Código</Small>
                        <InputDefault type="number" name="code" placeholder="Ingresa tu código" />
                    </Label>
                    <DefaultButton type="submit">
                        <Paragraph>INGRESAR</Paragraph>
                    </DefaultButton>
                </FormContainer>
            </LoginContainer>
        </LoginBody >
    )
}