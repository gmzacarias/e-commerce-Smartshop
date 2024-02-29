import styled from "styled-components"

type imgProps = {
    src: string,
    alt: string,
}

export const Images = styled.img`
    width: 200px;
    height: 180px;
    display: flex;
`

export function ImageCardProduct({ src,alt }:imgProps) {
    return <Images src={src} alt={alt} />
}