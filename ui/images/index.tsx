import styled from "styled-components"
import { PhotoCard } from "./styles"

type imageProps = {
    src: string,
    alt: string,
    title?: string,
}

const Images = styled.img`
    width: 200px;
    height: 180px;
    display: flex;
    `
const DetailedImages = styled(Images)`
    width: 400px;
    height: 300px;
    @media screen and (max-width:768px) {
        &{
            width: 250px;
            height: 200px;
        }
    }
    `
const CartImages = styled(Images)`
    width: 110px;
    height:70px;
    flex-shrink: 0;
`

export function ImageCardProduct({ src, alt }: imageProps) {
    return <Images src={src} alt={alt} />
}

export function DetailedImageProduct({ src, alt }: imageProps) {
    return <DetailedImages src={src} alt={alt} />
}

export function CartImageProduct({ src, alt }: imageProps) {
    return <CartImages src={src} alt={alt} />
}

export function ImageProductCard({ src, alt, title }: imageProps) {
    return <PhotoCard src={src} alt={alt} title={title} />
}