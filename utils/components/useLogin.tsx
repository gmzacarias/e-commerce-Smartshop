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
    code: number
}

export function useLogin() {
    const [data, setData] = useAppData()
    const currentEmail: string = data.email

    const {
        handleSubmit: handleEmailSubmit,
        formState: { errors: emailErrors },
        control: controlEmail,
        trigger: triggerEmail,
    } = useForm<EmailFormValue>({
        defaultValues: { email: "" },
        mode: "onChange"
    })

    const {
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors },
        control: controlCode,
        trigger: triggerCode,
    } = useForm<CodeFormValue>({
        defaultValues: { code: 0 },
        mode: "onChange"
    })


    async function handleEmailForm(dataForm: EmailFormValue) {
        const { email } = dataForm
        const isValid = await triggerEmail("email")
        console.log("isValid",isValid)
        if (!isValid) {
            onErrorEmail()
            return
        }

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
        const isValid = await triggerCode("code")
        if (!isValid) {
            onErrorCode()
            return
        }

        const code = dataForm.code.toString()
        try {
            const res = await getToken(currentEmail, code)
            //agregar condicional si la respuesta es null, 
            //agregar toast y return
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

    return { handleEmailSubmit,handleEmailForm,handleCodeSubmit, handleCodeForm,currentEmail,controlEmail,controlCode }
}