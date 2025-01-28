import styled from "styled-components"

export const FeaturedProductsSection = styled.div`
  width: 100%;
  max-width: fit-content;
  height:fit-content ;
  margin:0 auto;
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
  gap:30px;

  @media (min-width:769px){
      margin-left: auto;
      margin-right: auto;    
      flex-direction:row;
      justify-content: flex-start;
    } 
`
export const ErrorContainer = styled.div`
  background-color: ${({ theme }) => theme.mode === "dark" ? "#ff4444" : "#f8d7da"};
  border: 1px solid ${({ theme }) => theme.mode === "dark" ? "#ff0000" : "#f5c6cb"};
  border-radius: 5px;
  margin: 20px 0;
  padding: 15px;
  width: 100%;
  max-width:fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`