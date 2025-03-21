import styled from "styled-components"

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

export const ProductCard = styled.div`
  background-color:${({ theme }) => theme.mode === "dark" ? "#121212" : "#f2f4f5"};
  border-radius:16px;
  border:1px solid #ddd;
  width: 240px;
  height:fit-content;
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap:10px;    
  cursor:pointer;
`

export const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap:10px
`