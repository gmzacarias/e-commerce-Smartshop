import styled from "styled-components";

export const ProductsDataContainer = styled.div`
background-color: #eaeaea;
border:solid 1px rgb(110, 110, 110);
width: 500px;
height: fit-content;
padding: 16px;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
`

export const ImageContainer = styled.div`
background-color: chocolate;
max-width:100px;
padding:10px;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const ImageContent = styled.img`
width: 75px;
height: 75px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
`