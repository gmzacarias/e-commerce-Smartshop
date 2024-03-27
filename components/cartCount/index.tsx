import { CountButton } from "ui/buttons"
import { Small, ParagraphBold } from "ui/typography"
import { useState, useEffect, use } from "react"
import styled from "styled-components"
import { useCart, useCheckoutCart} from "@/lib/atoms"

const CartCountBody = styled.div`
    display: flex;
    flex-direction: row;
`

const InputCount = styled.input`
    width: 30px;
    height: 20px;
    border: none;
    text-align: center;

  &[type=number]::-webkit-inner-spin-button, 
&[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

`
const CountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0 20px;
`

export function CartCount({ id, price }) {
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price * count)
    const setAddProduct = useCheckoutCart()


    function handleChange(e) {
        const newCount = parseInt(e.target.value)
        setCount(newCount)
        setTotalPrice(price * newCount)

     checkout(id,newCount)

    }



    function handleIncrement() {
        if (count >= 10) {
            alert("el maximo de compra son 10 unidades")
            return
        }
        setCount(count + 1)
        setTotalPrice(price * (count + 1))
    }

    function handleDecrement() {
        if (count > 1) {
            setCount(count - 1);
            setTotalPrice(price * (count - 1))
        }
    }
 function checkout(id,quantity){
    const newItem ={
        id:id,
        quantity:quantity
    }
    setAddProduct(newItem)
 }


    return (
        <CartCountBody id={id}>
            <CountContainer>

                <CountButton onClick={handleDecrement}>
                    <Small>-</Small>
                </CountButton>
                <InputCount type="number" min={1} max={10} value={count} onChange={handleChange} />
                <CountButton onClick={handleIncrement}>
                    <Small>+</Small>
                </CountButton>
            </CountContainer>
            <ParagraphBold>${totalPrice}</ParagraphBold>

        </CartCountBody>
    )
}