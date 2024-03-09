import { CartImageProduct } from "@/ui/images";
import { ParagraphBold, Small } from "ui/typography"
import styled from "styled-components"
import {CartCount} from "components/cartCount"

const ItemCartBody = styled.div`
    display:flex;
    flex-direction: row;
    gap: 5px;
`
const DetailedContainer = styled.div`
    flex-direction: column;
`


export function ItemCartCard({ key,id, photo, model, brand, colour, price }) {
    return (
        <ItemCartBody key={key} id={id}>
            <CartImageProduct src={photo} alt={`${brand} ${model}`} />
            <DetailedContainer>
                <ParagraphBold>{brand}</ParagraphBold>
                <Small>{model}</Small>
                <Small>{colour}</Small>
            </DetailedContainer>
            <ParagraphBold>${price}</ParagraphBold>
            <CartCount id={id}></CartCount>
        </ItemCartBody>
    )
}