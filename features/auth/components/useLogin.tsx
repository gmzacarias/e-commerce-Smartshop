import router from "next/router"
import { useForm } from "react-hook-form";
import {saveToken } from "@/api/fetchApi"
import { sendCode} from "@/api/sendCode";
import { getToken } from "@/api/getToken";
import { useAppData } from "@/hooks/recoil/atoms"
import { sendCodeToast, loginToast, errorSendCodeToast, errorCodeToast } from "@/utils/sonner/toast"
import { GiConsoleController } from "react-icons/gi";
import { useEffect, useRef } from "react";


interface EmailFormValue {
    email: string
}

interface CodeFormValue {
    otp: string[]
}

export function useLogin() {
    const otpRef = useRef<(HTMLInputElement | null)[]>([])
    const [data, setData] = useAppData()
    const currentEmail: string = data.email
    const {
        handleSubmit: handleEmailSubmit,
        formState: { errors: emailErrors },
        control: controlEmail,
    } = useForm<EmailFormValue>({
        defaultValues: { email: "" },
        mode: "onSubmit"
    })

    const {
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors },
        control: controlCode,

    } = useForm<CodeFormValue>({
        defaultValues: { otp: ["", "", "", "", ""] },
        mode: "onSubmit"
    })

    function cleanEmail(email: string) {
        return email.trim().toLowerCase()
    }

    async function handleEmailForm(dataForm: EmailFormValue) {
        const { email } = dataForm
        const recipientEmail = cleanEmail(email)

        setData({
            ...data,
            email: recipientEmail,
        })
        await sendCode(recipientEmail)
        sendCodeToast(recipientEmail)
        return
    }

    async function resendCode() {
        await sendCode(currentEmail)
        sendCodeToast(currentEmail)
        return
    }

    function onErrorEmail() {
        if (emailErrors.email) {
            errorSendCodeToast(emailErrors.email.message)
        }
    }

    async function handleCodeForm(dataForm: CodeFormValue){
        const code = dataForm.otp.join("")
        try {
            const response = await getToken(currentEmail, code)
            setData({
                ...data,
                isLogged: true,
            })
            const token: string = response.token
            loginToast()
            saveToken(token)
            router.push("/")
            return
        } catch (error: any) {
            if (error.message.includes("incorrecto")) {
                errorCodeToast(error.message)
            }
            else if (error.message.includes("expirado")) {
                errorCodeToast(error.message)
            }
        }
    }

    function onErrorCode() {
        for (let index = 0; index < 5; index++) {
            const error = codeErrors?.otp?.[index]
            if (error && error.message) {
                errorCodeToast(error.message)
                return
            }
        }
        if (codeErrors.otp) {
            errorCodeToast(codeErrors.otp.message)
        }
    }

    function handleKeyUp(index: number) {
        const currentInput = otpRef?.current[index]
        if (currentInput?.value.length === 1) {
            const nextInput = otpRef.current[index + 1]
            if (nextInput) {
                nextInput.focus();
                return true
            }
            return
        } else {
            return false
        }
    }

    return { handleEmailSubmit, handleEmailForm, handleCodeSubmit, handleCodeForm, handleKeyUp, otpRef, currentEmail, controlEmail, controlCode, onErrorEmail, onErrorCode, resendCode}
}