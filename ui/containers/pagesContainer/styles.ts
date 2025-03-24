import styled from "styled-components"

export const PageContainer = styled.div`
width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
 
  @media(min-width:769px){
    flex-direction: row;
    justify-content: center;
  }
`

export const ContentContainer = styled.div`
  background: url("./brand.svg");
  background-repeat: repeat;
  background-size: 90px;
  background-position: 10px;
  background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height:100%;
  padding: 70px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media(min-width:769px){
    padding: 70px;
    gap: 10px;
  }
`

export const AuthFormContainer = styled.div`
  background-color:var(--background-navfoot);
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  @media(min-width:769px){
    width: 50%;
    height: 100%;
    padding: 70px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`