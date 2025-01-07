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
  border-radius: 20px;
  box-shadow: 0 2px 6px 1px ${({ theme }) => theme.mode === "dark" ? "#0a0b0c" : "#cbd0d5"};
  width: 100%;
  max-width: 220px;
  height:fit-content;
  padding: 15px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap:10px;    
`

export const PhotoCard = styled.img`
  width:200px;
  height:200px;
  aspect-ratio:1/1;
`

export const ButtonCard = styled.button`
  background-color: #4697e8;
  border-radius: 4px;
  width: 100%;
  min-width: 130px;
  max-width: 220px;
  height: 44px;
  padding: 8px 32px;
  font-size: 14px;
  color: #eaeaea;
  text-decoration: none;
  cursor:pointer;
`