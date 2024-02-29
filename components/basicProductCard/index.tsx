import { Paragraph, SectionTitle, SectionTitleBold, Small } from "@/ui/typography"
import styled from "styled-components"
import { ImageCardProduct } from "ui/images"
import { ParagraphBold } from "ui/typography"
import { CardButton } from "ui/buttons"
import router from "next/router"

const BasicProductCardBody = styled.div`
background-color:var(--light);
border-radius: 60px 30px 60px 30px;
padding:10px;
width:220px;
height: fit-content;
display: flex;
flex-direction: column;
color:var(--blue-dark);
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;

&:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 2px;
}
`

const DetailedContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: space-between;
align-items:center;
gap: 5px;
`

export function BasicProductCard({ key, id, brand, model, photo, price }) {
 function handleRedirect(){
    router.push(`/product/${id}`)
 }
 
    return (
        <BasicProductCardBody key={key} id={id}>
            <ImageCardProduct src={photo} alt={`${brand}${model}`} />
            <DetailedContainer>
                <Small>{brand}</Small>
                <SectionTitle>{model}</SectionTitle>
                <SectionTitleBold>${price}</SectionTitleBold>
                <CardButton onClick={handleRedirect}>Ver mas</CardButton>
            </DetailedContainer>
        </BasicProductCardBody>
    )
}