import styled from "styled-components"
import { SubTitle } from "ui/texts"


const FeaturedProductsBody = styled.div`
background-color:var(--red) ;
width: 100%;
height:fit-content ;// usar fit-content
padding: 20px;
display: flex;
flex-direction: column;
gap:20px;
margin-top: 10px;
`
const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    flex-wrap: wrap;

    @media screen and (max-width:1000px) {
        &{
          flex-direction:column;
        }   
    }

`

const Products = styled.div`
background-color: #292728;
min-width:330px;
height: 380px;

`

export function FeaturedProducts() {
    return (
        <FeaturedProductsBody>
            <SubTitle>Productos destacados</SubTitle>
            <ProductsContainer>
                <Products />
                <Products />
                <Products />
            </ProductsContainer>
        </FeaturedProductsBody>
    )
}