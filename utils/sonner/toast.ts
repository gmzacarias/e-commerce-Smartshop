import { toast } from "sonner";
import { sendCode, getToken, saveToken } from "@/api/fetchApi"
//chequear textos
export function sendCodeToast(email: string) {
    return toast.success(`Se envio el mail a ${email}`)
}

export function loginToast() {
    return toast.success("Iniciaste sesion")
}

export function errorSendCodeToast(errors: string | undefined) {
    return toast.error(errors || "Error en el campo")
}

export function errorCodeToast(error: string | undefined) {
    return toast.error(error || "Error en el campo")
}

export function forwardCodeToast(email: string) {
    toast.success('Event has been created', {
        action: {
            label: 'reenviar codigo',
            onClick: async () => {
                await sendCode(email),
                    sendCodeToast(email)
            }
        },
    })
}

export function logoutToast() {
    return toast.info("Se cerro la sesion")
}

export function emptyInputToast() {
    return toast.warning("Debes completar todos los campos")
}

export function loginCartToast() {
    return toast.info("Debes iniciar sesion para agregar un producto")
}

export function addItemCartToast() {
    return toast.success("Se agrego el producto al carrito")
}

export function resetCartToast() {
    return toast.info("Se reseteo el carrito de compras")
}

export function deleteItemCartToast() {
    return toast.info("Se elimino el producto del carrito de compras")
}