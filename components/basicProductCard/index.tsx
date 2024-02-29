import { Paragraph, SectionTitle, SectionTitleBold } from "@/ui/typography"
import styled from "styled-components"
import { ImageCardProduct } from "ui/images"
import { ParagraphBold } from "ui/typography"

const BasicProductCardBody = styled.div`
background-color:#292728;
border-radius: 3px;
padding:10px;
width:220px;
height: 300px;
display: flex;
flex-direction: column;
border-radius: 10%;
color:var(--light)
`





export function BasicProductCard({key, id, brand, model, photo, price }) {
    return (
        <BasicProductCardBody key={id} id={id}>
            <ImageCardProduct src={photo} alt={`${brand} ${model}`} />
            <SectionTitle>{brand + " " + model}</SectionTitle>
            <SectionTitleBold>${price}</SectionTitleBold>
        </BasicProductCardBody>
    )

}