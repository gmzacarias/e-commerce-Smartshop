
import styled from "styled-components"
import { useProduct } from "lib/hooks"
import { ImageCardProduct } from "ui/images"




export function ItemCard(data) {
    const dataCard = data.data as any
    console.log(dataCard)
    return (
        <>
            <h4>{dataCard.model}</h4>
            <ImageCardProduct src={dataCard.photo as string}></ImageCardProduct>

        </>
    )
}