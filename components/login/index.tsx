import router from "next/router"
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendCode, getToken, saveToken } from "lib/api"
import { sendCodeToast, loginToast, errorSendCodeToast, errorCodeToast, forwardCodeToast } from "lib/sonner"
import { useAppData } from "lib/atoms"
import { LoginBody, LoginContainer, FormContainer, LogoContainer } from "./styles";
import { Title, SubTitle, Label, Small, Paragraph } from "ui/typography"
import { InputDefault } from "@/ui/inputs"
import { DefaultButton } from "ui/buttons"
import { useEffect } from "react";
import { BrandPagesIcon } from "@/ui/icons";

interface EmailFormValue {
    email: string
}

interface CodeFormValue {
    code: number
}

export function Login() {
    const [data, setData] = useAppData()
    const emailCheck: string = data.email
    console.log("email check", emailCheck, data)
    const {
        register: registerEmail,
        handleSubmit: handleEmailSubmit,
        formState: { errors: emailErrors }
    } = useForm<EmailFormValue>()

    const {
        register: registerCode,
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors }
    } = useForm<CodeFormValue>()


    //     useEffect(() => {
    //         const hola = "hola"
    //         if()
    //     ;
    // }, [emailCheck]);

    async function handleEmailForm(dataForm: EmailFormValue) {
        const { email } = dataForm
        const cleanEmail = email.trim().toLowerCase()
        console.log(email)
        setData({
            ...data,
            email: cleanEmail,
        })
        await sendCode(cleanEmail)
        sendCodeToast(cleanEmail)
        // forwardCodeToast(cleanEmail)
        return
    }

    function onErrorEmail() {
        if (emailErrors.email) {
            errorSendCodeToast(emailErrors.email.message)
        }
    }

    async function handleCodeForm(dataForm: CodeFormValue) {
        const email: string = data.email
        const code = dataForm.code.toString()
        try {
            const res = await getToken(email, code)
            //agregar condicional si la respuesta es null, 
            //agregar toast y return
            console.log("res", res)
            if (res === undefined) {
                console.log("error")
                //toast error de codigo
                return
            }
            setData({
                ...data,
                isLogged: true,
            })

            const token: string = res.token
            loginToast()
            saveToken(token)
            router.push("/")
            return
        } catch (error) {
            console.error(error)
        }
    }

    function onErrorCode() {
        if (codeErrors.code) {
            errorCodeToast(codeErrors.code.message)
        }
    }

    return (
        <LoginBody>
            {!emailCheck ? (
                <>
                    <LogoContainer>
                        <BrandPagesIcon/>
                        <SubTitle>registrate para comprar tu smartphone favorito</SubTitle>

                    </LogoContainer>
                    <LoginContainer>
                        <form onSubmit={handleEmailSubmit(handleEmailForm, onErrorEmail)}>
                            <Label >
                                <Small>Email</Small>
                                <input type="text"{...registerEmail("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Formato de email inválido",
                                    },
                                }
                                )}
                                    placeholder="example@mail.com" />
                            </Label>
                            <DefaultButton>
                                <Paragraph>CONTINUAR</Paragraph>
                            </DefaultButton>
                        </form>
                    </LoginContainer>
                </>
            ) : (
                <LoginContainer>
                    <SubTitle>CÓDIGO</SubTitle>
                    <form onSubmit={handleCodeSubmit(handleCodeForm, onErrorCode)}>
                        <Label>
                            <Small>Código</Small>
                            <input type="number"{...registerCode("code", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]{1,5}$/,
                                    message: "Formato de codigo inválido",
                                },
                            }
                            )}
                                placeholder="*****" />
                        </Label>
                        <DefaultButton type="submit">
                            <Paragraph>INGRESAR</Paragraph>
                        </DefaultButton>
                    </form>
                    <DefaultButton type="submit">
                        <Paragraph>cancelar</Paragraph>
                    </DefaultButton>
                    <span>reenviar codigo</span>
                </LoginContainer>
            )}
        </LoginBody >
    )
}