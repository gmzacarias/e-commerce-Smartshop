import styled from "styled-components"

export const FeaturedProductsSection = styled.div`
background-color:#b7c7c8 ;
width: 100%;
height:fit-content ;// usar fit-content
padding: 20px;
display: flex;
flex-direction: column;
gap:20px;

`
export const ProductsContainer = styled.div`
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

export const ProductCard = styled.div`
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

export const PhotoCard = styled.img`
width:200px;
height:180px;

`

export const ButtonCard = styled.button`
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