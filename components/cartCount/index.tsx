import { CountButton } from "ui/buttons"
import { Small } from "ui/typography"
import { useState ,useEffect} from "react"
import styled from "styled-components"
import { addItemCart,deleteItemCart } from "lib/api"
import { useCart } from "@/lib/hooks"

const CartCountBody = styled.div`
    display: flex;
    flex-direction: row;

`

export function CartCount({id}) {
    const [count, setCount] = useState(1)
    const [isProductInCart, setIsProductInCart] = useState(false);

useEffect(()=>{

 const cartItems = useCart() as any
 const existingProduct = cartItems.find((item) => item.id === id);
 if (existingProduct) {
    setIsProductInCart(true);
  }

},[id])



    function handleChange(e) {
        const parseValue = parseInt(e.target.value, 10)
        if (parseValue <= 10) {
            setCount(parseValue)
        }
    }

    async function handleIncrement() {
        if (isProductInCart) {
            // Si el producto ya está en el carrito, agregar uno nuevo
            await addItemCart(id);
          } else {
            // Si no está en el carrito, agregarlo
            await addItemCart(id);
            setIsProductInCart(true);
          }
    }

    function handleDecrement() {
        if (count > 1) {
            setCount(count - 1);
            
        }
    }

    return (
        <CartCountBody>
            <CountButton onClick={handleDecrement}>
                <Small>-</Small>
            </CountButton>
            <input type="number" min={1} max={10} value={count} onChange={handleChange} />
            <CountButton onClick={handleIncrement}>
                <Small>+</Small>
            </CountButton>
        </CartCountBody>
    )
}