import styled from "styled-components"
import { DetailedImageProduct } from "ui/images"
import { ParagraphBold, SectionTitle, SubTitle, Title, Paragraph } from "@/ui/typography"
import { DefaultButton } from "ui/buttons"
import { useAppDataValue, useAddItem, useCartValue } from "lib/atoms"
import { addItemCartToast, loginCartToast } from "@/lib/sonner"
import { useEffect, useState } from "react"
import router from "next/router"

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



export function DetailedProductCard({ id, photo, price, brand, model, android, colour, camera, frontCamera, storage, ram }) {
    const [isCart, setIsCart] = useState(false)
    const { isLogged } = useAppDataValue()
    const cartData = useCartValue()
    const setAddProduct = useAddItem()

    useEffect(() => {
        const isInCart = cartData.some(item => item.id === id)
        console.log("boolean", isInCart)
        setIsCart(isInCart)
    }, [])

    async function handleCart() {
        if (isLogged == false) {
            console.log("check", isLogged)
            loginCartToast()
            return
        }

        setAddProduct({
            id: id,
            photo: photo,
            price: price,
            model: model,
            brand: brand,
            colour: colour,
            quantity: 1,
        })

        setIsCart(true)
        addItemCartToast()
    }

    function handleGoToCart() {
        router.push("/cart")
    }

    function handleContinueShopping() {
        router.push("/search?q=&offset=0&limit=10")
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

                {isCart ? (
                    <>
                        <DefaultButton type="button" onClick={handleGoToCart}>
                            <Paragraph>IR AL CARRITO</Paragraph>
                        </DefaultButton>
                        <DefaultButton type="button" onClick={handleContinueShopping}>
                            <Paragraph>SEGUIR COMPRANDO</Paragraph>
                        </DefaultButton>
                    </>

                ) : (
                    <DefaultButton type="button" onClick={handleCart}>
                        <Paragraph>AGREGAR AL CARRITO</Paragraph>
                    </DefaultButton>

                )
                }





            </DetailedProductCardContainer>
        </DetailedProductCardBody>
    )
}


