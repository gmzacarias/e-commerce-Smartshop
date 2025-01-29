"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { editProfile } from "@/lib/api";
import { useUserDataValue } from "@/lib/atoms";
import { emptyInputToast } from "@/lib/sonner";
import { useEffect } from "react";

interface DataFormValue {
    email: string,
    userName: string,
    address: string,
    phoneNumber: string,
}

export function useEditProfile() {
    const router = useRouter()
    const { userName, email, address, phoneNumber } = useUserDataValue()
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

    async function handleSubmitForm(data: DataFormValue) {
        const { email, userName, address, phoneNumber } = data
        const parsePhoneNumber = parseInt(phoneNumber)
        await editProfile(userName, email, address, parsePhoneNumber)
        router.replace("/me")
        return
    }

    function handleReset() {
        reset({
            email: "",
            userName: "",
            address: "",
            phoneNumber: "",
        })
    }
    function handleCancel() {
        router.replace("/me")
    }

    function onErrorForm() {

        return "hola"

    }
    return { handleSubmit, handleSubmitForm, handleReset, handleCancel, onErrorForm, control}
}