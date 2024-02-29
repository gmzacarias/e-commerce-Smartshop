import styled from "styled-components"

export const Images = styled.img`
    width: 250px;
    height: 200px;
    display: flex;
`

export function ImageCardProduct({ src }) {
    return <Images src={src} />
}