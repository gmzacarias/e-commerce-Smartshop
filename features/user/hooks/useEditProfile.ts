import { useRouter } from "next/navigation";
import { editProfile } from "@/api/editProfile";
import { useDataForm } from "./useDataForm";
import { useUserData } from "@/store/zustand/useUserData";

export function useEditProfile() {
    const router = useRouter()
    const { email, userName, address, phoneNumber } = useUserData()
    const { handleSubmit, errors, control, reset } = useDataForm({ email, userName, address, phoneNumber })

    async function handleSubmitForm(data: DataFormValue) {
        const { email, userName, address, phoneNumber } = data
        try {

            await editProfile(userName, email, address, phoneNumber)
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
            phoneNumber: 0
        })
    }


    function onErrorForm() {
        return "soy el error"
    }

    return { handleSubmit, handleSubmitForm, handleReset, onErrorForm, control }
}