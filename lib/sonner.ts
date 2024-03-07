import { toast } from "sonner";

//chequear textos
export function sendCodeToast(email: string) {
    return toast.success(`Se envio el mail a ${email}`)
}

export function loginToast() {
    return toast.success("Iniciaste sesion")
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