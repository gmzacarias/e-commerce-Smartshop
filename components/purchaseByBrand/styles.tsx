import styled from "styled-components"


export const PurchaseByBrandBody = styled.section`
  background-color:${({ theme }) => theme.backgroundSecondary};
  width:100%;
  height: fit-content;
  padding:20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BrandContainer = styled.div`
  width: 100%;
  max-width: 810px;
  height: 350px;
  padding:30px;
  display:flex;
  flex-direction :column;
  justify-content: space-around;
  align-items: center;

  a{
     cursor:pointer
   }

   @media(min-width:769px){
     height: fit-content;
     flex-direction: row;
   }
`
