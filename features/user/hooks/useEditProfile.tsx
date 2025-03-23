"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { editProfile } from "@/api/editProfile";

import { useUserData } from "@/store/zustand/useUserData";

interface DataFormValue {
    email: string,
    userName: string,
    address: string,
    phoneNumber: string,
}

export function useEditProfile() {
    const router = useRouter()
    const { email, userName, address, phoneNumber } = useUserData()

    console.log("phone",email,phoneNumber)
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
            phoneNumber: phoneNumber.toString()
        },
        mode: "onSubmit"
    })

    async function handleSubmitForm(data: DataFormValue) {
        const { email, userName, address, phoneNumber } = data
        try {
            const parsePhoneNumber = parseInt(phoneNumber)
            await editProfile(userName, email, address, parsePhoneNumber)
            router.replace("/me")
            // toast datos actualizados
            return
        } catch (error) {
            //toast mensaje de error
        }
    }

    function handleReset() {
        reset({
            email: "",
            userName: "",
            address: "",
            phoneNumber: ""
        })
    }


    function onErrorForm() {
        return "soy el error"
    }

    return { handleSubmit, handleSubmitForm, handleReset, onErrorForm, control }
}