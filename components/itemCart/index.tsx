import { CartImageProduct } from "@/ui/images";
import { ParagraphBold, Small } from "ui/typography"
import styled from "styled-components"

import { useState } from "react"


const ItemCartBody = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`
const CardContainer = styled.div`
    display: flex;
    width: 70px;
    flex-direction: column;
    

`


export function ItemCart({ key, id, photo, model, brand, colour, price, onDelete }) {
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price * count)

    function handleChange(e) {
        const newCount = parseInt(e.target.value)
        setCount(newCount)
        setTotalPrice(price * newCount)
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
 
 


    return (
        
        <ItemCartBody key={key} id={id}>
            <CartImageProduct src={photo} alt={`${brand} ${model}`} />
            <CardContainer>
                <ParagraphBold>{brand}</ParagraphBold>
                <Small>{model}</Small>
                <Small>{colour}</Small>
            </CardContainer>
            <button onClick={handleDecrement}>-</button>
            <input type="number" min={1} max={10} value={count} onChange={handleChange} />
            <button onClick={handleIncrement}>-</button>
            <ParagraphBold>${totalPrice}</ParagraphBold>
            <button onClick={onDelete}>Eliminar</button>
        </ItemCartBody>
      
    )
}