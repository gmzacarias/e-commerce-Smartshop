import styled from "styled-components"
import { useProduct } from "lib/hooks"
import { DetailedImageProduct } from "ui/images"
import { ParagraphBold, SectionTitle, SubTitle, Title, Paragraph } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import { useAppDataValue } from "lib/atoms"
import { addItemCartToast, loginCartToast } from "@/lib/sonner"
import { addItemCart } from "@/lib/api"

const DetailedProductCardBody = styled.div`
border-radius: 10px;
padding:10px;
width:fit-content;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
color:var(--blue-dark);
gap:20px;


`

const DetailedProductCardContainer = styled.div`
background-color:var(--light);
display: flex;
flex-direction: row;
padding: 20px;

@media screen and (max-width:768px) {
    &{
flex-direction: column;
    }
}
`
const SpecificationContainer = styled.div`
flex-direction: column;
gap: 10px;
text-align: left;
border-left: 2px solid var(--grey);
padding:10px;

@media screen and (max-width:768px) {
    &{
border-left:unset;
border-top: 2px solid var(--grey);
    }
}
`



export function DetailedProductCard({ id, photo, brand, model, android, colour, camera, frontCamera, storage, ram }) {
    const { isLogged } = useAppDataValue()

    async function handleCart() {
        if (isLogged == false) {
            console.log("check", isLogged)
            loginCartToast()
            return
        }
        const response = await addItemCart(id)
        console.log("producto agregado", response)
        addItemCartToast()
        return response
    }



    return (
        <DetailedProductCardBody>
            <Title>Especificaciones</Title>
            <DetailedProductCardContainer>
                <DetailedImageProduct src={photo} alt={`${brand} ${model}`} />
                <SpecificationContainer>
                    <SectionTitle>{brand}</SectionTitle>
                    <SubTitle>{model}</SubTitle>
                    <SectionTitle>Ficha Técnica</SectionTitle>
                    <ParagraphBold>Android: {android}</ParagraphBold>
                    <ParagraphBold>Color: {colour}</ParagraphBold>
                    <ParagraphBold>Camara principal: {camera}</ParagraphBold>
                    <ParagraphBold>Camara frontal: {frontCamera}</ParagraphBold>
                    <ParagraphBold>Almacenamiento: {storage}</ParagraphBold>
                    <ParagraphBold>Memoria: {ram}</ParagraphBold>
                </SpecificationContainer>
                <DefaultButton type="button" onClick={handleCart}>
                    <Paragraph>AGREGAR AL CARRITO</Paragraph>
                </DefaultButton>

            </DetailedProductCardContainer>
        </DetailedProductCardBody>
    )
}


