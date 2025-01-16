import router from "next/router"
import { useForm } from "react-hook-form";
import { sendCode, getToken, saveToken } from "lib/api"
import { useAppData } from "lib/atoms"
import { sendCodeToast, loginToast, errorSendCodeToast, errorCodeToast } from "lib/sonner"
import { GiConsoleController } from "react-icons/gi";


interface EmailFormValue {
    email: string
}

interface CodeFormValue {
    otp: string[]
}

export function useLogin() {
    const [data, setData] = useAppData()
    const currentEmail: string = data.email

    const {
        handleSubmit: handleEmailSubmit,
        formState: { errors: emailErrors },
        control: controlEmail,
    } = useForm<EmailFormValue>({
        defaultValues: { email: "" },
        mode:"onSubmit"
    })

    const {
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors },
        control: controlCode,

    } = useForm<CodeFormValue>({
        defaultValues:{otp:["","","","",""]},
        mode:"onSubmit"
    })


    async function handleEmailForm(dataForm: EmailFormValue) {
        const { email } = dataForm
        const cleanEmail = email.trim().toLowerCase()
        setData({
            ...data,
            email: cleanEmail,
        })

        await sendCode(cleanEmail)
        sendCodeToast(cleanEmail)
        return
    }

    function onErrorEmail() {
        if (emailErrors.email) {
            errorSendCodeToast(emailErrors.email.message)
        }
    }

    async function handleCodeForm(dataForm: CodeFormValue) {
        const code = dataForm.otp.join("")

        try {
            const response = await getToken(currentEmail, code)
            if (response.includes("incorrecto")) {
              alert("codigo incorrecto")
                return
            }else if (response.includes("expirado")){
                alert("codigo incorrecto")
                return  
            }

            setData({
                ...data,
                isLogged: true,
            })

            const token: string = response.token
            loginToast()
            saveToken(token)
            router.push("/")
            return
        } catch (error) {
            console.error(error)
        }
    }

    function onErrorCode() {
        if (codeErrors.otp) {
            errorCodeToast(codeErrors.otp.message)
        }
    }

    return { handleEmailSubmit,handleEmailForm,handleCodeSubmit, handleCodeForm,currentEmail,controlEmail,controlCode,onErrorEmail,onErrorCode }
}