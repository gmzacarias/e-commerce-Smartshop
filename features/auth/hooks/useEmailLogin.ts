import { useForm } from "react-hook-form"

export function useEmailLogin(email: string) {
    const currentEmail: string = email
    const {
        handleSubmit: handleEmailSubmit,
        formState: { errors: emailErrors },
        control: controlEmail,
    } = useForm<EmailFormValue>({
        defaultValues: { email: "" },
        mode: "onSubmit"
    })
    return { currentEmail, handleEmailSubmit, emailErrors, controlEmail }
}