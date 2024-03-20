import { CartImageProduct } from "@/ui/images";
import { ParagraphBold, Small } from "ui/typography"
import styled from "styled-components"
import {CartCount} from "components/cartCount"


const ItemCartBody = styled.div`
    display:flex;
    flex-direction: row;
    gap: 5px;
`
const CardContainer = styled.div`
    display: flex;
    width: 70px;
    flex-direction: column;
    

`


export function ItemCartCard({ key, photo, model, brand, colour, price,onDelete }) {
 
  
 
    return (
        <ItemCartBody key={key}>
            <CartImageProduct src={photo} alt={`${brand} ${model}`} />
            <CardContainer>
                <ParagraphBold>{brand}</ParagraphBold>
                <Small>{model}</Small>
                <Small>{colour}</Small>
            </CardContainer>
            <ParagraphBold>${price}</ParagraphBold>
            <CartCount id={key} price={price}></CartCount>
            <button onClick={onDelete}>Eliminar</button>
        </ItemCartBody>
    )
}