import styled from "styled-components"

export const ProfileBody = styled.div`
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


