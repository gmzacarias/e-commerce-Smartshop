import { CartImageProduct } from "@/ui/images";
import { ParagraphBold, Small } from "ui/typography"
import styled from "styled-components"
// import {CountInputCart} from "ui/inputs"
import { useState, useEffect } from "react"
import { useUpdateQuantity } from "@/hooks/recoil/atoms"
import {CountButton,TrashButton} from "ui/buttons"



const ItemCartBody = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
:nth-child(3){
   justify-content: center;
}
:nth-child(4){
   width: 70px;
   justify-content: center;
}


`
const CardContainer = styled.div`
    display: flex;
    width: 70px;
    flex-direction: column;
    

`

const CountContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`


export function ItemCart({ key, id, photo, model, brand, colour, price, quantity, onDelete }) {
    const [count, setCount] = useState(quantity)
    const [totalPrice, setTotalPrice] = useState(price * count)
    const updateQuantity = useUpdateQuantity()
    console.log("contador", count)

    function handleChange(e) {
        const newCount = parseInt(e.target.value)
        setCount(newCount)
        setTotalPrice(price * newCount)
        updateQuantity({ itemId: id, newQuantity: newCount });
    }

    function handleIncrement() {
        if (count >= 10) {
            alert("el maximo de compra son 10 unidades")
            return
        }
        setCount(count + 1)
        setTotalPrice(price * (count + 1))
        updateQuantity({ itemId: id, newQuantity: count + 1 });
    }

    function handleDecrement() {
        if (count > 1) {
            setCount(count - 1);
            setTotalPrice(price * (count - 1))
            updateQuantity({ itemId: id, newQuantity: count - 1 });
        }
    }



    return (

        <ItemCartBody key={key} id={id} >
            <CartImageProduct src={photo} alt={`${brand} ${model}`} />
            <CardContainer>
                <ParagraphBold>{brand}</ParagraphBold>
                <Small>{model}</Small>
                <Small>{colour}</Small>
            </CardContainer>

            <CountContainer>
                <CountButton type="button" onClick={handleDecrement}>-</CountButton>
                {/* <CountInputCart type="number" min={1} max={10} value={count} onChange={handleChange} /> */}
                <CountButton type="button" onClick={handleIncrement}>+</CountButton>
            </CountContainer>
            <ParagraphBold>${totalPrice}</ParagraphBold>
            <TrashButton onClick={onDelete}/>
        </ItemCartBody>

    )
}