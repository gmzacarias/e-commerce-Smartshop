import { useForm } from "react-hook-form"

export function useOTPLogin() {
    const {
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors },
        control: controlCode,

    } = useForm<CodeFormValue>({
        defaultValues: { otp: ["", "", "", "", ""] },
        mode: "onSubmit"
    })
    return { handleCodeSubmit, codeErrors, controlCode }
}