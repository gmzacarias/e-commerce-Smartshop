import styled from "styled-components"

type ContentContainerProps = {
  isAuth: boolean
}

export const PageContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
 
  @media(min-width:769px){
    flex-direction:${({ isAuth }) => (isAuth ? "row" : "column")};
    justify-content: center;
  }
`

export const ContentContainer = styled.div<ContentContainerProps>`
  background: url("./brand.svg");
  background-repeat: repeat;
  background-size: 90px;
  background-position: 10px;
  background-blend-mode: overlay;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height:100%;
  min-height:${({ isAuth }) => (isAuth ? "250px" : "100%")};
  padding: 70px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media(min-width:769px){
    width: ${({ isAuth }) => (isAuth ? "50%" : "100%")};
    min-height:${({ isAuth }) => (isAuth ? "500px" : "100%")};
    padding: 70px;
    align-items:${({ isAuth }) => (isAuth ? "flex-start" : "center")};
  }
`

export const AuthFormContainer = styled.div`
  background-color:var(--background-navfoot);
  background: none;
  width: 100%;
  height: 100%;
  min-height: 250px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  @media(min-width:769px){
    width:50%;
    min-width: 350px;
    max-width: 600px;
    min-height:500px;
    padding: 70px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`