import styled from "styled-components"
import { SubTitle } from "@/ui/typography"
import { useProductsList } from "@/lib/hooks"
import Skeleton from "react-loading-skeleton"
import router from "next/router"

const FeaturedProductsBody = styled.div`
background-color:#b7c7c8 ;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;


    @media screen and (min-width:769px) and (max-width:1023px) {
        &{
          flex-direction:row;
          justify-content: flex-start;
          margin-left: auto;
          margin-right: auto;
        }   
    }
    
    @media screen and (min-width: 1024px){
        &{
        flex-direction: row;
        }
    }


`

const ProductCard = styled.div`
background-color: #eaeaea;

width: 100%;
min-width: 200px;
max-width: 255px;
height: 340px;
margin: 10px 5px;
padding: 15px 5px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 4px;
box-shadow: 0 2px 6px 1px #0000001a;
gap:5px
    
`

const PhotoCard = styled.img`
width:200px;
height:180px;

`

const ButtonCard = styled.button`
    width: 158px;
    min-width: 130px;
    height: 44px;
    padding: 8px 32px;
    background-color: #0076c7;
    font-size: 14px;
    color: #eaeaea;
    border-radius: 4px;
    border: none;
    cursor:pointer;
    text-decoration: none;

    `



export function FeaturedProducts() {
    const data = useProductsList()
    console.log("data destacada", data)


function handleRedirect(id){
    confirm(`redirigir al producto ${id}`)
    router.push(`/product/${id}`)
    
}

    return (
        <FeaturedProductsBody>
            <SubTitle>Productos destacados</SubTitle>
            <ProductsContainer>
                {data ? (
                    data.map((item) => (
                        <ProductCard key={item.id}>
                            <PhotoCard src={item.photo} />
                            <h3 style={{ fontSize: 14, fontWeight: "normal" }}>{`${item.brand} ${item.model} ${item.storage}`}</h3>
                            <h3 style={{ fontSize: 16, fontWeight: "bold" }}>{`$${item.price}`}</h3>
                            <ButtonCard onClick={()=>handleRedirect(item.id)}>¡Lo quiero!</ButtonCard>
                        </ProductCard>
                        
                    ))
              
                ) : (
                    Array.from({ length:3}).map((_, index) => (
                        <ProductCard key={index}>
                            <Skeleton width={200} height={180} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={150} height={27} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={80} height={27} borderRadius={5} baseColor="#fff" />
                            <Skeleton width={158} height={44} borderRadius={4} baseColor="#fff" />
                        </ProductCard>
                    ))
                )}
            </ProductsContainer>
        </FeaturedProductsBody>
    )
}