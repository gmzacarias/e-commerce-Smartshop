import { useCart } from "lib/hooks"

export function Cart() {
    const dataCart = useCart()
    console.log("carrito", dataCart)


    return (
        <div>soy el carrito de compras</div>
    )
}