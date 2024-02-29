import { toast } from "sonner";

export function sendCodeToast(email: string) {
    return toast.success(`Se envio el mail a ${email}`)
}

export function loginToast() {
    return toast.success("Iniciaste sesion")
}

export function logoutToast(){
    return toast.info("Se cerro la sesion")
}