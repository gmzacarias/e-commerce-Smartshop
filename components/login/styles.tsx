import styled from "styled-components"


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
  height: fit-content;
  padding: 70px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-start;
  gap: 10px;
  text-align: left;

  @media(min-width:769px){
    width: 50%;
    height: 100%;
    padding: 70px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`

export const LoginContainer = styled(PageContainer)`
  background-color:var(--background-navfoot);
  background: none;
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

export const OTPContainer=styled(PageContainer)`
  background-color:var(--background-navfoot);
  background: none;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding:unset;
  gap: 10px;
    
  @media(min-width:769px){
    width: 50%;
    height: 100%;
  }
` 

