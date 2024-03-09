import styled from "styled-components"

type imgProps = {
    src: string,
    alt: string,
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

export function ImageCardProduct({ src, alt }: imgProps) {
    return <Images src={src} alt={alt} />
}

export function DetailedImageProduct({ src, alt }: imgProps) {
    return <DetailedImages src={src} alt={alt} />
}

export function CartImageProduct({ src, alt }: imgProps) {
    return <CartImages src={src} alt={alt} />
}