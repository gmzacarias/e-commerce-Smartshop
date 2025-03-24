import { useForm } from "react-hook-form"

export function useDataForm({ email, userName, address, phoneNumber }: DataFormParams) {
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<DataFormValue>({
        defaultValues: {
            email: email,
            userName: userName,
            address: address,
            phoneNumber: phoneNumber
        },
        mode: "onSubmit"
    })
    return { handleSubmit, errors, control, reset }
}