import styled from "styled-components"
import Brand from "@/ui/icons/brand.svg"

export const LoginBody = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
 
  @media(min-width:769px){
      flex-direction: row;
      justify-content: center;
    }
`
export const PageContainer = styled.section`
 background: url("./brand.svg");
      background-repeat: repeat;
      background-size: 90px;
      background-position: 10px;
      background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  text-align: left;

  @media(min-width:769px){
    width: 50%;
  height: 100%;
  padding: 70px;
    }
`

export const LoginContainer = styled(PageContainer)`
    background-color:var(--background-navfoot);
    background: none;
    flex-direction: column;
   
    
`
export const FormContainer = styled.form`
flex-direction: column;
`